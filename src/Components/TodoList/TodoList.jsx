import React, { useState } from 'react';
import './TodoList.scss';
import Form from 'Components/Form/Form';
import ListItem from 'Components/ListItem/ListItem';

const TodoList = ({ remove = false }) => {
    const [marks, setMarks] = useState([])

    const addItem = (value) => {
        setMarks(prevState => {
            return [
                ...prevState,
                {
                    value,
                    id: prevState.length ? prevState[prevState.length - 1].id + 1 : 1,
                    remove: false
                },
            ]
        });
    }

    const removeItem = (id) => {
        setMarks(prevState => {
            return prevState.map(item => {
                return {
                    ...item,
                    remove: id === item.id ? !item.remove : item.remove
                }
            })
        });
    }

    return (
        <main className="container">
            <div>
                <h1>React Todo List</h1>
                {
                    !remove &&
                    <Form addItem={addItem} />
                }
            </div>
            {
                (remove
                    ?
                    !marks.filter(item => item.remove).length
                    :
                    !marks.filter(item => !item.remove).length) &&
                <span className='empty'>The list is empty!</span>
            }
            <ul className="list_wrapper undecorated_ul">
                {[...marks].reverse().map(item =>
                    (remove ? item.remove : !item.remove) &&
                    <ListItem
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                        remove={remove}
                    />
                )}
            </ul>
        </main>
    )
}

export default TodoList;