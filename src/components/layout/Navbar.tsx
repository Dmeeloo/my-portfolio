'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
    
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const locale = useLocale()
    const path = usePathname()
    const router = useRouter()

    function toggleLocale(){
        const nextLocale = locale === 'pt' ? 'en' : 'pt'
        window.location.href = `/${nextLocale}`
    }

    useEffect(() => {
        setMounted(true);
    }, [])
    
    function toggleTheme(){
        if( theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div className="relative">
            <nav className="flex items-center gap-6 justify-center px-6 md:px-12 py-4 bg-white dark:bg-gray-950">
                <div className="text-lg font-bold">Gabriel de Melo Meurer</div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
                    <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                        href="#sobre">Sobre</Link>
                    <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                        href="#formacao">Formação</Link>    
                    <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                        href="#experiencias">Experiências</Link>
                    <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                        href="#projetos">Projetos</Link>
                </div>
                <div className="ml-auto flex items-center gap-2 ">
                    <Button variant="ghost" size="sm" onClick={toggleLocale}>{locale.toUpperCase()}</Button>   
                    <Button onClick={() => setOpenMenu(!openMenu)} className="md:hidden p-2">
                        {openMenu ? <X/> : <Menu/>}
                    </Button>
                    <div className="hidden md:flex">
                        <Button size="icon" onClick={toggleTheme}>{mounted ? (theme === 'dark' ? <Sun/> : <Moon/>) : null}</Button>
                        <a href="https://www.linkedin.com/in/gabrielmeurer/" target="_blank">
                            <Button size="icon">
                                <FaLinkedin />
                            </Button>
                        </a>
                        <a href="https://www.instagram.com/dmeeloo/" target="_blank">
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
                            className="md:hidden flex flex-col bg-white dark:bg-gray-950 px-6 py-4 gap-4 absolute top-full left-0 w-full z-50"
                        >
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#sobre">Sobre</Link>
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#formacao">Formação</Link>    
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#experiencias">Experiências</Link>
                            <Link className="text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                href="#projetos">Projetos</Link>
                            <div className="flex gap-2 pt-2 border-t border-gray-200 
                            dark:border-gray-800">
                                <Button size="icon" onClick={toggleTheme}>{mounted ? (theme === 'dark' ? <Sun/> :
                                    <Moon/>) : null}</Button>
                                <a href="https://www.linkedin.com/in/gabrielmeurer/" target="_blank">
                                    <Button size="icon"><FaLinkedin /></Button>
                                </a>
                                <a href="https://www.instagram.com/dmeeloo/" target="_blank">
                                    <Button size="icon"><FaInstagram /></Button>
                                </a>
                            </div>

                        </motion.div>
                )}
            </AnimatePresence>
        </div>  
    )
  }