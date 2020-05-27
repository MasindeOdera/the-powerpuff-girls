import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './EpisodeList.scss';

function SeasonTwo() {
    const state = useSelector( (state) => state);

    let episodes = state.list;
    let secondEpisodes;
    if(episodes) {
        secondEpisodes = episodes.filter(function(episode) {
            return episode.season === 2;
        });
    }

    //In the thead, there are 2 empty th tags due to the 3 parts of thetable grid. 
    const secondHeader = <thead><tr><th><b>Season: 2</b></th><th></th><th></th></tr></thead>;
    const secondContent = secondEpisodes.map(secondEpisode => {
        return <tr key={secondEpisode.id}>
            <td>{secondEpisode.season}x{secondEpisode.number}</td>
            <td>
                <Link to={"/the-powerpuff-girls/detail"} id={secondEpisode.id}>
                    {secondEpisode.name}
                </Link>
            </td>
            <td>{secondEpisode.airdate}</td>
        </tr>;
    });
    
    return (
        <Fragment>
            <table className="Season">
                {secondHeader}
                <tbody>
                    {secondContent}
                </tbody>
            </table>
        </Fragment>
    )
}

export default SeasonTwo;
