const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    hospitalName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    diagnosedWith: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    checkedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
},{timestamps: true});


export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);