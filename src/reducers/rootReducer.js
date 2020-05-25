
const initialState = {
    initialData: {},
    list: [],
    firstSeason: [],
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
        case 'SEASON1':
            return {
                ...state,
                firstSeason: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;