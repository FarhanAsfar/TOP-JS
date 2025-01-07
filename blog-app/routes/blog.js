const { Router } = require('express');
const multer = require('multer');
const router = Router();
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/upload/`))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalName}`
      cb(null, fileName);
    }
  })
  
  const upload = multer({ storage: storage })

router.get('/add-new', (req,res)=>{
    return res.render('addBlog', {
        user: req.user,
    })
});


router.post('/', upload.single('coverImage'), (req,res)=>{
    return res.redirect('/');
})



module.exports = router;