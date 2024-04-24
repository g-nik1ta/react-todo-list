import React, { useEffect, useRef } from 'react';
import './Form.scss';
import { Button } from 'Components/Button/Button';

const Form = ({addItem}) => {
    const inputRef = useRef();
    const formRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const newItemValue = inputRef.current.value.trim();

        if (!newItemValue) return;

        addItem({ value: newItemValue, uid: Date.now() });
        formRef.current.reset();
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <div className="formContent">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Add new mark"
                    className="inputField"
                />
                <Button
                    className="submitBtn"
                    size="large"
                    color="primary"
                    iconType="plus"
                >
                    Add
                </Button>
            </div>
        </form>
    )
}

export default Form;