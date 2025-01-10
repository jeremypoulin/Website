import React from 'react';
import { Typewriter } from "react-simple-typewriter";

interface twProps {
    words: string[];
    cursor: boolean;
    cursorStyle: React.ReactNode;
    typeSpeed: number;
    deleteSpeed: number;
    delaySpeed: number;
}

const TypeWriter: React.FC<twProps> = ({words, cursor, cursorStyle, typeSpeed, deleteSpeed, delaySpeed}) => {
  return (
    <div className="App">
      <Typewriter
            words={words}
            cursor
            cursorStyle="_"
            typeSpeed={typeSpeed}
            deleteSpeed={deleteSpeed}
            delaySpeed={delaySpeed}
          />
    </div>
  )
};

export default TypeWriter;