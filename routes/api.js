var express = require("express");
var router = express.Router();
var control = require("../controllers/friendscontroller")

function setApis(app){
	app.get("/api/friends", (req, res) => {
		control.getFriends(req, res)
	})

	app.post("/api/friends", (req, res) => {
		control.addFriends(req, res)
	})
};

module.exports = {setApis}