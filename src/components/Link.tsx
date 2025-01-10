import React from "react";

interface linkProps {
    href: string;
    children: React.ReactNode;
}

const Link: React.FC<linkProps> = ({href, children}) => {
    return (
        <a href={href}>
            {children}
        </a>
    );
};

export default Link;