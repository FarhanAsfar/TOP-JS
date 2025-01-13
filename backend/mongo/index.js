require('dotenv').config({path: './env'})

const connectDB = require('./src/db/index.js');


console.log(process.env);



connectDB();        