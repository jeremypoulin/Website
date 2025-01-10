import React from "react";
import TypeWriter from "../components/Typewriter";

const Home = () => {
    return (<h1 style={{ display: "flex",justifyContent: "center", height: "100vh", marginTop: "300px", fontSize: "140px"}}>
        <TypeWriter
            words={["hi!", "my name is jeremy"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </h1>)
}

export default Home;