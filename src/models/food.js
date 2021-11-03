
'use strict';


// Our table schema
const Food = (sequelize, DataTypes) => sequelize.define('food', {

  foodName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Food;