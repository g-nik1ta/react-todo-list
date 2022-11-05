import React from "react";
import { ListItem } from "./ListItem";
import styles from './MarkList.module.css';

export const List = props => {
    const items = props.items.map(item => {
        return (
            <ListItem
                key={item.uid}
                id={item.uid}
                item={item}
                removeItem={props.removeItem}
            />
        )
    });

    return <ul className={styles.listContainer}> {items} </ul>
}