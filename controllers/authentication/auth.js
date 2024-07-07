const { generateToken, verifytoken } = require("../../helpers/accessTokenHelper");
const { hashPassword, verifyPassword } = require("../../helpers/password");
const userModel = require("../../models/user.schema");

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const searchUser = await userModel.findOne({ "email": email });
        if (searchUser) {
            /* checking password */
            if (await verifyPassword(password, searchUser.password)) {
                const UserData = {
                    "first_name": searchUser.first_name,
                    "last_name": searchUser.last_name,
                    "email": searchUser.email,
                    "phone": searchUser.phone,
                }
                res.send({
                    status: 1,
                    user_data: UserData,
                    token: generateToken(UserData)
                })
            }else{
                res.send({
                    "status":0,
                    "message":"Password Mismatched"
                })
            }
        } else {
            res.send({
                status: 0,
                message: "Email not found"
            })
        }

    } catch (error) {
        res.send({
            status: 0,
            message: "something went wrong",
            error
        })
    }
}
async function register(req, res) {
    const { first_name, last_name, email, password, address, phone_number } = req.body;
    try {
        const createUser = await new userModel({ first_name, last_name, email, password: await hashPassword(password), address, phone_number });
        await createUser.save();
        res.send({
            "status": 1,
            "message": "User Created Successfully",
        })
    } catch (error) {
        res.send({
            "status": 0,
            "message": "Something went wrong, while creating user",
            error
        })
    }
}

module.exports = {
    login,
    register,
}