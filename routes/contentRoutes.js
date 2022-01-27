const express = require("express");
const controller = require("../controllers/contentController");

const router = express.Router();

router.get("/items", controller.getItems);
router.get("/quiz", controller.getQuestions);

module.exports = router;
