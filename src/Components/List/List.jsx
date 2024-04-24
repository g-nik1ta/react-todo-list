import React from 'react';
import './List.scss';
import ListItem from 'Components/ListItem/ListItem';

const List = ({ items, removeItem }) => {
    return (
        <ul className="listContainer">
            {items.map(item =>
                <ListItem
                    key={item.uid}
                    item={item}
                    removeItem={removeItem}
                />
            )}
        </ul>
    )
}

export default List;