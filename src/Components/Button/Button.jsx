import React from "react";
import './Button.scss';
import Plus from "svg/Plus";
import Cross from "svg/Cross";

const Button = ({ children, className = '', size = '', color = '', iconType, ...props }) => {
    return (
        <button
            className={
                "button-container" +
                (size && ` ${size}`) +
                (color && ` ${color}`) +
                (className && ` ${className}`)
            }
            {...props}
        >
            <span className="content">
                {
                    iconType === 'plus'
                        ?
                        <Plus />
                        :
                        iconType === 'cross'
                            ?
                            <Cross />
                            :
                            <></>
                }
                {children}
            </span>
        </button>
    )
}

export default Button;