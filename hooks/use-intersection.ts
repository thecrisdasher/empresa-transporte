"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersection<T extends Element>(
  options: UseIntersectionOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true
  } = options

  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, hasIntersected])

  return {
    ref,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
    hasIntersected
  }
}

export function useProgressiveLoad<T extends Element>(delay: number = 0) {
  const { ref, isIntersecting } = useIntersection<T>()
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (isIntersecting && !shouldLoad) {
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isIntersecting, shouldLoad, delay])

  return { ref, shouldLoad, isIntersecting }
}