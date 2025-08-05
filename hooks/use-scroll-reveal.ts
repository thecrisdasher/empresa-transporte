"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface UseScrollRevealOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px 0px -100px 0px"
  } = options

  const ref = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const isInView = useInView(ref, {
    threshold,
    rootMargin,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const shouldAnimate = triggerOnce ? hasAnimated : isInView

  return {
    ref,
    isInView: shouldAnimate,
    hasAnimated
  }
}

export function useStaggeredReveal(itemCount: number, delayBetween: number = 0.1) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { ref, isInView } = useScrollReveal()

  useEffect(() => {
    if (isInView && visibleItems.length === 0) {
      const timeouts: NodeJS.Timeout[] = []
      
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => [...prev, i])
        }, i * delayBetween * 1000)
        
        timeouts.push(timeout)
      }

      return () => {
        timeouts.forEach(clearTimeout)
      }
    }
  }, [isInView, itemCount, delayBetween, visibleItems.length])

  return {
    ref,
    visibleItems,
    isItemVisible: (index: number) => visibleItems.includes(index)
  }
}