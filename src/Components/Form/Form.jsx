import React, { useEffect, useRef } from 'react';
import './Form.scss';
import Button from 'Components/Button/Button';

const Form = ({ addItem }) => {
    const inputRef = useRef();
    const formRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        
        const newItemValue = inputRef.current.value.trim();
        if (!newItemValue) return;

        addItem(newItemValue);
        formRef.current.reset();
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <form ref={formRef} onSubmit={onSubmit} className='column-if_md_size'>
            <input
                type="text"
                ref={inputRef}
                placeholder="Add new task"
                className="inputField"
            />
            <Button
                className="submitBtn full_width-if_md_size"
                size="large"
                color="primary"
                iconType="plus"
            >
                Add
            </Button>
        </form>
    )
}

export default Form;