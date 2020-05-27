import React from 'react';
import SeasonOne from './SeasonOne';
import SeasonTwo from './SeasonTwo';
import SeasonThree from './SeasonThree';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './EpisodeList.scss';

function EpisodeList() {

    return (
        <div>
            <h2>Seasons</h2>
            <div className="View-season">
                <nav className="Seasons-number">
                    <NavLink to="/the-powerpuff-girls/episodes" activeClassName="selected" exact={true}>1</NavLink>
                    <NavLink to="/the-powerpuff-girls/episodes/2" activeClassName="selected">2</NavLink>
                    <NavLink to="/the-powerpuff-girls/episodes/3" activeClassName="selected">3</NavLink>
                </nav>
            </div>
            <Switch>
                <Route exact path="/the-powerpuff-girls/episodes" component={SeasonOne} />
                <Route path="/the-powerpuff-girls/episodes/2" component={SeasonTwo} />
                <Route path="/the-powerpuff-girls/episodes/3" component={SeasonThree} />
            </Switch>
        </div>
    )
}

export default EpisodeList;
