import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    const {username, fullName, email, password} = req.body;
    console.log(fullName)

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
        username: username.toLowerCase(),
        email,
        password,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if(!createdUser){
        throw new ApiError(500, "User registration failed");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered")
    )
});


export { registerUser }