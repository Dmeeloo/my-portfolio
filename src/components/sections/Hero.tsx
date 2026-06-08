'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { useLocale } from "next-intl"

export function Hero() {
    const t = useTranslations()
    const locale = useLocale()

    const cvUrl = locale === 'pt' ? '/cv_gabriel_meurer_v2.pdf' : '/cv_gabriel_meurer_en.pdf'

    return (
        <section id="hero" className="py-24 text-center relative z-10">
            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="relative w-44 h-44 rounded-full overflow-hidden ring-2 ring-ring/20 shadow-2xl">
                    <Image
                        src="/1780517494101-082_1hjprH-EVReulWlHPDUR8ptQN7cQYsxFB.jpg"
                        alt="Gabriel de Melo Meurer"
                        fill
                        className="object-cover object-[center_15%]"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h1 className="text-5xl font-bold text-foreground">{t('name')}</h1>
                    <h2 className="text-2xl font-semibold text-muted-foreground">{t('position')}</h2>
                </div>

                <p className="text-xl text-muted-foreground max-w-2xl">{t('description')}</p>
                <a href={cvUrl} target="_blank">
                    <Button>{t('donwCv')}</Button>
                </a>
            </motion.div>
        </section>
    )
}