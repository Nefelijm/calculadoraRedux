import React from 'react';
import  './Operaciones.css' 
import PropTypes from 'prop-types'

const onClick =(e) => {
  e.preventDefault();
  this.setState({value:e.target.value});
}

const Operaciones = ({operation}) => (
    <div className="container">
    <div className="row">
       <div className="col-3"><button type="button" className="btn btn-primary" onClick={this.onClick}>7</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">8</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">9</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">BACK</button></div>
    </div>
    <div className="row">
       <div className="col-3"><button type="button" className="btn btn-primary">4</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">5</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">6</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">+</button></div>
    </div>
    <div className="row">
       <div className="col-3"><button type="button" className="btn btn-primary">1</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">2</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">3</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">-</button></div>
    </div>
    <div className="row">
       <div className="col-3"><button type="button" className="btn btn-primary">0</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">=</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">/</button></div>
       <div className="col-3"><button type="button" className="btn btn-primary">*</button></div>
    </div>
  </div>
)
export default Operaciones;