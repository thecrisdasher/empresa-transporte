import { Variants } from "framer-motion"

// Predefined animation variants for consistent motion design
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing
    },
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInUp: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Card hover animations
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

// Text reveal animations
export const textReveal: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Floating animation
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// Button press animation
export const buttonPress: Variants = {
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
}

// Drawer/Modal animations
export const drawerSlide: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: "0%",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Background reveal
export const backgroundReveal: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Progressive number animation for counters
export const numberCount = (from: number, to: number, duration: number = 1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
})

// Utility function for creating custom delays
export const withDelay = (variants: Variants, delay: number): Variants => {
  const newVariants = { ...variants }
  if (newVariants.visible && typeof newVariants.visible === 'object') {
    newVariants.visible = {
      ...newVariants.visible,
      transition: {
        ...(newVariants.visible.transition as any),
        delay,
      },
    }
  }
  return newVariants
}

// Spring configurations
export const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30,
}

export const bounceConfig = {
  type: "spring",
  stiffness: 400,
  damping: 10,
}

export const smoothConfig = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.6,
}