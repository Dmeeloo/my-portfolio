'use client'

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionEyebrow } from "@/components/ui/section-eyebrow"
import { siteConfig } from "@/lib/site-config"

const EMAIL = siteConfig.email

const socials = [
  { icon: FaGithub, label: "GitHub", href: siteConfig.social.github },
  { icon: FaLinkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: FaInstagram, label: "Instagram", href: siteConfig.social.instagram },
]

export function Contact() {
  const t = useTranslations("contact")
  const { ref, reduce, entry } = useScrollReveal({ amount: 0.2 })

  return (
    <section
      id="contato"
      ref={ref}
      className="py-28 px-6 md:px-12 bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionEyebrow {...entry(0)} label={t.raw("eyebrow")} center className="mb-6" />

        <motion.h2
          {...entry(0.08)}
          className="text-4xl md:text-6xl font-bold leading-tight text-zinc-50 mb-6"
        >
          {t.raw("headingPrefix")}
          <span className="text-primary">{t.raw("headingAccent")}</span>
        </motion.h2>

        <motion.p
          {...entry(0.16)}
          className="text-lg leading-relaxed text-zinc-400 max-w-lg mx-auto mb-12"
        >
          {t.raw("paragraph")}
        </motion.p>

        <motion.a
          {...entry(0.24)}
          whileHover={{ scale: reduce ? 1 : 1.03 }}
          whileTap={{ scale: reduce ? 1 : 0.98 }}
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#0d0d10] px-6 py-4 font-mono text-sm sm:text-base mb-12 hover:border-primary transition-colors duration-300"
        >
          <span className="text-zinc-500">$</span>
          <span className="text-emerald-400">{t.raw("commandVerb")}</span>
          <span className="text-zinc-500">{t.raw("commandFlag")}</span>
          <span className="text-zinc-200">{EMAIL}</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </motion.a>

        <motion.div {...entry(0.32)} className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-3 rounded-lg border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            aria-label={t.raw("emailAria")}
            className="p-3 rounded-lg border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
