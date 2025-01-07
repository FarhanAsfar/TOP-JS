const { Schem, model, Schema } = require('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
        required: true,
    },
    coverImageURL: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
}, {timestamps: true});


const blog = model("blog", blogSchema);

module.exports = {
    blog,
}