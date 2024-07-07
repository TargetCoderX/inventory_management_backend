const jwt = require('jsonwebtoken');
const generateToken = (data = {}) => {
    return jwt.sign(data, process.env.JWT_SECRET);
}
const verifytoken = async (token) => {
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        return {
            "status": 1,
            decoded
        }
    } catch (error) {
        return {
            "status": 0,
            error
        }
    }
}

module.exports = {
    generateToken,
    verifytoken,
}