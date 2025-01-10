import React from "react";

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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
    <button style={{ borderColor: "rgba(113, 94, 0, 0.87)", background: "#000", borderWidth: "2px", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 20px", fontSize: "16px" }}>
      <a
        href="/JeremyPoulinResumeV5.pdf"
        download="JeremyPoulinResume.pdf"
        style={{color: "rgba(113, 94, 0, 0.87)" }}>
        resume
      </a>
    </button>
    </div>)
}

export default RButton 