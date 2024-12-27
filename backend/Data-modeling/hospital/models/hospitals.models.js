const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    pincode: {
        type: String,
    },
    specializedIn: [
        {
            type: String,
        },
    ],
},{timestamps: true});


export const Hospital = mongoose.model('Hospital', hospitalSchema);