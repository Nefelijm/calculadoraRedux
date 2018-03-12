import {createStore} from 'redux';
import Reducer from './reducer/index.js'

const store = createStore(Reducer);
export default store;