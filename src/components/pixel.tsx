import React from "react";
import { motion } from "framer-motion";
import "../pages/home.css";

const Pixel: React.FC = () => {
    const row = 20
    const col = 20
    const containerVariants = {
        hidden: {
          opacity: 1,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.0005,
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
              delay: Math.random() * custom * 0.1,
              duration: 1,
            },
          }),
        exit: { opacity: 0 },
    };

    return (
        <motion.div
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {Array.from({ length: row*col }).map((_, index) => (
            <motion.div key={index} className="grid-item" custom={index/10} variants={itemVariants}>
            </motion.div>
          ))}
        </motion.div>
      );
    };



export default Pixel;