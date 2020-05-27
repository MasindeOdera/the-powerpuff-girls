import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
    
    return (
        <div className="Navigation">
            <NavLink to="/the-powerpuff-girls" activeClassName="selected" exact={true}><button><b>Main</b></button></NavLink>
            <NavLink to="/the-powerpuff-girls/episodes" activeClassName="selected"><button><b>Episodes</b></button></NavLink>
        </div>
    )
}

export default Navigation;
