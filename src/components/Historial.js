import React from 'react';
import PropTypes from 'prop-types'

const Historial = ({register}) => (
    <div className="panel panel-default col-xs-12 col-sm-2 col-sm-offset-2" style={{paddingRight:'0px', paddingLeft:'0px'}}>
      <div className="panel-heading text-center" id="bg">HISTORIAL</div>
      <div className="panel-body" style={{height:'347px'}}>{register}</div>
    </div>
  )

export default Historial