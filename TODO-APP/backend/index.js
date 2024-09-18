const express = require("express");
const app = express();

const Port = 3000;


app.use(express.json());

app.post("/todo", (req,res)=>{

})

app.get("/todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{
    
})

app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
});