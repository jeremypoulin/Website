// import {useState, useEffect} from "react";
// import "./cursor.css";

// const Cursor: React.FC = () => {
//     const [position, setPosition] = useState({x: 0, y: 0});
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//         const mouseMove = (e: MouseEvent) => {
//             setPosition({ x: e.clientX, y: e.clientY });
//             setVisible(true);
//         };

//         const mouseLeave = () => {
//             setVisible(false);
//         }

//         const mouseEnter = () => {
//             setVisible(true);
//         }

//         window.addEventListener("mousemove", mouseMove);
//         window.addEventListener("mouseleave", mouseLeave);
//         window.addEventListener("mouseenter", mouseEnter);

//         return () => {
//             window.removeEventListener("mousemove", mouseMove);
//             window.removeEventListener("mouseleave", mouseLeave);
//             window.removeEventListener("mouseenter", mouseEnter);
//         };
//     }, []);

//     return (
//         <div
//             className={visible ? "visible" : "hidden"}
//             style={{
//                 left: `${position.x}px`,
//                 top: `${position.y}px`,
//                 transform: "translate(-50%, -50%)"
//             }}
//         />
//     );
// };

// export default Cursor;
export {}