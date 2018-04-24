var express = require("express");
var router = express.Router();
var path = require("path");

function setRoutes(app, rootDir){
app.get("/survey", (req, res) => {
	res.sendFile(rootDir + "/public/survey.html")
})

app.get("*", (req, res) => {
	res.sendFile(rootDir + "/public/home.html")
})
};
module.exports = {setRoutes}