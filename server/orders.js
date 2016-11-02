const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Product = models.Product;
const Order = models.Order;
const User = models.User;
module.exports = router;

router.get('/', function (req, res, next) {
  Order.findAll({ where: req.query })
  .then(orders => res.json(orders))
  .catch(next);
});
