'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

module.exports = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity:  {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 3
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  }

}, instanceMethods: {

})