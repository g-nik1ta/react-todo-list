import React, { useState } from 'react';
import './MarksList.scss';
import List from 'Components/List/List';
import Form from 'Components/Form/Form';

const MarksList = () => {
    const [marks, setMarks] = useState([])

    const addItem = (mark) => {
        const newList = [mark, ...marks];
        setMarks(newList);
    }

    const removeItem = (id) => {
        const newList = marks.filter(item => id !== item.uid);
        setMarks(newList);
    }

    return (
        <div className="container">
            <div>
                <h1>Mark List</h1>
                <Form addItem={addItem} />
            </div>
            <List items={marks} removeItem={removeItem} />
        </div>
    )
}

export default MarksList;