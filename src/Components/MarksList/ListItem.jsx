import React from "react";
import { Button } from "../Button";
import { iconTypes } from "../../constants/icons";
import styles from './MarkList.module.css';

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickClose = () => {
        this.props.removeItem(this.props.id);
    }

    render () {
        return(
            <li className={styles.listItem}>
                <div className={styles.listItemValueWrapper}>
                    {this.props.item.value}
                </div>
                <Button color="secondary" size="small" onClick={this.onClickClose} iconType={iconTypes.cross} />
            </li>
        )
    }
}