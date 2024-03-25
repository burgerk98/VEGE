import { motion } from "framer-motion";
import React, { useState } from "react";
import imagesData from "../../images/images";
import "./HoverImg.css";

const HoverImg = () => {
  const [hoveredImgId, setHoveredImgId] = useState(null);

  return (
    <>
      {imagesData.map((image) => (
        <div className="imgContainer" key={image.id}>
          <motion.img
            className="img"
            src={hoveredImgId === image.id ? image.hoverSrc : image.src}
            whileHover={{ rotate: 5 }}
            onHoverStart={() => {
              setHoveredImgId(image.id);
            }}
            onHoverEnd={() => {
              setHoveredImgId(null);
            }}
            alt={image.alt}
          />
        </div>
      ))}
    </>
  );
};
export default HoverImg;
