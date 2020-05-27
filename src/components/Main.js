import React from 'react';
import { Item } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import placeholder from '../images/placeholder.png';
import './Main.scss';

function Main() {

    // Get the image from the data.
    const image = useSelector( (state) => state.initialData.image);
    const summary = useSelector( (state) => state.initialData.summary);

    return (
        <div className="Main">
            <Item.Group>
            <Item>
                {/* If the image returns undefined, then a placholder will show */}
                <Item.Image size='small' src={image !== undefined ? image.medium : placeholder} />
                <Item.Description>
                    {/* Using dangerouslySetInnerHTML allows me to use the tags that come with the string */}
                   <div dangerouslySetInnerHTML={{ __html: summary }} />
                </Item.Description>
            </Item>
            </Item.Group>
        </div>
    )
}

export default Main;
