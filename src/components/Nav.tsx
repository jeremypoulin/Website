import React from "react";
import Button from "./Button";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav: React.FC<{}> = () => {
    const navigate = useNavigate();
    return(
        <nav className={styles.navbar}>
            <Button
                onClick={() => navigate("/")}>
                    home
                </Button>
            <Button
                onClick={() => navigate("/about")}>
                me
            </Button>
            <Button
                onClick={() => navigate("/projects")}>
                projects
            </Button>
            <Button
                onClick={() => navigate("/contact")}>
                contact
            </Button>
        </nav>
    )
}

export default Nav