import React from "react";
import { Header } from "./Header";
import { List } from "./List";
import styles from './MarkList.module.css';

export class MarkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { marks: [] };
    }

    addItem = mark => {
        const newList = [mark, ...this.state.marks];
        this.setState( {marks: newList} );
        
    }

    removeItem = id => {
        const newList = this.state.marks.filter(item => id !== item.uid);
        this.setState( {marks: newList} );
    }

    render() {
        return (
            <div className={styles.container}>
                <Header addItem={this.addItem} />
                <List items={this.state.marks} removeItem={this.removeItem} />
            </div>
        )
    }
}