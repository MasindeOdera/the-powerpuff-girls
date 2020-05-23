import React from 'react';
import { useSelector} from 'react-redux';
import './Navigation.scss';

function Navigation() {
    const state = useSelector( (state) => state);
    console.log(state);
    return (
        <div className="Navigation">
            <button><b>Main</b></button>
            <button><b>Episodes</b></button>
        </div>
    )
}

export default Navigation;
