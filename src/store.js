import {createStore,combineReducers} from 'redux';
import AppReducer from './reducer/index.js'

const rootReducer = combineReducers({
    AppReducer
})
const store = createStore(rootReducer);
export default store;
