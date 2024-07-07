const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    "first_name": {
        type: String,
        required: true,
    },
    "last_name": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
    },
    "password": {
        type: String,
        required: true,
    },
    "address": {
        type: String,
        required: true,
    },
    "phone_number": {
        type: Number,
        required: true,
    },
}, { timestamps: true })
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
module.exports = userModel;