import { CREATE_CART, ADD_PRODUCT_TO_ORDER, REMOVE_PRODUCT_FROM_ORDER, CHECKOUT_ORDER } from '../constants';
import axios from "axios";

const addToCart = product => {
  return {
    type: ADD_PRODUCT_TO_ORDER,
    product
  }
}

const removeFromCart = product => {
  return {
    type: REMOVE_PRODUCT_FROM_ORDER,
    product
  }
}

const addOrder = order => {
  return {
    type: CREATE_CART,
    order
  }
}

export const fetchAndAddProductToOrder = (userId, productId) => {
  console.log("HI CHRISSSSS");
  return dispatch => {
    return axios.put(`/orders/${userId}/cart/${productId}`)
      .then(order => {
        console.log("CHRIS DO WE GET HERE????")
        console.log(order.data)
        dispatch(addOrder(order.data));
      })
      .catch(err => console.error(err))
      // .then(product => { addToCart(product) })
      // .catch(err => console.error(err));
  }
}

export const createCartAndAddProductToOrder = (userId, productId) => {
  console.log('hi', userId, productId);
  dispatch => {
    axios.post(`/orders/${userId}/cart`)
      .then(order => {
        console.log('wtf clem?');
        axios.put(`/orders/${userId}/cart/${productId}`)
        .then(res => {
          console.log('winstonnnnn');
          res.json()
        })
        .then(product => { addToCart(product) })
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }
}

export const removeProductFromOrder = (category, productId) => {
  dispatch =>
    fetch(`/products/${category}/${productId}`)
      .then(res => res.json)
      .then(product =>{ addToCart(product)})
      .catch(err => console.error(err));
}
