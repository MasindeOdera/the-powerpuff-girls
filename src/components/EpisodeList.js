import React from 'react';
import { useSelector } from 'react-redux';
import './EpisodeList.scss';

function EpisodeList() {
    const state = useSelector( (state) => state);
    // const [season, setSeason] = useState({});
    // const dispatch = useDispatch();
    console.log(state);
    // setSeason(state.list);
    // console.log(season);
    // if(state.initialData !== undefined){
    //     const episodes = useSelector( (state) => state.initialData._embedded.episodes);
    //     console.log(episodes);
    //     setSeason(episodes);   
    // }

    return (
        <div>
            <h2>EpisodeList</h2>
        </div>
    )
}

export default EpisodeList;
