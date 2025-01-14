const http = require("http");
const express = require("express");
const path = require("path");

const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 9000;

const io = new Server(server);

//socket.io
io.on('connection', (socket)=>{
    console.log("new user connected", socket.id);

    socket.on('disconnect', ()=>{
        console.log("user disconnected", socket.id);
    });
});

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res)=> {
    return res.sendFile(path.resolve('./public/index.html'))
});

server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});