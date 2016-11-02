import  { RECEIVE_CATEGORIES } from '../constants';


//this is our action creator
const receiveCategories = categories => {
  //return an object action, which has a type, and a payload
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}


export const fetchCategory = categories => {
  dispatch =>
    fetch('/products/${categories.id}')
      .then(res => res.json())
      .then(category => {
        dispatch(receiveCategories(category));
      })
}
