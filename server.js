var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./routes/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
routes.setRoutes(app, __dirname);


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

 // app.use('/', apiRoutes, htmlRoutes);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

