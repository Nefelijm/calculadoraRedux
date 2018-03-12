//Esta accion es para el input (Actualiza el estado operations)
export const mostrar => (operaciones){

return {
    type: MOSTRAR
    payload:operaciones
}
}

//esta accion es para el textarea
export const calculate => (e){
    
    return {
        type: CALCULATE
        payload:e
    }
    }

//accion para limpiar
export const limpiar => (limpiar){
    
    return {
        type: LIMPIAR
        payload:limpiar
    }
    }

