const bcrypt = require('bcrypt')
async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, parseInt(process.env.PASSWORD_SALT))
    return hash;
}

async function verifyPassword(plainPassword, hashedPassword) {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword)
    } catch (error) {
        return false;
    }
}

module.exports = {
    hashPassword,
    verifyPassword,
}