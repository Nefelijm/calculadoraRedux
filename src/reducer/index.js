import {actionTypes} from '../actions'
const initialState = {
    operation: 0,
    register: "",
}

const reducer = (state= initialState, action) => {
    switch (action.type){
        case actionTypes.MOSTRAR : {
          return Object.assign({},state,{operation:action.text})
        }
    }
}

export default reducer;
