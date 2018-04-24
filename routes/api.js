var express = require("express");
var router = express.Router();
var control = require("../controllers/friendscontroller")

router.get("/api/friends", (req, res) => {
	control.getFriends(req, res)
})

router.post("/api/friends", (req, res) => {
	control.addFriends(req, res)
})

module.exports = router