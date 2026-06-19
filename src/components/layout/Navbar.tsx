'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import { Sun, Moon, Menu, X } from "lucide-react"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { setLocale } from "@/i18n/actions"
import { siteConfig } from "@/lib/site-config"

export function Navbar() {

    const t = useTranslations("nav");
    const locale = useLocale();
    const router = useRouter();
    const otherLocale = locale === "pt" ? "en" : "pt";

    const [ openMenu, setOpenMenu ] = useState(false);
    const [ mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    function toggleTheme(){
        if( resolvedTheme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    async function handleLocaleChange(){
        await setLocale(otherLocale)
        router.refresh()
    }

    return (
        <div className="relative">
            <nav className="flex items-center gap-6 justify-center px-6 md:px-12 py-4">
                <div className="flex items-center gap-2 text-lg font-bold">
                    {mounted && (
                        <Image
                            src={resolvedTheme === 'dark' ? siteConfig.logo.dark : siteConfig.logo.light}
                            alt={siteConfig.name}
                            width={28}
                            height={28}
                            className="shrink-0"
                        />
                    )}
                    {siteConfig.name}
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
                    <Link className="relative text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        href="#sobre">{t.raw("about")}</Link>
                    <Link className="relative text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        href="#experiencia">{t.raw("experience")}</Link>
                    <Link className="relative text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        href="#habilidades">{t.raw("skills")}</Link>
                    <Link className="relative text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        href="#projetos">{t.raw("projects")}</Link>
                    <Link className="relative text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        href="#contato">{t.raw("contact")}</Link>
                </div>
                   <div className="ml-auto flex items-center gap-2 ">
                    <Button variant="ghost" size="sm" onClick={handleLocaleChange} title={`Switch to ${otherLocale.toUpperCase()}`}>{otherLocale.toUpperCase()}</Button>
                    <Button onClick={() => setOpenMenu(!openMenu)} className="md:hidden p-2">
                        {openMenu ? <X/> : <Menu/>}
                    </Button>
                    <div className="hidden md:flex">
                        <Button size="icon" onClick={toggleTheme}>
                            <AnimatePresence mode="wait" initial={false}>
                                {mounted && (
                                    <motion.span
                                        key={resolvedTheme}
                                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                        className="inline-flex"
                                    >
                                        {resolvedTheme === 'dark' ? <Sun/> : <Moon/>}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Button>
                        <a href={siteConfig.social.linkedin} target="_blank" className="inline-flex transition-transform duration-200 hover:-translate-y-0.5">
                            <Button size="icon">
                                <FaLinkedin />
                            </Button>
                        </a>
                        <a href={siteConfig.social.instagram} target="_blank" className="inline-flex transition-transform duration-200 hover:-translate-y-0.5">
                            <Button size="icon">
                                <FaInstagram />
                            </Button>
                        </a>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {openMenu && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden flex flex-col bg-background px-6 py-4 gap-4 absolute top-full left-0 w-full z-50"
                        >
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#sobre">{t.raw("about")}</Link>
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#experiencia">{t.raw("experience")}</Link>
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#habilidades">{t.raw("skills")}</Link>
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#projetos">{t.raw("projects")}</Link>
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#contato">{t.raw("contact")}</Link>
                            <div className="flex gap-2 pt-2 border-t border-gray-200
                            dark:border-gray-800">
                                <Button size="icon" onClick={toggleTheme}>
                                    <AnimatePresence mode="wait" initial={false}>
                                        {mounted && (
                                            <motion.span
                                                key={resolvedTheme}
                                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                                transition={{ duration: 0.25 }}
                                                className="inline-flex"
                                            >
                                                {resolvedTheme === 'dark' ? <Sun/> : <Moon/>}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                                <a href={siteConfig.social.linkedin} target="_blank" className="inline-flex transition-transform duration-200 hover:-translate-y-0.5">
                                    <Button size="icon"><FaLinkedin /></Button>
                                </a>
                                <a href={siteConfig.social.instagram} target="_blank" className="inline-flex transition-transform duration-200 hover:-translate-y-0.5">
                                    <Button size="icon"><FaInstagram /></Button>
                                </a>
                            </div>

                        </motion.div>
                )}
            </AnimatePresence>
        </div>  
    )
  }