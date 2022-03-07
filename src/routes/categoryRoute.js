const express = require('express');
const app = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');

app.get("/", categoryController.getCategories);
app.get("/:id", categoryController.getCategoryById);

app.post("/addCategory", auth, categoryController.addCategory);

app.put("/:id", auth, categoryController.editCategory);

app.delete("/:id",auth, categoryController.deleteCategory);

module.exports = app;