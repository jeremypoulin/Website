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
        <h2 style={{textAlign: "center", marginBottom: "1px"}}>links</h2>
        <p style={{textAlign: "center", marginTop: "1px"}}><a href="https://github.com/jeremypoulin" style={{color: "rgba(112, 0, 65, 0.87)"}}>GitHub</a><br></br>
        <a href="https://www.linkedin.com/in/jeremy-poulin-725938278" style={{color: "rgba(112, 0, 65, 0.87)"}}>LinkedIn</a></p>
        <Form/>
        </div>
    )
}

export default Contact