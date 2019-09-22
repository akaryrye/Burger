var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("Burger", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  devoured: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
}, {
    freezeTableName: true
});

Burger.sync();

module.exports = Burger;
