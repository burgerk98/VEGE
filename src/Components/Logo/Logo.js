import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import cloud1 from "../../images/cloud1.png";
import cloud2 from "../../images/cloud2.png";
import cloud3 from "../../images/cloud3.png";
import "./Logo.css";

const Logo = () => {
  const { scrollYProgress } = useScroll();
  const cloud1x = useTransform(scrollYProgress, [0, 1], ["20vh", "100vh"]);
  const cloud2x = useTransform(scrollYProgress, [0, 1], ["-20vh", "20vh"]);
  // const cloud3x = useTransform(scrollYProgress, [0, 1], ["100vh", "-100vh"]);
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const cloud3Opacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, -6]);

  return (
    <>
      <motion.img
        style={{ x: cloud2x, opacity: cloudOpacity }}
        id="cloud2"
        src={cloud2}
      />
      <motion.img
        style={{ x: cloud1x, opacity: cloudOpacity }}
        id="cloud1"
        src={cloud1}
      />
      <motion.img style={{ opacity: cloud3Opacity }} id="cloud3" src={cloud3} />
      <div id="logoContainer">
        <motion.h1 id="logo" style={{ scale }}>
          VEGE
        </motion.h1>
      </div>
    </>
  );
};

export default Logo;
