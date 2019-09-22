var db = require("../models");

module.exports = function(app) {

  // Render index page
  app.get("/", function(req, res) {
      db.Burger.findAll({}).then( 
        function (result) {
          res.render("index", {burgers : result});
        });
  });

  // Create new burger
  app.post("/api/create", function (req, res) {
    db.Burger.create({
      name: req.body.name,
      description: req.body.description
    }).then( function (result) {
      res.render("index", {burgers : result});
    });
  });

  // Update Burger (devoured: false => true)
  app.put("/api/devour/:id", function (req, res) {
    //var burgerId = req.params.id;
    db.Burger.update({
      devoured: true
    }, {
      where: {id : req.params.id}
    }).then(function (result) {
      console.log(`Burger ${result} has been devoured`);
      res.render("index", {burgers : result});
    });

    // Update description
    app.post("/api/update", function (req, res) {
      db.Burger.update({
        description: req.body.description
      }, {
        where: {id : req.body.id}
      }).then( function(result) {
        console.log(`Burger toppings updated: ${result}`);
        res.render("index", {burgers : result});
      });
    });

    // Delete record(s) matching the passed in id
    app.delete("/api/delete-burger/:id", function (req, res) {
      var burgerId = req.params.id;
      db.Burger.destroy({
        where: {id: burgerId}
      }).then(
        function(result) {
          console.log(result);
          res.render("index", {burgers : result});
        });
    });

  });
};