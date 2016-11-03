import  {RECEIVE_PRODUCTS } from '../constants';
//import axios from 'axios';


//this is our action creator
export const receiveProducts = products=> {
  //return an object action, which has a type, and a payload
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}


export const fetchProducts = () =>
   dispatch =>
    fetch('/products/')
      .then(res => res.json())
      .then(products => {
        console.log('here are products', products);
        dispatch(receiveProducts(products));
      });
