const express = require('express')
const router = express.Router();

const {handleGenerateNewURL, handleGetURL,
    handleGetAnalytics
} = require('../controllers/url');


//routes
router.post('/', handleGenerateNewURL);
router.get('/:shortId', handleGetURL);
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;