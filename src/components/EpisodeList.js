import React from 'react';
import { useSelector } from 'react-redux';
import './EpisodeList.scss';

function EpisodeList() {
    const state = useSelector( (state) => state);
    // const [first, setFirst] = useState([]);
    // const [firstSeason, setfirstSeason] = useState([]);
    let episodes = state.list;
    let firstEpisodes, secondEpisodes, thirdEpisodes;
    if(episodes) {
        firstEpisodes = episodes.filter(function(episode) {
            return episode.season === 1;
        });

        secondEpisodes = episodes.filter(function(episode) {
            return episode.season === 2;
        });

        thirdEpisodes = episodes.filter(function(episode) {
            return episode.season === 3;
        });
    }
    console.log({firstEpisodes});
    console.log({secondEpisodes});
    console.log({thirdEpisodes});

    //In the thead, there are 2 empty th tags due to the 3 parts of thetable grid. 
    const firstHeader = <thead><tr><th><b>Season: 1</b></th><th></th><th></th></tr></thead>;
    const firstContent = firstEpisodes.map(firstEpisode => {
        return <tr key={firstEpisode.number}><td>{firstEpisode.season}x{firstEpisode.number}</td><td>{firstEpisode.name}</td><td>{firstEpisode.airdate}</td></tr>;
    });

    return (
        <div>
            <h2>EpisodeList</h2>
            <div></div>
            <table className="Season">
                {firstHeader}
                <tbody>
                    {firstContent}
                </tbody>
            </table>
        </div>
    )
}

export default EpisodeList;
