import React from "react";
import TypeWriter from "../components/Typewriter";
import RButton from "../components/RButton";

const Home = () => {
    return (<div className="centre-container">
        <h1 style={{textAlign: "center", marginTop: "250px", fontSize: "140px"}}>
        <TypeWriter
            words={["hi!", "my name is jeremy"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </h1>
    <RButton></RButton>
    </div>)
}

export default Home;