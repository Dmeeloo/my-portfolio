'use client'

import { motion } from "framer-motion"

export function Hero() {
    return (
        <section>
            <motion.div initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5 }}>
                <h1>Gabriel de Melo Meurer</h1>
                <h2>Desenvolvedor Full-Stack</h2>
                <p>Desenvolvedor Full Stack com 2 anos de experiência, trabalhando
                com React, Next.js, OracleDB, JavaScript, Python</p>
            </motion.div>
        </section>
    )
}