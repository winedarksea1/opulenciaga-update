
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
// This is where we started adding new stuff on 11/8
router.get('orders/:userId', function(req, res, next) {
  Order.getAllOrdersByUserId(req.params.userId)
  .then(orders => res.json (orders))
  .catch(next);
});

router.post('/login', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.sendStatus(204);
    }
  })
  .catch(next);
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.sendStatus(204);
});


router.post('/signup', function (req, res, next) {

  User.findOrCreate({
    where: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    },
    defaults: {
      password: req.body.password
    }
  })
  .then(function (user) {
    req.session.userId = user.id;
    res.sendStatus(204);
  });

});

router.get('/me', function (req, res, next) {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});


//^^ Make sure Clement has this on his express routes
