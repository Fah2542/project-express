const express = require('express');
const app = express.Router();
const assetsController = require('../controllers/assetsController');
const auth = require('../middleware/auth');

app.get("/", assetsController.getAssets);
app.get("/:id", assetsController.getAssetsById);
app.post("/addAssets", auth,assetsController.addAssets);
app.put("/:id", auth, assetsController.editAssets);
app.delete("/:id", auth, assetsController.deleteAssets);

module.exports = app;

