"use client";

import { motion } from "framer-motion";

export default function FadeInWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      className=""
    >
      {children}
    </motion.div>
  );
}
