import { useEffect, useState, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)

    // Smooth mouse tracking for interactive gradients
    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)
    const springConfig = { damping: 30, stiffness: 100 }
    const smoothMouseX = useSpring(mouseX, springConfig)
    const smoothMouseY = useSpring(mouseY, springConfig)

    // Move useTransform hooks to top level to avoid conditional hook calls
    const cursorX = useTransform(smoothMouseX, [0, 1], [-600, typeof window !== 'undefined' ? window.innerWidth - 600 : 600])
    const cursorY = useTransform(smoothMouseY, [0, 1], [-600, typeof window !== 'undefined' ? window.innerHeight - 600 : 600])

    useEffect(() => {
        setMounted(true)

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth
            const y = e.clientY / window.innerHeight
            mouseX.set(x)
            mouseY.set(y)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    // Static premium orb configurations - no pulsing or animations
    const orbs = useMemo(() => [
        // Primary blue orb - top left
        { id: 1, x: 8, y: 12, size: 700, color: 'rgba(74, 158, 255, 0.12)', blur: 180 },
        // Teal accent - top right
        { id: 2, x: 88, y: 8, size: 550, color: 'rgba(79, 255, 237, 0.06)', blur: 160 },
        // Deep violet - center-right
        { id: 3, x: 72, y: 50, size: 800, color: 'rgba(168, 85, 247, 0.04)', blur: 200 },
        // Subtle blue - bottom-left
        { id: 4, x: 18, y: 75, size: 600, color: 'rgba(74, 158, 255, 0.07)', blur: 170 },
        // Central subtle - crystalline core
        { id: 5, x: 48, y: 38, size: 900, color: 'rgba(250, 250, 250, 0.02)', blur: 220 },
        // Secondary blue - bottom right
        { id: 6, x: 82, y: 85, size: 500, color: 'rgba(74, 158, 255, 0.08)', blur: 150 },
    ], [])

    return (
        <div className="animated-background" aria-hidden="true">
            {/* Ultra-deep obsidian foundation */}
            <div className="absolute inset-0 bg-[#030303]" />

            {/* Static layered mesh gradient */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: `
                        radial-gradient(ellipse 120% 60% at 0% 0%, rgba(74, 158, 255, 0.05) 0%, transparent 50%),
                        radial-gradient(ellipse 100% 80% at 100% 0%, rgba(79, 255, 237, 0.03) 0%, transparent 50%),
                        radial-gradient(ellipse 80% 60% at 100% 100%, rgba(168, 85, 247, 0.02) 0%, transparent 50%),
                        radial-gradient(ellipse 100% 70% at 0% 100%, rgba(74, 158, 255, 0.03) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Premium film grain texture - subtle */}
            <div
                className="absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Interactive cursor-following gradient (subtle) */}
            {mounted && (
                <motion.div
                    className="absolute w-[1200px] h-[1200px] pointer-events-none opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(74, 158, 255, 0.05) 0%, transparent 50%)',
                        filter: 'blur(100px)',
                        x: cursorX,
                        y: cursorY,
                    }}
                />
            )}

            {/* Static orbs - no animation */}
            {mounted && orbs.map((orb) => (
                <div
                    key={orb.id}
                    className="absolute rounded-full"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
                        filter: `blur(${orb.blur}px)`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}

            {/* Static top gradient */}
            <div
                className="absolute top-0 left-0 right-0 h-[600px]"
                style={{
                    background: `linear-gradient(
                        180deg,
                        rgba(79, 255, 237, 0.02) 0%,
                        rgba(168, 85, 247, 0.015) 25%,
                        rgba(74, 158, 255, 0.01) 50%,
                        transparent 100%
                    )`,
                    opacity: 0.6,
                }}
            />

            {/* Subtle architectural grid - barely visible */}
            <div
                className="absolute inset-0 opacity-[0.006]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(250, 250, 250, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(250, 250, 250, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '150px 150px',
                }}
            />

            {/* Central radial glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(74, 158, 255, 0.015) 0%, transparent 60%)',
                }}
            />

            {/* Corner accent glows */}
            <div
                className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20"
                style={{
                    background: 'radial-gradient(circle at 100% 0%, rgba(79, 255, 237, 0.015) 0%, transparent 45%)',
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-20"
                style={{
                    background: 'radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.015) 0%, transparent 45%)',
                }}
            />
            <div
                className="absolute top-0 left-0 w-[600px] h-[600px] opacity-15"
                style={{
                    background: 'radial-gradient(circle at 0% 0%, rgba(74, 158, 255, 0.02) 0%, transparent 50%)',
                }}
            />

            {/* Premium cinematic vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 90% 80% at 50% 45%, transparent 30%, rgba(3, 3, 3, 0.75) 100%)',
                }}
            />

            {/* Smooth bottom fade for content integration */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
        </div>
    )
}
