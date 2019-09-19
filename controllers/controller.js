var express = require("express");
var router = express.Router();
var Burger = require("../models/model.js");


router.get("/", function(req, res) {
    Burger.findAll({}).then( 
      function (result) {
        res.render("index", {burgers : result});
      });
});

router.post("/api/create", function (req, res) {
  Burger.create({
    name: req.body.name,
    description: req.body.description
  }).then( function (result) {
    console.log("New item created sucessfully " + result)
  });
});

router.put("/api/devour/:id", function (req, res) {
  var burgr = req.params.id;
  Burger.update({
    devoured: true
  }, {
    where: {id : burgr}
  }).then(function (result) {
    console.log(`Burger ${result} has been devoured`)
  });
  
});

module.exports = router;