import React, { Children } from "react";
import styles from "./Nav.modules.css"

interface Properties {
    border: string;
    colour: string;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
    children?: React.ReactNode;
}

const Button: React.FC<Properties> = ({
        border,
        colour,
        height,
        onClick,
        radius,
        width,
        children
    }) => {
        return(
        <button
            onClick={onClick}
            style={{
                backgroundColor: colour,
                border,
                borderRadius: radius || 0,
                height,
                width
            }}
        >
            {children} {}
        </button>
    );
}

export default Button 