// const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secretKey = "secret";

function setUser(user){
    return jwt.sign(user, secretKey);
}

function getUser(toekn){
    return jwt.verify(toekn, secretKey);
}


module.exports = {
    setUser,
    getUser,
}