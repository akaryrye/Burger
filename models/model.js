module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    devoured: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
  }, {
      freezeTableName: true
  });
  
  return Burger;
};
