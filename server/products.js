
const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Product = models.Product;
const Order = models.Order;
const User = models.User;
module.exports = router;

router.get('/', function (req, res, next) {
  Product.findAll()
  .then(products => res.json(products))
  .catch(next);
});

router.get('/:category', function (req, res, next) {
  Product.findAll({where: {
    category: req.params.category
  }})
  .then(products => res.json(products))
  .catch(next);
});

router.get('/category/:productId', function (req, res, next) {
  Product.findById(req.params.productId)
  .then(product => res.json(product))
  .catch(next);
});

