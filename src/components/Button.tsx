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
    bordercolour: string;
    textcolour: string;
}

const Button: React.FC<Properties> = ({
        border,
        colour,
        height,
        onClick,
        radius,
        width,
        children,
        bordercolour,
        textcolour
    }) => {
        return(
        <button
            onClick={onClick}
            style={{
                backgroundColor: colour,
                border,
                borderRadius: radius || 0,
                borderColor: bordercolour,
                height,
                width,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: textcolour
            }}
        >
            {children} {}
        </button>
    );
}

export default Button 