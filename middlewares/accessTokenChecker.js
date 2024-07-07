const { verifytoken } = require("../helpers/accessTokenHelper");

async function checkAccessToken(req, res, next) {
    const getHeaders = await req.headers;
    if (getHeaders.authorization) {
        const token = getHeaders.authorization;
        const response = await verifytoken(token);
        if(response.status == 1)
            next();
        else
        return res.status(401).send({"message":"Access Token required to access this route1"})
    } else {
        return res.status(401).send({ "message": "Access Token required to access this route" });
    }
}

module.exports = {
    checkAccessToken
}