import React from "react";
import Button from "./Button";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav: React.FC<{}> = () => {
    const navigate = useNavigate();
    return(
        <nav className={styles.navbar}>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/")}
                radius="0px"
                width="80px">
                    home
                </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/about")}
                radius="0px"
                width="80px">
                me
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/projects")}
                radius="0px"
                width="80px">
                projects
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/game")}
                radius="0px"
                width="80px">
                game!
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/contact")}
                radius="0px"
                width="80px">
                contact
            </Button>
        </nav>
    )
}

export default Nav