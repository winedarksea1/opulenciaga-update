import { RECEIVE_ALL_ORDERS } from '../constants';

export default function orders(state = [], action) {
    switch (action.type) {
      case RECEIVE_ALL_ORDERS: return action.orders;
      default: return state;
    }
}