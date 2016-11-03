import {RECEIVE_PRODUCTS} from '../constants';

const initialProducts = [];

export default function products(state = initialProducts, action) {
    switch (action.type) {
      case RECEIVE_PRODUCTS: return action.products;
      default: return state;
    }
}
