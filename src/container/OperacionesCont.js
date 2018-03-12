import {connect} from 'react-redux'
import Mostrar from '../actions'
import Operations from '../components/Operations'

// const OperacionesCont = connect(
//     null,
//     dispatch => ({
//         Mostrar : nro => dispatch(MostrarCreator(nro))
//     })
// )(Operations)

// export default OperacionesCont

// function mapStateToProps(state) {
//     console.log('mapStateToProps', state);
//     return {
//         // trae el estado de number
//          numero: state.number,
//     }
//   }

const coneccion = connect(
    function mapStateToProps(state){
        operation:state.operation;
        // const {
        //     operation 
        // } = state.operation;

        // return 
    },

    function mapDispatchToProps(dispatch){
        return {
            mandar(numero) {
                dispatch(mostrar(numero))
            }
        }
    }
)(Operations);
export default coneccion;