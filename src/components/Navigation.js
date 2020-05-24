import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './Navigation.scss';

function Navigation() {
    const state = useSelector( (state) => state);
    const dispatch = useDispatch();
    console.log("State from Navigation: ", state);
    return (
        <div className="Navigation">
            <button  onClick={()=> dispatch({type:"DISPLAY", payload: state.initialData})}><b>Main</b></button>
            <button><b>Episodes</b></button>
        </div>
    )
}

export default Navigation;
