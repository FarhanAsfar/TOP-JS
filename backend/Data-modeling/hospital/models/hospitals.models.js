const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({

},{timestamps: true});


export const Hospital = mongoose.model('Hospital', hospitalSchema);