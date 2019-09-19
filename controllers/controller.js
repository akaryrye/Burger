var express = require("express");
var router = express.Router();
var helpers = require("../models/model.js");


router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;