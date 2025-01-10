import React from "react";
import TypeWriter from "../components/Typewriter";

const Game = () => {
    return(
        <h1>
            <TypeWriter
            words={["under construction"]}
            loop={0}
            cursor
            cursorStyle
          />
        </h1>
    )
}

export default Game