import React from 'react'
import Historial from './Historial'
import Screen from './Screen'
import Numbers from './Numbers'
import Operations from './Operations'
import Equal from './Equal'
import './App.css';
import { Provider } from 'react-redux';
import store from '../store.js'

const App = () => (
  <Provider store ={store}>
  <div className="container">
    <div className="row">
      <Historial/>
      <div className="col-xs-12 col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading text-center" id="bg">CALCULADORA</div>
          <div className="panel-body">
            <div className="col-xs-12" style={{marginBottom: '10px'}}>
              <div className="row">
                <Operations />
                {/* <button className="btn-lg btn-block btn btn-default" type="button">Clear</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </Provider> 
)

export default App