import React from 'react'
import {render} from 'react-dom'
// import ReactDOM from 'react-dom'
import './index.css';
import App from './components/App';
import reducer from './reducer/index.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import store from './store'
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
