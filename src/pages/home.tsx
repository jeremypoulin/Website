import React, {useState, useEffect} from "react";
import TypeWriter from "../components/Typewriter";
import RButton from "../components/RButton";
import "./home.css";
import Pixel from "../components/pixel"

const Home: React.FC = () => {
    const [showTypewriter, setShowTypewriter] = useState(false);
    const row = 100;
    const col = 100;
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowTypewriter(true);
        }, 1200);
    
        return () => clearTimeout(timer);
      }, []);
    return (<div className="home-container">
        <RButton></RButton>
        <div className="centre-container">
        {showTypewriter && (
        <h1 style={{ position: "absolute", display: "flex",justifyContent: "center", height: "100vh", marginTop: "250px", marginLeft: "20px", fontSize: "125px"}}><TypeWriter
            words={["hi!", "my name is jeremy"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
        )}
        <Pixel/>
    </div>
    </div>)
}

export default Home;