import React from 'react';
import './ListItem.scss';
import Button from 'Components/Button/Button';

const ListItem = ({ item, removeItem, remove }) => {
    return (
        <li className="list_item">
            <span className="value">
                {item.value}
            </span>
            <Button
                color="secondary"
                size="small"
                onClick={() => removeItem(item.id)}
                iconType={remove ? 'plus' : "cross"}
            />
        </li>
    )
}

export default ListItem;