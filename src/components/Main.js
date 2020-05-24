import React, { useState, useEffect } from 'react';
import { Item } from 'semantic-ui-react';
import { useSelector, useDispatch} from 'react-redux';
import placeholder from '../images/placeholder.png';

function Main() {
    const [initialData, setInitialData] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
      fetch('http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls')
        .then(res => res.json())
        .then(data => {
          console.log({data});
          setInitialData(data);
        });
    }, []);
  
    useEffect(() => {
      dispatch({type:"DISPLAY", payload: initialData})
    });

    // const initialData = useSelector( (state) => state.initialData);
    const image = useSelector( (state) => state.initialData.image);

    console.log("State from Main.js: ", {initialData});
    console.log(initialData.image);

    if(initialData) {
        console.log(initialData.image.medium);
    }

    return (
        <div>
            <Item.Group>
            <Item>
                <Item.Image size='small' src={image !== undefined ? image.medium : placeholder} />
                <Item.Description>
                   <div dangerouslySetInnerHTML={{ __html: initialData.summary }} />
                </Item.Description>
            </Item>
            </Item.Group>
        </div>
    )
}

export default Main;
