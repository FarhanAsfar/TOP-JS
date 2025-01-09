const { Router } = require('express');
const multer = require('multer');

const Blog = require('../models/blog');

const router = Router();
const path = require('path')

// const resolvePath = path.resolve('./public/upload');
// console.log(resolvePath);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/upload`))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  })
  const upload = multer({ storage: storage });

router.get('/add-new', (req,res)=>{
    return res.render('addBlog', {
        user: req.user,
    })
});


router.post('/', upload.single('coverImage'), async(req,res)=>{
    // console.log(req.file);
    const {title, body} = req.body;
    const blog = await Blog.create({
      body,
      title,
      createdBy: req.user._id,
      coverImageURL: `/upload/${req.file.filename}`
    })
    return res.redirect(`/blog/${blog._id}`);
})

router.get('/:id', async(req, res)=>{
  const blog = await Blog.findById(req.params.id);
  return res.render('blog', {
    user: req.user,
    blog,
  });
})



module.exports = router;