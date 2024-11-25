const express = require('express');
const {handleUserSignup} = require('../controllers/user');

const router = express.router();


router.post('/', handleUserSignup);


module.exports = router;