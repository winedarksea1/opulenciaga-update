// name, price, image, description, quantity, category
var Bluebird = require('bluebird');
var db = require('./db/index');
var models = require('./db/models');
var User = require('./db/models/user');
var Product = require('./db/models/product');
var Order = require('./db/models/order');

let users = [
{
  firstName: "James",
  lastName: "Kim",
  email: "jkim@gmail.com"
},
{
  firstName: "Andy",
  lastName: "McGovern",
  email: "winedark.mcgovern@gmail.com",
  isAdmin: true
}
];

let orders = [
{
  orderStatus: "processing",
  totalPrice: 10.00,
  orderDate: new Date(),
},
{
  orderStatus: "cart",
  totalPrice: 20.00,
  orderDate: new Date(),
}
];


let products = [
{
  name: "Sabai Acai",
  price: 9001,
  imgUrl: "/opulenciaga_images/sabaiwine.png",
  description: "The wine of the Gods. Earthy and full-bodied.",
  quantity: 1,
  category: "wines"
},
{
  name: "Aqua Vino",
  price: 420,
  imgUrl: "/opulenciaga_images/wineglass.png",
  description: "Crisp, flavorless, gluten-free, non-alcoholic, vegan-friendly, atheist-approved wine. The perfect conversation starter for attack helicopters.",
  quantity: 10,
  category: "wines"
},
{
  name: "Infinity Handcuff Wine",
  price: 1999,
  imgUrl: "/opulenciaga_images/wine.png",
  description: "Dangerously delicious. Not for the faint of heart.",
  quantity: 3,
  category: "wines"
},
{
  name: "Flowerbomb",
  price: 2000,
  imgUrl: "/opulenciaga_images/perfume.png",
  description: "A splash of luxury.",
  quantity: 3,
  category: "perfumes"
},
{
  name: "Acqua Like Agua",
  price: 8000,
  imgUrl: "/opulenciaga_images/aquadigio.png",
  description: "A scent to be smelled.",
  quantity: 4,
  category: "perfumes"
},
{
  name: "Pour Monsieur",
  price: 10000,
  imgUrl: "/opulenciaga_images/paper1perfume.png",
  description: "Because French sounds cool.",
  quantity: 2,
  category: "perfumes"
},
{
  name: "One Together",
  price: 123456,
  imgUrl: "/opulenciaga_images/rings.png",
  description: "Together one. Scarf sold separately.",
  quantity: 3,
  category: "rings"
},
{
  name: "That Ring From Lord of the Rings",
  price: 999999,
  imgUrl: "/opulenciaga_images/hermesring.png",
  description: "The ring to rule them all...",
  quantity: 3,
  category: "rings"
},
{
  name: "The Lion King",
  price: 2000,
  imgUrl: "/opulenciaga_images/cartierring.png",
  description: "Not only Hakuna, but also Matata.",
  quantity: 3,
  category: "rings"
},
{
  name: "Omega",
  price: 2000,
  imgUrl: "/opulenciaga_images/omega.png",
  description: "Omega Shenron.",
  quantity: 3,
  category: "watches"
},
{
  name: "Rolex",
  price: 2000,
  imgUrl: "/opulenciaga_images/rolex2.png",
  description: "Because we just had to include a Rolex.",
  quantity: 3,
  category: "watches"
},
{
  name: "uwotm8",
  price: 2000,
  imgUrl: "/opulenciaga_images/kfchat.png",
  description: "lul",
  quantity: 1,
  category: "watches"
}
];

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return products.map(function (product) {
    return Product.create(product);
  });
})
.then(function () {
  return orders.map(function (order) {
    return Order.create(order);
  });
})
.then(function () {
  return users.map(function (user) {
    return User.create(user);
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
