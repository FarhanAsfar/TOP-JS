const express = require('express');
const urlRoute = require('./routes/url');
const { connectMongoDB } = require('./connection');
const URL = require('./models/url');
const path = require('path');
const staticRoute = require('./routes/staticRouter');

const app = express();
const PORT = 8000;

connectMongoDB('mongodb://localhost:27017/short-url')
.then(()=> {
    console.log("MongoDB connected");
})

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use('/', staticRoute);

app.use(express.json());

app.get('/test', async (req, res)=>{
    const urls = await URL.find({});
    return res.render('home', {
        urls: urls,
    });
})

app.use('/url', urlRoute);

app.get('/:shortId', urlRoute);

app.get('/analytics/:shortId', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})