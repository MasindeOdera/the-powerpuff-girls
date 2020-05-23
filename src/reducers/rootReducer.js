
const initialState = {
    counter: 0,
    info: "Hello World!",
    description: "Not a lot options on the horizon, but you never know...",
    initialData: {},
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
        default:
            return state;
    }
}

export default rootReducer;