import React from "react";
import "./RButton.css";

interface Properties {
    border: string;
    colour: string;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
    children?: React.ReactNode;
    bordercolour: string;
    textcolour: string;
}

const PButton: React.FC = () => {
    return(
    <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
    <button className={"RButton"}>
      <a
        target = "_blank"
        href="https://drive.google.com/file/d/1h2DDCPtV7wsFIhzpzfH8pPqhUl_3-SXp/view?usp=sharing"
        className={"RButton"}>
        resume & portfolio
      </a>
    </button>
    </div>)
}

export default PButton 