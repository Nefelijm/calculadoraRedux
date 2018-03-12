import React from 'react';
import PropTypes from 'prop-types'

const onClick =(e) => {
  e.preventDefault();
  this.setState({value:e.target.value});
}

const operadores = ["+","-","*","/"];
const numbers = ["1","2","3","4","5","6","7","8","9","0",".","C"];


const Operations = ({
  operations,mandar
}) => {
  return (
    <div>
    <div className="form-group" id="margin">
      <div type="text" className="form-control" style={{height:'67px',fontSize:'44px',textAlign:'right',marginBottom:"20px",boxShadow:"inset 3px 3px rgba(0, 0, 0, 0.2)"}}>{operations}</div>
    </div>
    <div className="col-xs-9 col-sm-9">
      <div>{numbers.map((el, index) =><button key={index} className="col-xs-4 col-sm-4 btn btn-default" style={{marginBottom: '10px'}} onClick={evt => {mandar('8')}}><span>{el}</span></button>)}</div>
    </div>
    <div className="col-xs-3 col-sm-3">
      <div>{operadores.map((el, index) =><button key={index} className="col-xs-12 col-sm-12 btn btn-default" style={{marginBottom: '10px'}} onClick={this.onClick}><span>{el}</span></button>)}</div>
    </div>
    <button className="btn-lg btn-block btn btn-default" type="button">=</button>
    </div>
  )
}

export default Operations