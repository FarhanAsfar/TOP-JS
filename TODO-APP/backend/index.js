const express = require("express");
const app = express();
const { createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

const Port = 3000;


app.use(express.json());

app.post("/todo", async(req,res)=>{
    const createPayload = req.body;
    //console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload);
    //console.log(parsedPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid inputs",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        message: "Todo added"
    })
})

app.get("/todos", async(req, res)=>{
    const todos = await todo.find();

    res.json({
        todos
    })
})

app.put("/completed/:id", async(req, res)=>{
    //we dont need to get the body as we are just updating the task status, completed or not. 
    
    // const updatePayload = req.body;
    // console.log(updatePayload);
    // const parsedPayload = updateTodo.safeParse(updatePayload);
    // console.log(parsedPayload);

    // // const id = req.params.id;
    // // console.log(id);

    // if(!parsedPayload.success){
    //     res.status(411).json({
    //         message: "Invalid inputs",
    //     });
    //     return;
    // }

    try{

        await todo.updateOne({
            _id: req.params.id,
        }, {$set:
            {completed: true}
        })
        res.json({
            message: "Marked as completed"
        })
    }catch(error){
        res.json({
            message: error
        })
        console.log(error);
    }
})

app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
});