"use client"

import { motion, Variants } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { fadeInUp } from "@/lib/animations"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  threshold?: number
  triggerOnce?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal({
    threshold,
    triggerOnce,
  })

  // Add delay to the variants if specified
  const delayedVariants = delay > 0 ? {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any)?.transition,
        delay,
      },
    },
  } : variants

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={delayedVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredRevealProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  threshold?: number
}

export function StaggeredReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggeredRevealProps) {
  const { ref, isInView } = useScrollReveal({ threshold })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}