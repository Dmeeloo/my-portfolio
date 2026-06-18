'use client'

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Database } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionEyebrow } from "@/components/ui/section-eyebrow"
import { FaJava } from "react-icons/fa"
import {
  SiClaude,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiSpringboot,
  SiPython,
  SiGit,
} from "react-icons/si"

const skills = [
  { icon: SiClaude, name: "Claude Code", groupKey: "highlight" },
  { icon: SiReact, name: "React", groupKey: "highlight" },
  { icon: SiNodedotjs, name: "Node.js", groupKey: "highlight" },
  { icon: SiPython, name: "Python", groupKey: "highlight" },
  { icon: Database, name: "Oracle SQL", groupKey: "highlight" },
  { icon: SiNextdotjs, name: "Next.js", groupKey: "frontend" },
  { icon: SiReact, name: "React Native", groupKey: "frontend" },
  { icon: SiTypescript, name: "TypeScript", groupKey: "frontend" },
  { icon: SiTailwindcss, name: "Tailwind CSS", groupKey: "frontend" },
  { icon: SiNestjs, name: "NestJS", groupKey: "backend" },
  { icon: FaJava, name: "Java", groupKey: "backend" },
  { icon: SiSpringboot, name: "Spring Boot", groupKey: "backend" },
  { icon: SiGit, name: "Git", groupKey: "tools" },
]

export function Skills() {
  const t = useTranslations("skills")
  const { ref, entry } = useScrollReveal()

  return (
    <section
      id="habilidades"
      ref={ref}
      className="py-28 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow {...entry(0)} label={t.raw("eyebrow")} className="mb-6" />

        <motion.h2
          {...entry(0.08)}
          className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 max-w-2xl mb-4"
        >
          {t.raw("headingPrefix")}
          <span className="text-primary">{t.raw("headingAccent")}</span>
        </motion.h2>

        <motion.p
          {...entry(0.16)}
          className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl mb-14"
        >
          {t.raw("paragraph")}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(({ icon: Icon, name, groupKey }, i) => (
            <motion.div
              key={name}
              {...entry(0.2 + i * 0.05)}
              className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-50">{name}</div>
                <div className="text-xs text-zinc-500">{t.raw(`groups.${groupKey}`)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
