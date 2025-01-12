import React, { Children } from "react";
import styles from "./Nav.module.css"

interface Properties {
    onClick: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<Properties> = ({
        onClick,
        children,
    }) => {
        return(
        <button
            onClick={onClick} className={styles.button}
        >
            {children} {}
        </button>
    );
}

export default Button 