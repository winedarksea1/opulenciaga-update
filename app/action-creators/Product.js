import  {RECEIVE_PRODUCT } from '../constants';

export const receiveProduct = product => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const getProductById = (category, productId) =>
  dispatch =>
    fetch(`/products/${category}/${productId}`)
      .then(res => res.json())
      .then(product => {
        dispatch(receiveProduct(product));
      })
