'use strict';
module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define('inventory', {
    name: DataTypes.STRING,
    attribute: DataTypes.STRING,
    durability: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  inventory.associate = function(models) {
    // associations can be defined here
  };
  return inventory;
};