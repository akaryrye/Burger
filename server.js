// Modules and Imports
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/controller.js");

// App Configurations
var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start Server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
