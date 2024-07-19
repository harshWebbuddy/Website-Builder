"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Path() {
  const svgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const pathVariants = {
    initial: { pathLength: 0, pathOffset: 1 },
    animate: { pathLength: 1, pathOffset: 0 },
  };
  return (
    <div className="relative top-[128px] right-[270px] hidden xl:block transform rotate-180">
      <div className="absolute">
        <motion.svg
          variants={svgVariants}
          initial="initial"
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          whileInView="animate"
          width="1428"
          height="52"
          viewBox="0 0 1428 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.3"
            d="M0.5 25.7364C39.1667 44.4031 164.9 70.5364 358.5 25.7364C552.1 -19.0636 676.5 7.06973 714.5 25.7364"
            stroke="black"
            strokeDasharray="7 7"
          />
          <path
            opacity="0.3"
            d="M713 25.7364C751.667 44.4031 877.4 70.5364 1071 25.7364C1264.6 -19.0636 1389 7.06973 1427 25.7364"
            stroke="black"
            strokeDasharray="7 7"
          />
        </motion.svg>
      </div>
      <div className="absolute z-[1]">
        <motion.svg
          width="1428"
          height="52"
          viewBox="0 0 1428 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          transition={{ duration: 2 }}
          initial="initial"
          viewport={{ once: false }}
          whileInView="animate">
          <motion.path
            d="M0.5 25.7364C39.1667 44.4031 164.9 70.5364 358.5 25.7364C552.1 -19.0636 676.5 7.06973 714.5 25.7364"
            stroke="#FB524A"
            variants={pathVariants}
            transition={{ duration: 4, delay: 3.9 }}
          />
          <motion.path
            d="M713 25.7364C751.667 44.4031 877.4 70.5364 1071 25.7364C1264.6 -19.0636 1389 7.06973 1427 25.7364"
            stroke="#FB524A"
            variants={pathVariants}
            transition={{ duration: 4 }}
          />
        </motion.svg>
      </div>
    </div>
  );
}
