const { getUser } = require("../service/auth");

async function restrictToLoggedinUser(req, res, next){
    const userUid = req.cookies?.uid;

    if(!userUid){
        return res.redirect('/login');
    }
    const user = getUser(userUid);

    if(!user){
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUser,
}