'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = require('./product');

module.exports = db.define('orders', {
    orderStatus: {
      type: Sequelize.STRING,
      defaultValue: "currentCart"
    },
    totalPrice: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    }
    orderDate: {
      type: Sequelize.DATE
    }
  },
  instanceMethods: {
    changeStatus: function(status) {
      this.orderStatus = status;
    },
    sumTotalPrice: function(products) {
      products.forEach((product) => {
        this.totalPrice += product.price;
      })
      return this.totalPrice;
    },
    setOrderDate: function(date) {
      this.orderDate = date;
    }
  }
)



