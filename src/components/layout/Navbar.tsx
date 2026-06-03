'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

export function Navbar() {

    const { theme, setTheme } = useTheme()
    
    function toggleTheme(){
        if( theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <nav className="relative flex items-center px-86 py-4 bg-white dark:bg-gray-950">
            <div>Gabriel de Melo Meurer</div>
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
                <Link className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    href="#sobre">Sobre</Link>
                <Link className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    href="#formacao">Formação</Link>
                <Link className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    href="#experiencias">Experiências</Link>
                <Link className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    href="#projetos">Projetos</Link>
            </div>
            <div className="ml-auto">
                <Button variant="ghost" size="sm">PT</Button>
                <Button size="icon" onClick={toggleTheme}>{theme === 'dark' ? <Sun/> : <Moon/>}</Button>
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
        </nav>
    )
  }