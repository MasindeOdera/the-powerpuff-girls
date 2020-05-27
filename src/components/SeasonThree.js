import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './EpisodeList.scss';

function SeasonThree() {
    const state = useSelector( (state) => state);

    let episodes = state.list;
    let thirdEpisodes;
    if(episodes) {
        thirdEpisodes = episodes.filter(function(episode) {
            return episode.season === 3;
        });
    }
    console.log(episodes);

    //In the thead, there are 2 empty th tags due to the 3 parts of thetable grid. 
    const thirdHeader = <thead><tr><th><b>Season: 3</b></th><th></th><th></th></tr></thead>;
    const thirdContent = thirdEpisodes.map(thirdEpisode => {
        return <tr key={thirdEpisode.id}>
            <td>{thirdEpisode.season}x{thirdEpisode.number}</td>
            <td>
                <Link to={"/the-powerpuff-girls/detail/" + thirdEpisode.id} >
                    {thirdEpisode.name}
                </Link>
            </td>
            <td>{thirdEpisode.airdate}</td>
        </tr>;
    });

    return (
        <Fragment>
            <table className="Season">
                {thirdHeader}
                <tbody>
                    {thirdContent}
                </tbody>
            </table>
        </Fragment>
    )
}

export default SeasonThree;
