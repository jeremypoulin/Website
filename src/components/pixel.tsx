import React, {useEffect} from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import "../pages/home.css";

const Pixel: React.FC = () => {
    const row = 30
    const col = 30
    const zIndex = useMotionValue(0);
    const containerVariants = {
        hidden: {
          opacity: 1,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.0000001,
            },
        },
        exit: {
        opacity: 0,
        },
    };

    const itemVariants = {
        hidden: { opacity: 1, scale: 1 },
        visible: (custom: number) => ({
            opacity: 0,
            scale: 0,
            transition: {
              delay: 0.8 + Math.random() * custom * 0.1,
              duration: 1,
            },
          }),
        exit: { opacity: 0 },
    };

    useEffect(() => {
        animate(20, 0, {
            duration: 4,
            onUpdate: (latest) => {
                zIndex.set(Math.round(latest));
            },
        });
    }, [zIndex])

    return (
        <motion.div
        style={{ willChange: 'transform',}}
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{type: "spring", stiffness: "300", damping: '20'}}
        >
          {Array.from({ length: row*col }).map((_, index) => (
            <motion.div key={index} className="grid-item" custom={index/60} variants={itemVariants}>
            </motion.div>
          ))}
        </motion.div>
      );
    };



export default Pixel;