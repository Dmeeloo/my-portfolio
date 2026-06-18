import { useRef } from "react"
import { useInView, useReducedMotion } from "framer-motion"

type ScrollRevealOptions = {
  amount?: number
  distance?: number
  duration?: number
}

export function useScrollReveal({ amount = 0.15, distance = 24, duration = 0.5 }: ScrollRevealOptions = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })
  const reduce = useReducedMotion()

  const entry = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : distance },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : distance },
    transition: {
      duration: reduce ? 0 : duration,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return { ref, isInView, reduce, entry }
}
