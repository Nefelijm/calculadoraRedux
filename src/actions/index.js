export const actionTypes = {
        MOSTRAR: 'MOSTRAR',
      };
      
//       export const filterTextChanged = text => ({
//         type: actionTypes.MOSTRAR,
//         text
//       });  

//Esta accion es para el Screen(Input) (Actualiza el estado operations)
export const mostrar = (operaciones) => ({
    type: actionTypes.MOSTRAR,
    operaciones
});

//esta accion es para el textarea
export const calculate = (e) => {
        type: 'CALCULATE'
        payload:e
}

//accion para limpiar
export const limpiar = (limpiar) => {
        type: 'LIMPIAR'
        payload:limpiar
}
