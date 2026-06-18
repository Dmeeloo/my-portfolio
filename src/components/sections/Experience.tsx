'use client'

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionEyebrow } from "@/components/ui/section-eyebrow"

type RoleItem = {
  company: string
  role: string
  progression?: string
  meta: string
  period: string
  current: boolean
  description: string
  tags: string[]
}

export function Experience() {
  const t = useTranslations("experience")
  const roles = t.raw("roles") as RoleItem[]

  const { ref, reduce, entry } = useScrollReveal({ amount: 0.08 })

  return (
    <section
      id="experiencia"
      ref={ref}
      className="py-28 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow {...entry(0)} label={t.raw("eyebrow")} className="mb-6" />

        <motion.h2
          {...entry(0.08)}
          className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 max-w-xl mb-16"
        >
          {t.raw("headingPrefix")}
          <span className="text-primary">{t.raw("headingAccent")}</span>
        </motion.h2>

        <div className="relative">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-14">
            {roles.map((item, i) => (
              <motion.div key={item.company + item.role} {...entry(0.16 + i * 0.12)} className="relative pl-10">
                {item.current && (
                  <motion.span
                    className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-primary/40"
                    animate={reduce ? undefined : { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <span
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    item.current
                      ? "bg-primary border-primary"
                      : "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700"
                  }`}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {item.role} <span className="text-primary">· {item.company}</span>
                  </h3>
                  <span className="text-sm font-mono text-zinc-500">{item.period}</span>
                </div>

                <p className="text-sm text-zinc-500 mb-3">{item.meta}</p>

                {item.progression && (
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-3">
                    {item.progression}
                  </p>
                )}

                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
