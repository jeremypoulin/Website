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
        <h2 style={{textAlign: "center", marginBottom: "10px"}}>links</h2>
        <p style={{textAlign: "center", marginTop: "10px"}}>
            GitHub: github/com/jeremypoulin <br></br>
            LinkedIn: linkedin.com/in/jeremy-poulin-725938278
        </p>
        <Form/>
        </div>
    )
}

export default Contact