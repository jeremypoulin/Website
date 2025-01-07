import React, { useEffect } from "react";

const Title: React.FC = () => {
    useEffect(() => {
        document.title = "Jeremy Poulin";
    }, []);
    return (
        <div>
            <h1>hi! i'm jeremy</h1>
            <h3>i create.</h3>
        </div>
    );
};

export default Title;