"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Motion({ children, transition, variants, classNames, ...restProps }) {
  return (
    <motion.div
      {...restProps}
      // viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={transition}
      className={`w-full ${classNames}`}>
      {children}
    </motion.div>
  );
}
