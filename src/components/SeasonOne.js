import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './EpisodeList.scss';

function SeasonOne() {
    const state = useSelector( (state) => state);

    let episodes = state.list;
    let firstEpisodes;
    if(episodes) {
        firstEpisodes = episodes.filter(function(episode) {
            return episode.season === 1;
        });
    }
    console.log(firstEpisodes);

    //In the thead, there are 2 empty th tags due to the 3 parts of thetable grid. 
    const firstHeader = <thead><tr><th><b>Season: 1</b></th><th></th><th></th></tr></thead>;
    const firstContent = firstEpisodes.map(firstEpisode => {
        return <tr key={firstEpisode.id}>
            <td>{firstEpisode.season}x{firstEpisode.number}</td>
            <td>
                <Link to={"/the-powerpuff-girls/detail"} id={firstEpisode.id}>
                    {firstEpisode.name}
                </Link>
            </td>
            <td>{firstEpisode.airdate}</td>
        </tr>;
    });

    return (
        <Fragment>
            <table className="Season">
                {firstHeader}
                <tbody>
                    {firstContent}
                </tbody>
            </table>
        </Fragment>
    )
}

export default SeasonOne;
