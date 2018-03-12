import React from 'react';
import PropTypes from 'prop-types'

const onClick =(e) => {
  e.preventDefault();
  this.setState({value:e.target.value});
}

const operadores = ["+","-","*","/"];

const Operations = ({operation}) => {
  return (
    <div className="col-xs-3 col-sm-3">
      <div>{operadores.map((el, index) =><button key={index} className="col-xs-12 col-sm-12 btn btn-default" style={{marginBottom: '10px'}} onClick={this.onClick}><span>{el}</span></button>)}</div>
    </div>
  )
}

export default Operations