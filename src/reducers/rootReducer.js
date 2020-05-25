
const initialState = {
    counter: 0,
    initialData: {},
    list: [],
}

function rootReducer(state = initialState, action){

    switch(action.type){
        case 'INCREMENT':
            return {  
                ...state,
                counter: state.counter + 1,
             }
        case 'DECREMENT':
            return { 
                ...state,
                counter: state.counter - 1,
             }
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