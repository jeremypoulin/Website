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
                width="80px"
                bordercolour="rgba(113, 94, 0, 0.87)"
                textcolour="rgba(113, 94, 0, 0.87)">
                    home
                </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/about")}
                radius="0px"
                width="80px"
                bordercolour="rgba(113, 94, 0, 0.87)"
                textcolour="rgba(113, 94, 0, 0.87)">
                me
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/projects")}
                radius="0px"
                width="80px"
                bordercolour="rgba(113, 94, 0, 0.87)"
                textcolour="rgba(113, 94, 0, 0.87)">
                projects
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => navigate("/contact")}
                radius="0px"
                width="80px"
                bordercolour="rgba(113, 94, 0, 0.87)"
                textcolour="rgba(113, 94, 0, 0.87)">
                contact
            </Button>
        </nav>
    )
}

export default Nav