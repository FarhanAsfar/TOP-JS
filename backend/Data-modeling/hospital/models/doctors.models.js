const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
    },
    qualifications: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
    },
    workingHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
    ],
},{timestamps: true});


export const Doctor = mongoose.model('Doctor', doctorSchema);