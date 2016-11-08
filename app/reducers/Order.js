import { CREATE_CART } from '../constants';



export default function orders(state = {}, action) {
    //console.log("IN the reducer: ", action)
    switch (action.type) {
      case CREATE_CART: return action.order;
      default: return state;
    }
}
