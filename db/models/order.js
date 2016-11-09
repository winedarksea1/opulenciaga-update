
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
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
    },
    currentPrices: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      defaultValue: []
    },
    currentImages: {
      type: Sequelize.ARRAY(Sequelize.STRING),
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
    addNewProduct: function(product) {
      return this.set({currentProducts: [...this.currentProducts, product]});
      //return Object.assign({}, this, {currentProducts: [...this.currentProducts, productId]});
    },
    addNewPrice: function(price) {
      return this.set({currentPrices: [...this.currentPrices, price]});
    },
    addNewImage: function(image) {
      return this.set({currentImages: [...this.currentImages, image]});
    },
    removeNewProduct: function(product) {
      console.log("in remove")
      console.log(product)
      let index = this.currentProducts.indexOf(product);
      console.log(index);
      console.log(this.currentProducts);
      let newArray = this.currentProducts.slice(0, index).concat(this.currentProducts.slice(index +1));
      console.log(newArray);
      return this.set({currentProducts: newArray});
    },
    removeNewPrice: function(price) {
      let index = this.currentPrices.indexOf(price);
      let newArray = this.currentPrices.slice(0, index).concat(this.currentPrices.slice(index +1));
      return this.set({currentPrices: newArray});
    },
    removeNewImage: function(image) {
      let index = this.currentImages.indexOf(image);
      let newArray = this.currentImages.slice(0, index).concat(this.currentImages.slice(index +1));
      return this.set({currentImages: newArray});
    }
  }
  });
