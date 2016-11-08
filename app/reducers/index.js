import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';
import category from "./Category";
import orders from './Orders';
import order from "./Order";

const rootReducer = combineReducers({
  product,
  products,
  category,
  orders,
  order
});

export default rootReducer;
