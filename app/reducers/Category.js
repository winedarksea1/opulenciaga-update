import { RECEIVE_CATEGORY } from '../constants';

export default function category (state = [], action) {
 switch(action.type) {
   case RECEIVE_CATEGORY: return action.category;
   default: return state;
 }
}
