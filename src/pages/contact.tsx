import React from "react";
import TypeWriter from "../components/Typewriter";
import Form from "../contact/Form";
import Link from "../components/Link";

const Contact = () => {
    return(
        <div>
        <h1 style={{ textAlign: "center" }}>
           <TypeWriter
            words={["contact me"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p style={{textAlign: "center", marginTop: "1px"}}><a href="https://github.com/jeremypoulin" style={{color: "rgb(112, 0, 65)"}}>GitHub</a><br></br>
        <a href="https://www.linkedin.com/in/jeremy-poulin-725938278" style={{color: "rgb(112, 0, 65)"}}>LinkedIn</a></p>
        <Form/>
        </div>
    )
}

export default Contact