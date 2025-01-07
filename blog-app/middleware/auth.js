const { validateToken } = require("../services/authentication");

function checkCookie(cookieName){
    return (req, res, next) => {
        const tokenValue = req.cookies?.[cookieName];

        if(!tokenValue){
            return next();
        }
        try{
            const userPayload = validateToken(tokenValue);
            req.user = userPayload;
        }catch(error){
        }
        return next();
    }
}

module.exports = {
    checkCookie,
}