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

    const name = firstEpisodes.map(firstEpisode => {
        return <tr key={firstEpisode.number}><td>{firstEpisode.name}</td></tr>;
    });

    return (
        <div>
            <h2>EpisodeList</h2>
            <div></div>
            <table>
                <tbody>{name}</tbody>
            </table>
        </div>
    )
}

export default EpisodeList;
