require("dotenv").config({path: './.env'});
const connectDB = require('./src/db/index');


connectDB();