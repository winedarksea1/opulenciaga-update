import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from '../constants';

export default function setUser (user = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER: return action.user;
    case REMOVE_CURRENT_USER: return {};
    default: return user;
  }
}
