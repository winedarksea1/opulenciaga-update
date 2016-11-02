import {RECEIVE_CATEGORIES} from '../constants';

const initialCategories = [];

export default function categories(state = initialCategories, action) {
    switch (action.type) {
      case RECEIVE_CATEGORIES: return action.categories;
      default: return state;
    }
}
