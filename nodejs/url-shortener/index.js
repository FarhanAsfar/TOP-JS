const express = require('express');
const urlRoute = require('./routes/url');
const { connectMongoDB } = require('./connection');
const URL = require('./models/url');

const app = express();
const PORT = 8000;

connectMongoDB('mongodb://localhost:27017/short-url')
.then(()=> {
    console.log("MongoDB connected");
})

app.use(express.json());

app.use('/url', urlRoute);

app.get('/:shortId', urlRoute);

app.get('/analytics/:shortId', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})