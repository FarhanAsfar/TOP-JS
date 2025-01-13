require("dotenv").config({path: './.env'});
const app = require("./app");
const connectDB = require('./src/db/index');


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on ${process.env.PORT}`);
    })
})
.catch(err => {
    console.log("MongoDB connection failed", err);
});