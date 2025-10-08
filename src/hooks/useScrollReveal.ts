import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

// Very subtle animation variants - removed transitions from hidden state to prevent flicker
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const fadeIn = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const slideInFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -30
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const variants = {
  fadeInUp,
  fadeIn,
  slideInFromLeft
};

export function useScrollReveal(variant: keyof typeof variants = 'fadeInUp', threshold = 0.1) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: "-50px 0px -50px 0px" // Start animation slightly before element enters viewport
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return {
    ref,
    motion: motion,
    initial: "hidden",
    animate: hasAnimated ? "visible" : "hidden",
    variants: variants[variant]
  };
}