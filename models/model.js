var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Table = sequelize.define("table", {
  title: Sequelize.STRING,
  author: Sequelize.STRING
}, {
    freezeTableName: true
});

Table.sync();

module.exports = Table;
