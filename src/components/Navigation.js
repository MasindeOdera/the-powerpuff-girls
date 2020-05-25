import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
    // const state = useSelector( (state) => state);
    // const dispatch = useDispatch();
    
    return (
        <div className="Navigation">
            <button><NavLink to="/" activeClassName="button:hover"><b>Main</b></NavLink></button>
            <button><NavLink to="/episodes" activeClassName="button:hover"><b>Episodes</b></NavLink></button>
        </div>
    )
}

export default Navigation;
