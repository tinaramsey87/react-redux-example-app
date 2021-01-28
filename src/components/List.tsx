import React from 'react';
import ListItem from './ListItem';


const List = (props) => {
    let birds = props.birds;
    const birdList = birds.map((bird) => {
        // using the spread operator here as a solution to ListItem complaining about getting a value property
        // when using typescript. 
        // Property 'value' does not exist on type 'IntrinsicAttributes & { dataKey: any; }'
        const listItemProps = {
            dataKey: bird.key,
            value: bird.name
        };
        <ListItem {...listItemProps} />
    });

    return (
        <div>
            <h2>Birds at the Feeder</h2>
            <ul>{birdList}</ul>

        </div>
    );
}

export default List;