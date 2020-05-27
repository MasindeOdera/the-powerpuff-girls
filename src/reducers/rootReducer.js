
const initialState = {
    initialData: {},
    list: [],
}

function rootReducer(state = initialState, action){

    switch(action.type){
        case 'DISPLAY':
            return { 
                ...state,
                initialData: action.payload,
             }
        case 'LIST':
            return { 
                ...state,
                list: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;