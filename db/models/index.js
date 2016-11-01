// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Order = require('./order');

Order.hasMany(Product);
User.hasMany(Order);
Product.belongsToMany(Order, {through: "order_product"});

module.exports =  {
  User: User,
  Product: Product,
  Order: Order
};
