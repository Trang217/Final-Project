const express = require("express");
const controller = require("../controllers/contentController");

const router = express.Router();

router.get("/game", controller.getGameContent);
router.get("/quiz", controller.getQuizContent);

module.exports = router;
