import React from 'react'
import PropTypes from 'prop-types'
import {mostrar} from '../actions/index'
import {connect} from 'react-redux';

const numbers = ["1","2","3","4","5","6","7","8","9","0",".","C"];

const Screen = ({operations}) => (
    <div className="form-group" id="margin">
      <div type="text" className="form-control" style={{height:'67px',fontSize:'44px',textAlign:'right',marginBottom:"20px",boxShadow:"inset 3px 3px rgba(0, 0, 0, 0.2)"}}>{operations}</div>
    </div>
  )

  function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        // trae el estado de number
         operations: state.operation,
    }
  }

  function mapDispatchToProps(dispatch) {
   return { 
    screenOperation: () => {
       dispatch(mostrar)
      //  console.log(increment(6));
      }
    }
  }
// export default Screen
export default connect(mapStateToProps,mapDispatchToProps)(Screen);