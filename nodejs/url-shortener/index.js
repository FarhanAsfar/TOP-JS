const express = require('express');
const urlRoute = require('./routes/url');
const urlRoute = require('./connection');
const { connectMongoDB } = require('./url-shortener/connection');

const app = express();
const PORT = 8000;

connectMongoDB('mongodb://localhost:27017/short-url')

app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})