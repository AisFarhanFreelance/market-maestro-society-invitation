"use client";

import { motion } from "framer-motion";

const AnimatedElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
