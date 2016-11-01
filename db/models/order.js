'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

module.exports = db.define('products', {
  orderStatus: Sequelize.STRING,

})

