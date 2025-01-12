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
    <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
    <button style={{ borderColor: "rgb(145, 0, 58)", background: "#000", borderWidth: "2px", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 20px", fontSize: "16px" }}>
      <a
        href="/JeremyPoulinResumeV10.pdf"
        download="JeremyPoulinResume.pdf"
        style={{color: "rgb(145, 0, 58)", fontSize: "20px"}}>
        resume
      </a>
    </button>
    </div>)
}

export default RButton 