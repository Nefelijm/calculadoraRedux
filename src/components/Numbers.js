import React from 'react'

const numbers = ["1","2","3","4","5","6","7","8","9","0",".","C"];

const Screen = () => {
  return (
    <div className="col-xs-9 col-sm-9">
      <div>{numbers.map((el, index) =><button key={index} className="col-xs-4 col-sm-4 btn btn-default" style={{marginBottom: '10px'}}><span>{el}</span></button>)}</div>
    </div>
  )
}

export default Screen