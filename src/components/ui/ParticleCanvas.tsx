'use client'

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const color = resolvedTheme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)'

        const particles = Array.from({ length: 150 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
        }))

        let animId: number
        function animate() {
            animId = requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(p => {
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                ctx.fillStyle = color
                ctx.beginPath()
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
                ctx.fill()
            })
        }
        animate()

        function onResize() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        window.addEventListener('resize', onResize)

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', onResize)
        }
    }, [resolvedTheme])

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
