const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
    }
}, {timestamps: true});


export const Category = mongoose.model("Category", categorySchema);