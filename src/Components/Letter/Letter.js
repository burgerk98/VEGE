import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import letter from "../../images/letter.png";

const Letter = () => {
  const { scrollYProgress } = useScroll();
  const letterScaleDown = useTransform(scrollYProgress, [0.4, 0.5], [0.7, 1]);
  const letterScaleUp = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  return (
    <motion.img
      style={{ scale: letterScaleDown, scale: letterScaleUp }}
      src={letter}
      whileHover={{ rotate: 1.2 }}
    />
  );
};

export default Letter;
