'use client'

import { motion, type MotionProps } from "framer-motion"

type SectionEyebrowProps = MotionProps & {
  label: string
  center?: boolean
  className?: string
}

export function SectionEyebrow({ label, center = false, className, ...motionProps }: SectionEyebrowProps) {
  return (
    <motion.div
      {...motionProps}
      className={`flex items-center gap-3 ${center ? "justify-center" : ""} ${className ?? ""}`}
    >
      <span className="block w-10 h-px bg-primary" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
        {label}
      </span>
      {center && <span className="block w-10 h-px bg-primary" />}
    </motion.div>
  )
}
