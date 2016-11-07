import { ADD_PRODUCT_TO_ORDER, REMOVE_PRODUCT_FROM_ORDER, CHECKOUT_ORDER } from './constants';

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

export default const fetchAndAddProductToOrder = (category, productId) => {
  dispatch =>
    fetch(`/products/${category}/${productId}`)
      .then(res => res.json)
      .then(product =>{ addToCart(product)})
      .catch(err => console.error(err));
}

export default const removeProductFromOrder = (category, productId) => {
  dispatch =>
    fetch(`/products/${category}/${productId}`)
      .then(res => res.json)
      .then(product =>{ addToCart(product)})
      .catch(err => console.error(err));
}
