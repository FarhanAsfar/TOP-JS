import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Couldn't generate access and refresh token!")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const {username, fullName, email, password} = req.body;
    // console.log(username, fullName)

    if([fullName, email, username, password].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }

    const exitsedUser = await User.findOne({
        $or: [
                {username},
                {email}
            ]
    });

    if(exitsedUser){
        throw new ApiError(409, "Username or Email already exists")
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    // console.log(avatarLocalPath)
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
    // console.log(coverImageLocalPath)

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }
    // console.log(req.files);
    // console.log(req.body)

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Failed to upload on cloudinary")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        username: username?.toString().toLowerCase(),
        email,
        password,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    console.log(createdUser);

    if(!createdUser){
        throw new ApiError(500, "User registration failed");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered")
    )
});

const loginUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    // console.log(username, email, password);

    if(!username && !email){
        throw new ApiError(400, "username or email is required");
    }

    const user = await User.findOne({
        $or: [
            {
                username,
            },
            {
                email
            },
        ]
    });

    if(!user){
        throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPassword(password);
    console.log(isPasswordValid)
    if(!isPasswordValid){
        throw new ApiError(401, "Incorrect password");
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200, {
            user: loggedInUser, accessToken, refreshToken
        },
            "user logges in successfully"
        )
    )
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }
    )

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, `User: ${req.user.username} Logged out`))
})


export { 
    registerUser,
    loginUser,
    logoutUser,
 }