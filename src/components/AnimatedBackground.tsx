import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface FloatingOrb {
    id: number
    x: number
    y: number
    size: number
    color: string
    blur: number
    duration: number
    delay: number
}

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Premium orb configurations - soft, organic, luxury colors
    const orbs = useMemo<FloatingOrb[]>(() => [
        { id: 1, x: 15, y: 20, size: 400, color: 'rgba(201, 168, 108, 0.12)', blur: 120, duration: 25, delay: 0 },
        { id: 2, x: 70, y: 15, size: 350, color: 'rgba(196, 168, 152, 0.10)', blur: 100, duration: 30, delay: 3 },
        { id: 3, x: 80, y: 60, size: 450, color: 'rgba(156, 165, 174, 0.08)', blur: 140, duration: 28, delay: 1 },
        { id: 4, x: 25, y: 70, size: 380, color: 'rgba(212, 196, 168, 0.10)', blur: 110, duration: 32, delay: 5 },
        { id: 5, x: 50, y: 40, size: 500, color: 'rgba(248, 246, 244, 0.04)', blur: 150, duration: 35, delay: 2 },
    ], [])

    return (
        <div className="animated-background" aria-hidden="true">
            {/* Deep charcoal foundation */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            {/* Subtle grain texture for depth */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Premium Mesh Gradient Background - Organic Flowing Orbs */}
            {mounted && orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className="absolute rounded-full"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        filter: `blur(${orb.blur}px)`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        x: [0, 30, -20, 15, 0],
                        y: [0, -25, 20, -15, 0],
                        scale: [1, 1.1, 0.95, 1.05, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: orb.delay,
                    }}
                />
            ))}

            {/* Elegant Aurora Streak - Top */}
            <div
                className="absolute top-0 left-0 right-0 h-[600px] opacity-40"
                style={{
                    background: 'linear-gradient(180deg, rgba(201, 168, 108, 0.03) 0%, transparent 100%)',
                }}
            />

            {/* Premium Light Beam - Diagonal */}
            {mounted && (
                <motion.div
                    className="absolute -top-1/4 left-1/4 w-[800px] h-[1200px] opacity-[0.03]"
                    style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(248, 246, 244, 0.15) 50%, transparent 100%)',
                        transform: 'rotate(-15deg)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        opacity: [0.02, 0.04, 0.02],
                        x: [-50, 50, -50],
                    }}
                    transition={{
                        duration: 20,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Refined Grid Pattern - Architectural Elegance */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(248, 246, 244, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(248, 246, 244, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                }}
            />

            {/* Floating Luxury Particles */}
            {mounted && [...Array(20)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: 2 + Math.random() * 3,
                        height: 2 + Math.random() * 3,
                        left: `${Math.random() * 100}%`,
                        top: `${60 + Math.random() * 50}%`,
                        background: i % 3 === 0
                            ? 'rgba(201, 168, 108, 0.4)'
                            : i % 3 === 1
                                ? 'rgba(248, 246, 244, 0.3)'
                                : 'rgba(196, 168, 152, 0.35)',
                    }}
                    animate={{
                        y: [0, -600],
                        opacity: [0, 0.6, 0.4, 0],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        ease: "linear",
                        repeat: Infinity,
                        delay: i * 1.2,
                    }}
                />
            ))}

            {/* Premium Radial Glow from Center */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201, 168, 108, 0.02) 0%, transparent 70%)',
                }}
            />

            {/* Soft Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(10, 10, 10, 0.6) 100%)',
                }}
            />

            {/* Bottom Fade for Content Integration */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
    )
}
