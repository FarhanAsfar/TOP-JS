const mongoose = require("mongoose");
const express = require("express");

const app = express();

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on ${process.env.PORT}`);
        })
        
        console.log(`MongoDB Connected...HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
}


module.exports = connectDB;