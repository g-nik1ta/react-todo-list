import React from 'react';
import './ListItem.scss';
import { Button } from 'Components/Button/Button';

const ListItem = ({ item, removeItem }) => {
    return (
        <li className="listItem">
            <div className="listItemValueWrapper">
                {item.value}
            </div>
            <Button
                color="secondary"
                size="small"
                onClick={() => removeItem(item.uid)}
                iconType="cross"
            />
        </li>
    )
}

export default ListItem;