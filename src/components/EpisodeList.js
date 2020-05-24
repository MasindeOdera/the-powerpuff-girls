import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './EpisodeList.scss';

function EpisodeList() {
    const state = useSelector( (state) => state);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>EpisodeList</h2>
        </div>
    )
}

export default EpisodeList;
