'use client'

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Briefcase, Code2, Rocket } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionEyebrow } from "@/components/ui/section-eyebrow"

const statIcons = [Briefcase, Rocket, Code2]

type CodeToken = { t: string; c: string }
type StatItem = { value: string; label: string }

export function About() {
  const t = useTranslations("about")
  const codeLines = t.raw("code") as CodeToken[][]
  const stats = t.raw("stats") as StatItem[]

  const { ref, isInView, reduce, entry } = useScrollReveal({ amount: 0.1, distance: 28, duration: 0.55 })

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-16 sm:py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow {...entry(0)} label={t.raw("eyebrow")} className="mb-14" />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div className="space-y-6">
            <motion.h2
              {...entry(0.1)}
              className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50"
            >
              {t.raw("headingPrefix")}
              <span className="text-primary">{t.raw("headingAccent")}</span>
            </motion.h2>

            <motion.p {...entry(0.2)} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.raw("paragraph1")}
            </motion.p>

            <motion.p {...entry(0.28)} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.raw("paragraph2")}
            </motion.p>

            <motion.p {...entry(0.36)} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.raw("paragraph3")}
            </motion.p>

            <motion.p {...entry(0.44)} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.raw("paragraph4")}
            </motion.p>
          </div>

          {/* Code card */}
          <motion.div {...entry(0.18)}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-[#0d0d10]">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-[11px] text-zinc-500 font-mono tracking-wide">
                    {t.raw("fileName")}
                  </span>
                </div>
                <div className="px-5 py-5 font-mono text-[13px] leading-7">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: reduce ? 0 : -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reduce ? 0 : -8 }}
                      transition={{
                        duration: reduce ? 0 : 0.28,
                        delay: reduce ? 0 : 0.3 + i * 0.05,
                      }}
                    >
                      {line.map(({ t: text, c }, j) => (
                        <span key={j} className={c}>{text}</span>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-5">
          {stats.map(({ value, label }, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={label}
                {...entry(0.3 + i * 0.1)}
                className="flex items-center gap-4 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-primary transition-colors duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{value}</div>
                  <div className="text-sm text-zinc-500">{label}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
