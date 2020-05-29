import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import placeholder from '../images/placeholder.png';

function EpisodeDetail(detail) {
    const state = useSelector( (state) => state);


    //I need to convert the id back into an integer before using it compare with other integers.
    let id = parseInt(detail.match.params.id);
    let shows = state.list;
    let episodeDetail, title, summary, image, img;

    if(shows) {
        episodeDetail = shows.filter(function(show) {
            return show.id === id;
        });
    }

    //Locating correct title for selected show and displaying error message if missing
    title = episodeDetail.map(detail => {
        if(detail.name !== null){
            return detail.name;
        }
        else {
            return <h4>No title provided</h4>;
        }
    });

    //Assigning summary for selected show and displaying error message if missing
    summary = episodeDetail.map(detail => {
        if(detail.summary !== null){
            return detail.summary;
        }
        else {
            return "No summary provided";
        }
    });

    //Assigning summary for selected show and displaying error message if missing
    image = episodeDetail.map(detail => {
        if(detail.image === null || undefined){
            return '';
        }
        else {
            return detail.image;
        }
     });

    let cover = image.map(img => {
        if(img.medium !== null || undefined){
            return img.medium;
        }
        else {
            return undefined;
        }
     });

     const coverImage = image !== undefined ? cover : placeholder;

    return (
        <Fragment>
            <h1>Title: {title}</h1>
            <img src={coverImage} alt="img" />
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            
        </Fragment>
    )
}

export default EpisodeDetail;
