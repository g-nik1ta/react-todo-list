import React from "react";
import { Form } from "./Form";

export const Header = ({ className, ...rest }) => {
    return (
        <div className={className}>
            <h1>Mark List</h1>
            <Form {...rest} />
        </div>
    )
}