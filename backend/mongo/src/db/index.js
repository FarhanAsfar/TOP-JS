const DB_NAME = require("../../constants.js");
const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`);
        console.log(`\n MongoDB Connected... HOST${connection.connection.host}`);
    } catch (error) {
        console.log("Connection error ", error);
        throw error;
        process.exit(1);
    }
}


export default connectDB
