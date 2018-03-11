import {connect} from 'react-redux'
import {Mostrar as MostrarCreator} from '../actions'

import Operaciones from '../components/Operaciones'

const OperacionesCont = connect(
    null,
    dispatch => ({
        Mostrar : nro => dispatch(MostrarCreator(nro))
    })
)(Operaciones)

export default OperacionesCont