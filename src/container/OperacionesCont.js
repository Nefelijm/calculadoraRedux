import {connect} from 'react-redux'
import {Mostrar as MostrarCreator} from '../actions'
import Operations from '../components/Operations'

const OperacionesCont = connect(
    null,
    dispatch => ({
        Mostrar : nro => dispatch(MostrarCreator(nro))
    })
)(Operations)

export default OperacionesCont