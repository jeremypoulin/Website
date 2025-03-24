import React from "react";
import "./TButton.css";

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

const TButton: React.FC = () => {
    return(
    <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
    <button className={"TButton"}>
      <a
        href="/pages/projects.tsx"
        className={"TButton"}>
        hardware resume
      </a>
    </button>
    </div>)
}

export default TButton