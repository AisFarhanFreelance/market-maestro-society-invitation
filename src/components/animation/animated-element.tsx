"use client";

import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  needScroll?: boolean;
  delay?: number;
}

const AnimatedElement = ({
  children,
  needScroll = true,
  delay = 0,
}: AnimatedElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      {...(needScroll
        ? {
            whileInView: { opacity: 1, y: 0 },
            viewport: { amount: 0.2 },
          }
        : {
            animate: { opacity: 1, y: 0 },
          })}
      transition={{ duration: 1, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
