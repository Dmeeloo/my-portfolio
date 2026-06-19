'use client'

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Truck, Lock, Palette } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionEyebrow } from "@/components/ui/section-eyebrow"

const projectIcons: Record<string, typeof Truck> = {
  FrotaON: Truck,
}

type ProjectImage = { src: string; alt: string }

type ProjectItem = {
  name: string
  context: string
  description: string
  branding?: string
  tags: string[]
  images?: ProjectImage[]
  webImages?: ProjectImage[]
}

function ImageStack({
  images,
  ratio,
  maxWidth,
  sizes,
}: {
  images: ProjectImage[]
  ratio: string
  maxWidth: number
  sizes: string
}) {
  const [frontIndex, setFrontIndex] = useState(0)
  const offset = 8

  return (
    <div
      className="relative w-full"
      style={{ maxWidth: `${maxWidth}px`, aspectRatio: ratio }}
    >
      {images.map((image, idx) => {
        const isFront = idx === frontIndex
        return (
          <motion.button
            key={image.src}
            type="button"
            onClick={() =>
              setFrontIndex(isFront ? (idx + 1) % images.length : idx)
            }
            className="absolute rounded-xl overflow-hidden border border-zinc-800 shadow-xl cursor-pointer"
            style={{ width: `${100 - offset}%`, height: `${100 - offset}%`, zIndex: isFront ? 2 : 1 }}
            animate={{
              left: isFront ? `${offset}%` : "0%",
              top: isFront ? `${offset}%` : "0%",
              rotate: isFront ? -3 : 4,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes={sizes} />
          </motion.button>
        )
      })}
    </div>
  )
}

export function Projects() {
  const t = useTranslations("projects")
  const items = t.raw("items") as ProjectItem[]
  const internalBadge = t.raw("internalBadge") as string

  const { ref, entry } = useScrollReveal()

  return (
    <section
      id="projetos"
      ref={ref}
      className="py-28 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <SectionEyebrow {...entry(0)} label={t.raw("eyebrow")} className="mb-6" />

        <motion.h2
          {...entry(0.08)}
          className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 max-w-xl mb-4"
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

        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = projectIcons[item.name] ?? Truck
            return (
              <motion.div
                key={item.name}
                {...entry(0.24 + i * 0.1)}
                className="p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-primary transition-colors duration-300"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{item.name}</h3>
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                          <Lock className="w-3 h-3" />
                          {internalBadge}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500">{item.context}</p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                    {item.description}
                  </p>

                  {item.branding && (
                    <p className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                      <Palette className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item.branding}
                    </p>
                  )}

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

                  {((item.images && item.images.length > 0) || (item.webImages && item.webImages.length > 0)) && (
                    <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                      {item.images && item.images.length > 0 && (
                        <ImageStack images={item.images} ratio="160/356" maxWidth={160} sizes="160px" />
                      )}
                      {item.webImages && item.webImages.length > 0 && (
                        <ImageStack
                          images={item.webImages}
                          ratio="460/220"
                          maxWidth={460}
                          sizes="(min-width: 640px) 460px, 90vw"
                        />
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
