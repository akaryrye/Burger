var express = require("express");
var router = express.Router();
var Burger = require("../models/model.js");

// Render index page
router.get("/", function(req, res) {
    Burger.findAll({}).then( 
      function (result) {
        res.render("index", {burgers : result});
      });
});

// Create new burger
router.post("/api/create", function (req, res) {
  Burger.create({
    name: req.body.name,
    description: req.body.description
  }).then( function (result) {
    res.render("index", {burgers : result});
  });
});

// Update Burger (devoured: false => true)
router.put("/api/devour/:id", function (req, res) {
  //var burgerId = req.params.id;
  Burger.update({
    devoured: true
  }, {
    where: {id : req.params.id}
  }).then(function (result) {
    console.log(`Burger ${result} has been devoured`);
    res.render("index", {burgers : result});
  });

  // Update description
  router.put("/api/update/:id", function (req, res) {
    Burger.update({
      description: req.body.description
    }, {
      where: {id : req.params.id}
    }).then( function(result) {
      console.log(`Burger toppings updated: ${result}`);
      res.render("index", {burgers : result});
    });
  });

  // Delete record(s) matching the passed in id
  router.delete("/api/delete-burger/:id", function (req, res) {
    var burgerId = req.params.id;
    Burger.destroy({
      where: {id: burgerId}
    }).then(
      function(result) {
        console.log(result);
        res.render("index", {burgers : result});
      });
  });

});

module.exports = router;