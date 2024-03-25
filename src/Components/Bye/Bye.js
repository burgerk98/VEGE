import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import bush1 from "../../images/bush1.png";
import bush2 from "../../images/bush2.png";
import bush3 from "../../images/bush3.png";
import bush4 from "../../images/bush4.png";
import "./Bye.css";

const Bye = () => {
  const { scrollYProgress } = useScroll();
  const byeScale = useTransform(scrollYProgress, [0.8, 1], [0.3, 1]);
  const bush1x = useTransform(scrollYProgress, [0.75, 1], ["20vh", "-20vh"]);
  const bush3x = useTransform(scrollYProgress, [0.75, 1], ["40vh", "100vh"]);
  return (
    <>
      <motion.p style={{ x: bush1x }}>
        <img id="bush1" src={bush1} />
      </motion.p>
      <img id="bush2" src={bush2} />
      <img id="bush4" src={bush4} />
      <motion.p style={{ x: bush3x }}>
        <img id="bush3" src={bush3} />
      </motion.p>

      <div id="byeWrapper">
        <motion.div id="byeContainer" style={{ scale: byeScale }}>
          <h1 id="bye">Bye!</h1>
          <p id="byeP">당신의 일상이 조금 더 신선해지길!</p>
        </motion.div>
      </div>
    </>
  );
};

export default Bye;
