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
  Order.create({
    orderStatus: "cart"
  })
  .then(order => {
    console.log(order);
    return order.setUser(req.params.userId)
  })
  .then(order => res.json(order))
  .catch(next);
});

router.put('/:userId/cart/:productId', function(req, res, next) {
  console.log("are we hitting this route");
  Order.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  // .then(user => user.getOrders({where: {orderStatus: "cart"}}))
  .then(order => {
    // const order = orders[0]
    if (order) {
      // console.log("ORDER", order);
      // Product.findById(req.params.productId)
      // .then(product => {
      //   console.log("PRODUCT", product);
      //   console.log("product id", product.id)
      //   console.log("order", order);
      //   return order.addProduct(product.id)
      // })
      // .then(order => {
      //   console.log("INSIDE", order)
      //   return Order.findById(order[0][0].order_id);
      //   //return order[0][0];
      // })
      // .then(order => {
      //   console.log("Clicking add to cart multiple times: ", order)
        console.log("Cart already created", order)
        return Product.findById(req.params.productId)
        .then(product => {
          order.addNewProduct(product.name);
          order.addNewPrice(product.price);
          order.addNewImage(product.imgUrl);
          return order.save()
          .then(order => res.json(order))
        })
        // res.json(order)
      // }
      // catch(err => console.error(err));
    } else {
      return Order.create({
        orderStatus: "cart",
        user_id: req.params.userId
      })
      // .then(order => {
      //   return order.addProduct(req.params.productId)
      // })
      // .then(order => {
      //   console.log("before creating cart: ", order[0][0])
      //   return Order.findById(order[0][0].order_id);
      //   //return order[0][0];
      // })


      .then(order => {
        console.log("Creating cart: ", order)
        return Product.findById(req.params.productId)
        .then(product => {
          order.addNewProduct(product.name);
          order.addNewPrice(product.price);
          order.addNewImage(product.imgUrl);
          return order.save()
          .then(order => res.json(order))
        })
        // res.json(order)
      });
    }})
    .catch(err => console.error(err));
});

router.put('/:userId/cart/:productName/remove', function(req, res, next) {
  console.log("are we hitting this route");
  Order.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(order => {
    if (order) {
        console.log("Cart already created", order)
        // console.log("req.params", req.params.productId)
        return Product.findOne({
          where: {
            name: req.params.productName
          }
        })
        .then(product => {
          console.log("This is our product", product)
          console.log("HELP", product.name)
          order.removeNewProduct(product.name);
          order.removeNewPrice(product.price);
          order.removeNewImage(product.imgUrl);
          console.log("we are almost done")
          return order.save()
          .then(order => res.json(order))
        })
    }})
    .catch(err => console.error(err));
});
