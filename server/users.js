
const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Product = models.Product;
const Order = models.Order;
const User = models.User;
module.exports = router;

//whoever is making the get request should have isAdmin: true
//else
//error

//so the isAdmin is going to be attached (or should be implemented) with the session id
//this is going to be during auth, so for the time being, we just have the sequelize queries

router.get('/', function (req, res, next) {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  console.log(req.session);
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(next);

})
