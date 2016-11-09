import { CREATE_USER, SET_CURRENT_USER, RECEIVE_ALL_ORDERS_FOR_USER } from '../constants';
import axios from "axios";

export const createUser = user => ({
 type: CREATE_USER,
 user
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const getOrders = orders => ({
  type: RECEIVE_ALL_ORDERS_FOR_USER,
  orders
});

export const login = credentials => dispatch => {
  axios.post('/users/login', credentials)
       .then(res => dispatch(setCurrentUser(res.data)))
       .catch(err => console.error('Login unsuccesful', err));
};

export const signup = credentials => dispatch => {
  axios.post('/users/signup', credentials)
       .then(res => dispatch(setCurrentUser(res.data)))
       .catch(err => console.error('Signup unsuccesful', err));
};

export const retrieveLoggedInUser = () => dispatch => {
  axios.get('/auth/me')
      .then(res => dispatch(setCurrentUser(res.data)))
      .catch(err => console.error('retrieveLoggedInUser unsuccesful', err));
};

export const getOrdersForUser = (userId) => {
  return dispatch => {
    return axios.get(`/users/orders/${userId}`)
    .then(orders => dispatch(orders))
    .catch(next);
  };
};
