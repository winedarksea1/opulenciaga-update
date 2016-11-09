const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = require('./product');

module.exports = db.define('order_product', {
  quantity: {
    type: Sequelize.INTEGER,
  }
}, {
  instanceMethods: {
    incrementQuantity: function (item) {
      this.quantity++;
    }
  }
});
