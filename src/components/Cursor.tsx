import {useState, useEffect} from "react";
import "./cursor.css";

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const mouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY});
        };

        const mouseEnter = () => {
            setVisible(true);
        }

        const mouseLeave = () => {
            setVisible(false);
        }

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseenter", mouseEnter);
        window.addEventListener("mouseleave", mouseLeave);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseenter", mouseEnter);
            window.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <div
            className={visible ? "visible" : "hidden"}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default Cursor;