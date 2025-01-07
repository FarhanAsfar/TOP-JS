const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const app = express();
const PORT = 8000;

const userRouter = require('./routes/user');
const { checkCookie } = require('./middleware/auth');

mongoose.connect('mongodb://localhost:27017/blog').then(e =>
    console.log('mongodb connected')
);



app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(checkCookie('token'));

app.get('/', (req, res) => {
    res.render('home', {
        user: req.user,
    });
});




app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
});