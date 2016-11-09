import { CREATE_USER } from '../constants';


export default function users (users = [] , action) {
   switch (action.type) {
     case CREATE_USER: return [action.user, ...users];
     default: return users;
   }
}
