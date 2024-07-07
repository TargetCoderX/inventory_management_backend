const express = require('express');
const { login, register } = require('../controllers/authentication/auth');
const { saveCategories, getCategories, updateCategoryStatus, deleteCategory } = require('../controllers/inventory/category_and_tags');
const { checkAccessToken } = require('../middlewares/accessTokenChecker');
const authRoutes = express.Router();
const protectedRouter = express.Router();
protectedRouter.use(checkAccessToken);
/* router 1 */
authRoutes.post('/login', login);
authRoutes.post('/register', register);

/* protected routes with token check in middleware */
protectedRouter.post('/save-category', saveCategories)
protectedRouter.get('/get-category', getCategories)
protectedRouter.post('/update-category-status', updateCategoryStatus)
protectedRouter.delete('/delete-category', deleteCategory)


module.exports = {
    authRoutes,
    protectedRouter,
}