import { motion } from "framer-motion";
import React from "react";
import Header from "./Header";
import "./Magazine.css";
import Main from "./Main";
import Navbar from "./Navbar";

const Magazine = () => {
  return (
    <motion.div id="magazineContainer">
      <Header />
      <Navbar />
      <Main />
    </motion.div>
  );
};

export default Magazine;
