import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());


//import routes
import userRouter from "./src/routes/user.routes.js"
import { errorHandler } from "./src/middlewares/error.middleware.js";



//routes decalaration
app.use("/api/v1/users", userRouter);

app.use(errorHandler) //middleware to handle error response

export {app};