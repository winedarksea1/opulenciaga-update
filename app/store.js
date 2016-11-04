import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import creatLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(creatLogger(), thunkMiddleware));
window.store = store;
export default store;
