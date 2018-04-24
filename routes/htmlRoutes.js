var express = require("express");
var router = express.Router();

router.get("/survey", (req, res) => {
	res.sendFile("../public/survey.html")
})

router.get("*", (req, res) => {
	res.sendFile("../public/home.js")
})

module.exports = router