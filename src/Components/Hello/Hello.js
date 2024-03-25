import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import "./Hello.css";

const Hello = () => {
  const { scrollYProgress } = useScroll();
  const helloOpacity = useTransform(scrollYProgress, [0.2, 0.29], [1, 0]);

  return (
    <>
      <motion.div id="helloContainer" style={{ opacity: helloOpacity }}>
        <h1 id="hello">Hello!</h1>
        <p>VEGE-World에 오신걸 환영합니다!</p>
      </motion.div>
    </>
  );
};

export default Hello;
