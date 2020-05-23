import React from 'react';
import { Item } from 'semantic-ui-react';
import { useSelector} from 'react-redux';
import placeholder from '../images/placeholder.png';

function Main() {
    const initialData = useSelector( (state) => state.initialData);
    const image = useSelector( (state) => state.initialData.image);
    // const description = useSelector( (state) => state.description);
    console.log("State from Main.js: ", {initialData});
    console.log(initialData.image);
    // console.log(Object.keys(image)[0]);
    return (
        <div>
            <Item.Group>
            <Item>
                <Item.Image size='small' src={image ? image.medium : placeholder} />
                <Item.Content header='Cute Dog' description={initialData.summary} />
            </Item>
            </Item.Group>
        </div>
    )
}

export default Main;
