import React from "react";
import TypeWriter from "../components/Typewriter";
import RButton from "../components/RButton";
import "./home.css";

const Home = () => {
    return (<div className="centre-container">
        <RButton></RButton>
        <h1 style={{ display: "flex",justifyContent: "center", height: "100vh", marginTop: "250px", marginLeft: "20px", fontSize: "125px"}}>
        <TypeWriter
            words={["hi!", "my name is jeremy"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </h1>
    </div>)
}

export default Home;