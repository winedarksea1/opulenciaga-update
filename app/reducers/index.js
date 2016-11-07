import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';
import category from "./Category";
import orders from './Orders';

const rootReducer = combineReducers({
  product,
  products,
  category,
  orders
});

export default rootReducer;
