'use client'

import { useEffect, useRef } from "react";

export function ParticleCanvas() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const particles = []

        for(let i = 0; i < 100; i++){
            particles.push({ x:Math.random() * canvas.width, y:Math.random() * canvas.height, radius: 2, vx:Math.random() * 2 - 1, vy:Math.random() * 2 - 1 })
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'white'
            particles.forEach(particle => {
                if (particle.x > canvas.width){
                    particle.vx *= -1
                } if (particle.x < 0){
                    particle.vx *= -1
                }
                if (particle.y > canvas.height){
                    particle.vy *= -1
                } if (particle.y < 0){
                    particle.vy *= -1
                }
                particle.x += particle.vx
                particle.y += particle.vy
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fill()
            })
            requestAnimationFrame(animate)
        }
        animate()
        console.log('componente montou')
    }, [])

    return(
        <canvas ref={canvasRef} className='fixed inset-0 z-0'/>
    )
}