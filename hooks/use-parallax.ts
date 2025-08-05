"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, MotionValue } from "framer-motion"

interface UseParallaxOptions {
  speed?: number
  direction?: "up" | "down"
  offset?: number[]
}

export function useParallax(options: UseParallaxOptions = {}) {
  const {
    speed = 0.5,
    direction = "up",
    offset = ["start end", "end start"]
  } = options

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [0, -speed * 100] : [0, speed * 100]
  )

  return { ref, y }
}

export function useMouseParallax(strength: number = 0.1) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      setMousePosition({ x: deltaX, y: deltaY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [strength])

  return { ref, mousePosition }
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return scrollDirection
}