import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import imagesData from "../../images/images";
import "./SideScroll.css";

const SideScroll = () => {
  const [hoveredImgId, setHoveredImgId] = useState(null);

  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <>
      <div id="mainCollection" ref={elRef}>
        {imagesData.map((image) => (
          <motion.img
            key={image.id}
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
        ))}
      </div>
    </>
  );
};

export default SideScroll;
