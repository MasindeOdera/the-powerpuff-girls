import React, { useState, useEffect } from 'react';
import { Item } from 'semantic-ui-react';
import { useSelector, useDispatch} from 'react-redux';
import placeholder from '../images/placeholder.png';
import './Main.scss';

function Main() {
    const [initialData, setInitialData] = useState('');
    const dispatch = useDispatch();
    //https://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls

    useEffect(() => {
      fetch('https://api.tvmaze.com/shows/6771?embed=episodes')
        .then(res => res.json())
        .then(data => {
          console.log({data});
          setInitialData(data);
          dispatch({type:"DISPLAY", payload: data})
          dispatch({type:"LIST", payload: data._embedded.episodes});
        });
    }, [dispatch]);


    // Get the image from the data.
    const image = useSelector( (state) => state.initialData.image);
    // const data = useSelector( (state) => state.initialData);
    // setInitialData(data);

    return (
        <div className="Main">
            <Item.Group>
            <Item>
                {/* If the image returns undefined, then a placholder will show */}
                <Item.Image size='small' src={image !== undefined ? image.medium : placeholder} />
                <Item.Description>
                    {/* Using dangerouslySetInnerHTML allows me to use the tags that come with the string */}
                   <div dangerouslySetInnerHTML={{ __html: initialData.summary }} />
                </Item.Description>
            </Item>
            </Item.Group>
        </div>
    )
}

export default Main;
