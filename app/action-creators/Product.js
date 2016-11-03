import  {RECEIVE_PRODUCT } from '../constants';

export const receiveProduct = product => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const getProductById = (productId) =>
  dispatch =>
    fetch(`/products/${productId}`)
      .then(res => res.json())
      .then(product => {
        dispatch(receiveProduct(product));
      })
