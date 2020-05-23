import React from 'react';
import { Item } from 'semantic-ui-react';
import { useSelector} from 'react-redux';
import placeholder from '../images/placeholder.png';

function Main() {
    const state = useSelector( (state) => state);
    const description = useSelector( (state) => state.description);
    console.log({state});
    return (
        <div>
            <Item.Group>
            <Item>
                <Item.Image size='small' src={placeholder} />
                <Item.Content header='Cute Dog' description={description} />
            </Item>
            </Item.Group>
        </div>
    )
}

export default Main;
