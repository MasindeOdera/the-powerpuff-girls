
const initialState = {
    counter: 0,
    info: "Hello World!",
    description: "Not a lot options on the horizon, but you never know...",
}

function rootReducer(state = initialState, action){

    switch(action.type){
        case 'INCREMENT':
            return {  counter: state.counter + 1 }
        case 'DECREMENT':
            return {  counter: state.counter - 1 }
        default:
            return state;
    }
}

export default rootReducer;