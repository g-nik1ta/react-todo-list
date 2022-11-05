import React from "react";
import clsx from 'clsx';
import styles from './Button.css';
import { Icon } from "../Icon";

export const Button = props => {
    const { children, className, size, color, iconType, type = 'button', ...rest } = props;
    const render = (
        <span className="contentWrapper">
            {iconType && <Icon type={iconType} className={clsx("icon", !children && "resetMarginRight")} /> }
            {children || null}
        </span>
    );

    return(
        <button
            type={type}
            className={
                clsx(
                    [
                        "container",
                        {
                            [[size]]: size,
                            [[color]]: color
                        },
                        className
                    ]
                )
            }
            {...rest}
        >
            {render}
        </button>
    )
}