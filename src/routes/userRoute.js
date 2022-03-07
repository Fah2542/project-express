const express = require('express');
const app = express.Router();
const userCotroller = require('../controllers/userController');
const auth = require('../middleware/auth');

app.get("/", userCotroller.getUser);
app.get("/:id", userCotroller.getUserById);
app.post("/register", auth, userCotroller.register);
app.post("/login", userCotroller.login);
app.put("/:id", auth, userCotroller.editUser);
app.delete("/:id", auth, userCotroller.deleteUser);

module.exports = app;