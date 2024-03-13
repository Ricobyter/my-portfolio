import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Slide({ children, delay, className }) {
  const ref = useRef(null);
  const isInview = useInView({ ref, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 }
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: delay,
        stiffness: 100
      }}
      style={{position:'relative'}}
      initial="hidden"
      animate={controls}
      className={className}
      layoutScroll
    >
      {children}
    </motion.div>
  );
}
