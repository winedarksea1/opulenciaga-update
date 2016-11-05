import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';
import category from "./Category";

const rootReducer = combineReducers({
  product,
  products,
  category
});

export default rootReducer;
