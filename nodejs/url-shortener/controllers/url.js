const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewURL(req, res) {
    const body = req.body;
    
    if(!body.url)
        return res.status(400).json({
            error: "No url found"
    });
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.render('home', {
        id: shortID,
    });

}

async function handleGetURL(req, res) {
    try{
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            {
                shortId,
            },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                },
            }
        );
        res.redirect(entry.redirectURL);
    }catch(error){
        console.log(error);
    }
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

module.exports = {
    handleGenerateNewURL,
    handleGetURL,
    handleGetAnalytics,
}