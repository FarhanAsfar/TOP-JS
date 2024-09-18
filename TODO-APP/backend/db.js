const mongoose =require("mongoose");

//mongodb+srv://farhan:farhan21@cluster0.0qnn6.mongodb.net/
mongoose.connect("mongodb+srv://farhan:farhan21@cluster0.0qnn6.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}