import React from 'react';
import PropTypes from 'prop-types'

const Input = ({operations}) => (
  <div className='text-center '>
    <textarea name="" id="input" cols="100" rows="1">{operations}</textarea>
  </div>
)
export default Input;