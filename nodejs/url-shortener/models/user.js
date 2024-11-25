const mongoose = require('mongoose');


const userSchem = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    emal: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});