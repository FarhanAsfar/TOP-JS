import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
    const {username, fullName, email, password} = req.body;

    if([fullName, email, username, password].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }

    const exitsedUser = User.findOne({
        $or: [
                {username},
                {email}
            ]
    });

    if(exitsedUser){
        throw new ApiError(409, "Username or Email already exists")
    }
});


export { registerUser }