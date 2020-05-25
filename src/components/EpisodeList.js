import React from 'react';
import { useSelector } from 'react-redux';
import './EpisodeList.scss';

function EpisodeList() {
    const state = useSelector( (state) => state);
    // const [first, setFirst] = useState([]);
    let episodes = state.list;
    
    if(episodes) {
        let firstSeason = episodes.filter(function(episode) {
            return episode.season === 1;
        });
        console.log(firstSeason);
    }


    return (
        <div>
            <h2>EpisodeList</h2>
        </div>
    )
}

export default EpisodeList;
