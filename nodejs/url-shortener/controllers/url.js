const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleGenerateNewURL(req, res) {
    const body = req.body;
    
    if(!body.url)
        return res.status(400).json({
            error: "No url found"
    });
    const shortID = nanoid(8);

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [] 
    });

    return res.json({
        id: shortID
    });
}

module.exports = {
    handleGenerateNewURL,
}