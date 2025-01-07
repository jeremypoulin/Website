import React from "react";
import Button from "./Button";
import styles from "./Nav.module.css";

const Nav: React.FC<{}> = () => {
    return(
        <nav className={styles.navbar}>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => console.log("clicked")}
                radius="0px"
                width="80px">
                    projects
                </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => console.log("clicked")}
                radius="0px"
                width="80px">
                projects
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => console.log("clicked")}
                radius="0px"
                width="80px">
                projects
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => console.log("clicked")}
                radius="0px"
                width="80px">
                projects
            </Button>
            <Button
                border="none"
                colour="black"
                height="40px"
                onClick={() => console.log("clicked")}
                radius="0px"
                width="80px">
                projects
            </Button>
        </nav>
    )
}

export default Nav