import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { motionSettings } from "../design/motion";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduced || !motionSettings.enabled
          ? false
          : { opacity: 0, y: motionSettings.reveal.distance }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: motionSettings.reveal.viewportAmount }}
      transition={{ duration: motionSettings.reveal.duration }}
    >
      {children}
    </motion.div>
  );
}
