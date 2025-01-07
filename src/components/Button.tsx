import React from "react";
import styles from "./Nav.modules.css"

interface Properties {
    border: string;
    colour: string;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
}

const Button: React.FC<Properties> = ({
        border,
        colour,
        height,
        onClick,
        radius,
        width
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
        ></button>
    );
}

export default Button 