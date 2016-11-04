const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Product = models.Product;
const Order = models.Order;
const User = models.User;
module.exports = router;

router.get('/:userId', function (req, res, next) {
  Order.findAll({where:{
    id: req.params.userId
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
