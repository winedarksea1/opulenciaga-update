import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';

const rootReducer = combineReducers({
  product,
  products

});

export default rootReducer;
