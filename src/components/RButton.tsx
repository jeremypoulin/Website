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

const RButton: React.FC = () => {
    return(
    <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
    <button className={"RButton"}>
      <a
        href="/JeremyPoulinResumeV13.pdf"
        download="JeremyPoulinResume.pdf"
        className={"RButton"}>
        resume
      </a>
    </button>
    </div>)
}

export default RButton 