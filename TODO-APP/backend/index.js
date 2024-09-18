const express = require("express");
const app = express();
const { createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

const Port = 3000;


app.use(express.json());

app.post("/todo", async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid inputs",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })
    res.json({
        message: "Todo added"
    })
})

app.get("/todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid inputs",
        });
    }
    return;
})

app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
});