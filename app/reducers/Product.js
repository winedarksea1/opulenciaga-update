import {RECEIVE_PRODUCT} from '../constants';

const initialProduct = [];

export default function product(state = initialProduct, action) {
    switch (action.type) {
      case RECEIVE_PRODUCT: return action.product;
      default: return state;
    }
}
