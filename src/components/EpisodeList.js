import React from 'react';
import { useSelector } from 'react-redux';
import './EpisodeList.scss';

function EpisodeList() {
    const state = useSelector( (state) => state);
    // const [first, setFirst] = useState([]);
    // const [firstSeason, setfirstSeason] = useState([]);
    let episodes = state.list;
    let first, second, third;
    if(episodes) {
        first = episodes.filter(function(episode) {
            return episode.season === 1;
        });

        second = episodes.filter(function(episode) {
            return episode.season === 2;
        });

        third = episodes.filter(function(episode) {
            return episode.season === 3;
        });
    }
    console.log({first});
    console.log({second});
    console.log({third});


    return (
        <div>
            <h2>EpisodeList</h2>
        </div>
    )
}

export default EpisodeList;
