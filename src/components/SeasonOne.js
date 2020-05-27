import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
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

    //In the thead, there are 2 empty th tags due to the 3 parts of thetable grid. 
    const firstHeader = <thead><tr><th><b>Season: 1</b></th><th></th><th></th></tr></thead>;
    const firstContent = firstEpisodes.map(firstEpisode => {
        return <tr key={firstEpisode.number}>
            <td>{firstEpisode.season}x{firstEpisode.number}</td>
            <td>{firstEpisode.name}</td>
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
