const express = require('express')
const router = express.Router();

const {handleGenerateNewURL} = require('../controllers/url');

router.post('/')