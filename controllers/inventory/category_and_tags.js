const { categoryModel } = require("../../models/category.schema");

async function saveCategories(req, res) {
    const body = await req.body;
    try {
        const categoryObject = new categoryModel(body);
        await categoryObject.save();
        return res.send({ "status": 1, "message": "Category Saved" });
    } catch (error) {
        return res.send({ "status": 0, "message": "Something went wrong", error });
    }
}

async function getCategories(req, res) {
    try {
        const getData = await categoryModel.find();
        return res.send({
            "status": 1,
            "message": "",
            "data": getData,
        })
    } catch (error) {
        return res.send({
            "status": 1,
            message: "Something Went Wrong",
            error
        })
    }
}

async function updateCategoryStatus(req, res) {
    const { category_id, updated_status } = req.body;
    try {
        await categoryModel.findOneAndUpdate({ "_id": category_id }, { status: updated_status });
        return res.send({ status: 1, message: "category updated successfully" })
    } catch (error) {
        return res.send({ status: 0, message: "Something went wrong" })
    }
}

async function deleteCategory(req, res) {
    const { category_id } = req.body;
    try {
        await categoryModel.findOneAndDelete({ "_id": category_id });
        return res.send({ status: 1, message: "category deleted successfully" })
    } catch (error) {
        return res.send({ status: 0, message: "Something went wrong" })
    }
}

module.exports = {
    saveCategories,
    getCategories,
    updateCategoryStatus,
    deleteCategory,
}