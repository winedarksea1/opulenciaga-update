const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Product = models.Product;
const Order = models.Order;
const User = models.User;
module.exports = router;

router.get('/:userId', function (req, res, next) {
  Order.findAll({where:{
    user_id: req.params.userId
  }})
  .then(orders => res.json(orders))
  .catch(next);
});

router.get('/allOrders/:orderStatus', function (req, res, next) {
  Order.findAll({where: {
    orderStatus: req.params.orderStatus
  }})
  .then(orders => res.json(orders))
  .catch(next);
});

//Todo Change the date format for filtering
router.get('/allOrders/orderDate/:date', function (req, res, next) {
  Order.findAll({where: {
    orderDate: req.params.date
  }})
  .then(orders => res.json(orders))
  .catch(next);
});

router.get('/user/:userId/:orderStatus', function (req, res, next) {
  User.findById(req.params.userId)
  .then(user => user.getOrders())
  .then(orders => orders.filter(order => order.orderStatus === req.params.orderStatus))
  .then(ordersByStatus => res.json(ordersByStatus))
  .catch(next);
});

router.post('/:userId/cart', function (req, res, next) {
  Order.create(req.body)
  .then(order => {
    console.log(order);
    return order.setUser(req.params.userId)
  })
  .then(order => res.json(order))
  .catch(next);
});

router.put('/:userId/cart/:productId', function(req, res, next) {
  User.findById(req.params.userId)
  .then(user => user.getOrders({where: {orderStatus: "cart"}}))
  .then(order => {
    if (order) {
      Product.findById(req.params.productId)
      .then(product => {
        console.log(product);
        return order.addProduct(product)
    })
      .then(order => res.json(order))
    } else {
      return order.create({
        orderStatus: "cart"
      })
      .then(order => order.addProduct(req.params.productId))
      .then(order => res.json(order))
    }})
});










