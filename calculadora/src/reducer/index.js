const initialState = {
    operation: 0,
    register: "",
}

const reducer = (state= initialState, action) => {
    switch (action.type){
        case 'MOSTRAR' : {
          return Object.assign({},state,{operation:action.payload})
        }
    }
}

export default reducer;
