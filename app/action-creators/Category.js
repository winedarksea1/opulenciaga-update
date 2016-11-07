import { RECEIVE_CATEGORY } from '../constants';
//import axios from 'axios';

export const receiveCategory = category => {
 return {
   type: RECEIVE_CATEGORY,
   category
 }
}

export const getCategory = category => {
  return dispatch => {
    fetch(`/products/${category}`)
    .then(res => res.json())
    .then(categoryProducts => {
      dispatch(receiveCategory(categoryProducts));
    })
    .catch(err => console.error(err));
  };
}
