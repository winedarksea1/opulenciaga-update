import  { RECEIVE_ALL_ORDERS } from '../constants';

//this is our action creator
export const receiveAllOrders = orders => {
  //return an object action, which has a type, and a payload
  return {
    type: RECEIVE_ALL_ORDERS,
    orders
  }
}

export const fetchAllOrders = (userId) => {
  return dispatch => {
    fetch(`/orders/${userId}`)
      .then(res => res.json())
      .then(orders => {
        dispatch(receiveAllOrders(orders));
      });
    }
  }
