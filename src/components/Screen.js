import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({operations}) => (
    <div className="form-group" id="margin">
      <div type="text" className="form-control" style={{height:'67px',fontSize:'44px',textAlign:'right',marginBottom:"20px",boxShadow:"inset 3px 3px rgba(0, 0, 0, 0.2)"}}>{operations}</div>
    </div>
  )

export default Screen
