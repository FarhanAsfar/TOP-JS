const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const { checkCookie } = require('./middleware/auth');

const app = express();
const PORT = 8000;

const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');

const Blog = require('./models/blog');


mongoose.connect('mongodb://localhost:27017/blog').then(e =>
    console.log('mongodb connected')
);



app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(checkCookie('token'));
app.use(express.static(path.resolve('./public')));//to display the images in public folder.

app.get('/', async(req, res) => {
    const allBlogs = await Blog.find({});
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use('/user', userRouter);
app.use('/blog', blogRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
});