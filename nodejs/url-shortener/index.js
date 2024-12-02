const express = require('express');
const cookieParser = require('cookie-parser');  
const URL = require('./models/url');
const path = require('path');
const { connectMongoDB } = require('./connection');


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));//support form data


const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

connectMongoDB('mongodb://localhost:27017/short-url')
.then(()=> {
    console.log("MongoDB connected");
})

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use('/', staticRoute);
app.use('/user', userRoute);

app.get('/test', async (req, res)=>{
    const urls = await URL.find({});
    return res.render('home', {
        urls: urls,
    });
})

app.use('/url', urlRoute);

app.get('/url/:shortId', urlRoute);

app.get('/analytics/:shortId', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})