import React from "react";
import Button from "./Button";
import styles from "./Nav.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Nav: React.FC<{}> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <nav className={styles.navbar}>
            <Button
                id="home"
                onClick={() => navigate("/")}
                autoFocus={location.pathname === "/"}>
                    home
                </Button>
            <Button
                id="about"
                onClick={() => navigate("/about")}
                autoFocus={location.pathname === "/about"}>
                me
            </Button>
            <Button
                id="projects"
                onClick={() => navigate("/projects")}
                autoFocus={location.pathname === "/projects"}>
                projects
            </Button>
            <Button
                id="contact"
                onClick={() => navigate("/connect")}
                autoFocus={location.pathname === "/connect"}>
                connect
            </Button>
        </nav>
    )
}

export default Nav