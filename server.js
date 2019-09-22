// Modules and Imports
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");

// App Configurations
var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/controller.js")(app);

// Start Server
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
  });
});