
const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = require('./product');

module.exports = db.define('orders', {
    orderStatus: {
      type: Sequelize.STRING,
      defaultValue: "cart"
    },
    totalPrice: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    },
    orderDate: {
      type: Sequelize.DATE
    },
    currentProducts: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      defaultValue: []
    }
  },
  {
  classMethods: {
    getAllOrdersByUserId: function (userId) {
      return Order.findAll(
        {where: {user_id: userId}});
    },
    getAllOrdersByStatus: function (status) {
      return Order.findAll({where:
        {orderStatus: status}});
    },
  },
  instanceMethods: {
    changeStatus: function(status) {
      this.orderStatus = status;
    },
    sumTotalPrice: function() {
      this.getProducts()
      .then((products) => {
        products.forEach((product) => {
          this.totalPrice += product.price;
        });
        return this.totalPrice;
      });
    },
    setOrderDate: function(date) {
      this.orderDate = date;
    },
    addNewProduct: function(productId) {
      this.currentProducts.push(productId);
    }
  }
  });
