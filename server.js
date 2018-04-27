var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./routes/htmlRoutes.js");
var apis = require("./routes/api.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

routes.setRoutes(app, __dirname);
apis.setApis(app);

// Sets up the Express app to handle data parsing


// app.use('/', apiRoutes, htmlRoutes);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});