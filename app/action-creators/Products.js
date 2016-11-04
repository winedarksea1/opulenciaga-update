import  {RECEIVE_PRODUCTS } from '../constants';
import { switchLocation } from './Location';
//import axios from 'axios';


//this is our action creator
export const receiveProducts = products=> {
  //return an object action, which has a type, and a payload
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

//this is our action creator
export const receiveProduct = product=> {
  //return an object action, which has a type, and a payload
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const fetchProducts = () =>
   dispatch =>
    fetch('/products/')
      .then(res => res.json())
      .then(products => {
        console.log('here are products', products);
        dispatch(receiveProducts(products));
        dispatch(switchLocation('product'));
      });

export const fetchAndGoToProduct = (product) =>
   dispatch =>
    fetch(`/products/${product.category}/${product.id}`)
      .then(res => res.json())
      .then(product => {
        dispatch(receiveProducts(products));
        dispatch(switchLocation('product'));
      });
