// name, price, image, description, quantity, category
var Bluebird = require('bluebird');
var db = require('./db/index');
var models = require('./db/models');
var User = require('./db/models/user');
var Product = require('./db/models/product');
var Order = require('./db/models/order');

let users = [
{
  name: "James Kim",
  email: "jkim@gmail.com"
},
{
  name: "Andy McGovern",
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
  imgUrl: "opulenciaga_images/sabaiwine.png",
  description: "The wine of the Gods. Earthy and full-bodied.",
  quantity: 1,
  category: "shoelace"
},
{
  name: "Aqua Vino",
  price: 420,
  imgUrl: "opulenciaga_images/wineglass.png",
  description: "Crisp, flavorless, gluten-free, non-alcoholic, vegan-friendly, atheist-approved wine. The perfect conversation starter for attack helicopters.",
  quantity: 10,
  category: "shoelace"
},
{
  name: "Handcuff Red Wine",
  price: 1999,
  imgUrl: "opulenciaga_images/wine.png",
  description: "Dangerously delicious. Not for the faint of heart.",
  quantity: 3,
  category: "shoelace"
},
{
  name: "You and Me Cufflinks",
  price: 2000,
  imgUrl: "https://img0.etsystatic.com/101/1/6513368/il_340x270.837961776_a9jr.jpg",
  description: "Oak Dutch imports",
  quantity: 3,
  category: "cufflink"
},
{
  name: "Moon Cufflinks",
  price: 2000,
  imgUrl: "https://img1.etsystatic.com/100/0/5396760/il_340x270.829222101_mqpz.jpg",
  description: "Marble Dutch imports",
  quantity: 3,
  category: "cufflink"
},
{
  name: "Click Cufflinks",
  price: 2000,
  imgUrl: "https://img0.etsystatic.com/137/0/7645072/il_340x270.1035903992_4p56.jpg",
  description: "Marble German imports",
  quantity: 3,
  category: "cufflink"
},
{
  name: "Orange Tie",
  price: 2000,
  imgUrl: "http://www.johnstuxedos.com/wp-content/uploads/2015/06/Boiled-Crab-Etouffee-Orange-400x400.jpg",
  description: "Virgin Silkworm imports",
  quantity: 3,
  category: "tie"
},
{
  name: "Red Tie",
  price: 2000,
  imgUrl: "http://www.johnstuxedos.com/wp-content/uploads/2013/07/Tie-Boiled-Crab-Cayenne-Red-Large-400x400.jpg",
  description: "Rare Belgian wool imports",
  quantity: 3,
  category: "tie"
},
{
  name: "Louisiana Etouffe Orange Tie",
  price: 2000,
  imgUrl: "http://www.johnstuxedos.com/wp-content/uploads/2015/06/Louisiana-Etouffee-Orange-400x400.jpg",
  description: "Rare Belgian wool imports",
  quantity: 3,
  category: "tie"
},
{
  name: "Brown Fedora",
  price: 2000,
  imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/da/9b/63/da9b63914a2febabc7698745de727e63.jpg",
  description: "Rare London import",
  quantity: 3,
  category: "hat"
},
{
  name: "Black Fedora",
  price: 2000,
  imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/62/da/08/62da08717701989e8c5b11a61601f39d.jpg",
  description: "Rare London import",
  quantity: 3,
  category: "hat"
},
{
  name: "Black Fedora with Brown strap",
  price: 2000,
  imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/0b/c9/d7/0bc9d7a43d3f4ca7ba440ab1a1a0f254.jpg",
  description: "Italian import",
  quantity: 3,
  category: "hat"
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
