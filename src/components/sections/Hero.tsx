'use client'

import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="py-24 text-center bg-gray-950">
            <motion.div initial={{ opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 1 }}>
                <div className="flex item-center gap-100 justify-center">
                    <h1 className="text-5xl font-bold text-white">Gabriel de Melo Meurer</h1>
                    <h2 className="text-5xl font-bold text-white">Engenheiro de Software</h2>
                </div>   
                <p className="text-2xl text-gray-200">Engenheiro de Software com 2 anos de experiência, trabalhando
                com React, Next.js, OracleDB, JavaScript, Python</p>
            </motion.div>
        </section>
    )
}