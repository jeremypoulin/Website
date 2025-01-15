import React, { useEffect, useRef } from "react";
import styles from "./Nav.module.css"

interface Properties {
    onClick: () => void;
    children?: React.ReactNode;
    autoFocus?: boolean;
    id: string;
}

const Button: React.FC<Properties> = ({
        onClick,
        children,
        autoFocus = false,
        id
        
    }) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
        useEffect(() => {
            const focusedButtonId = localStorage.getItem("focusedButton");
            if (focusedButtonId === id && buttonRef.current) {
                buttonRef.current.focus();
            }
        }, [id]);
        useEffect(() => {
            if (autoFocus && buttonRef.current) {
                buttonRef.current.focus();
            }
        }, [autoFocus]);

        const handleFocus = () => {
            localStorage.setItem("focusedButton", id);
        };
        return(
        <button
            ref={buttonRef}
            onClick={onClick} 
            onFocus={handleFocus}
            className={styles.button}
        >
            {children} {}
        </button>
    );
}

export default Button 