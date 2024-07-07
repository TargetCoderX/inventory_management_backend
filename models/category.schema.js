const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
    "category_name": {
        type: String,
        required: true,
        unique: true,
        set: (value) => {
            return value.toLowerCase();
        },
    },
    "category_description": {
        type: String,
        required: false,
    },
    "status": {
        type: Boolean,
        required: false,
    }
})
const categoryModel = mongoose.models.category || mongoose.model('category', categorySchema);
module.exports = {
    categoryModel,
}