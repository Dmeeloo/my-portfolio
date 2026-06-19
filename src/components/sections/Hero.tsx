'use client'

import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale() as keyof typeof siteConfig.cv
  const reduce = useReducedMotion()

  const cvUrl = siteConfig.cv[locale] ?? siteConfig.cv.pt

  const entry = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.6,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl text-center">
        <motion.div {...entry(0)} className="flex justify-center mb-6">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-xl">
            <Image
              src={siteConfig.photo}
              alt={siteConfig.name}
              fill
              unoptimized
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
        </motion.div>

        <motion.p {...entry(0.08)} className="font-mono text-sm text-primary mb-5">
          {t.raw("greeting")}
        </motion.p>

        <motion.h1
          {...entry(0.16)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-zinc-900 dark:text-zinc-50 mb-4"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.h2
          {...entry(0.22)}
          className="text-2xl md:text-3xl font-semibold text-primary mb-6"
        >
          {t.raw("role")}
        </motion.h2>

        <motion.p
          {...entry(0.28)}
          className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-10"
        >
          {t.raw("description")}
        </motion.p>

        <motion.div {...entry(0.36)} className="flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: reduce ? 1 : 1.04 }} whileTap={{ scale: reduce ? 1 : 0.97 }}>
            <Link
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-3 font-medium hover:bg-primary/80 transition-colors duration-300"
            >
              {t.raw("ctaProjects")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: reduce ? 1 : 1.04 }} whileTap={{ scale: reduce ? 1 : 0.97 }}>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-6 py-3 font-medium hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              {t.raw("ctaContact")}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: reduce ? 1 : 1.04 }} whileTap={{ scale: reduce ? 1 : 0.97 }}>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              {t.raw("ctaCv")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
