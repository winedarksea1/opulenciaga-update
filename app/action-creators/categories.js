import  { RECEIVE_CATEGORIES } from '../constants';


//this is our action creator
const receiveCategories = categories => {
  console.log('in receiveCategories', categories);
  //return an object action, which has a type, and a payload
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}


export const fetchCategories = () =>
   dispatch =>
    fetch('/products/')
      .then(res => res.json())
      .then(categories => {
        console.log('here is categories', categories);
        dispatch(receiveCategories(categories));
      });

