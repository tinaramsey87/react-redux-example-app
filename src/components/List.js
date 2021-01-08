import React, { useCallback } from 'react';
import ListItem from './ListItem';


const List = (props) => {
    let birds = props.birds;
    const birdList = birds.map((bird) =>
        <ListItem key={bird.key} value={bird.name} />
        // <li key={bird.key}>
        //     {bird.name} <button>X</button>
        // </li>
    );

    return (
        <div>
            <h2>Birds at the Feeder</h2>
            <ul>{birdList}</ul>

        </div>
    );
}

export default List;