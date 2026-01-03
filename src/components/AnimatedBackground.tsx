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

    // Ultra-premium orb configurations with iridescent colors
    const orbs = useMemo<FloatingOrb[]>(() => [
        // Primary champagne gold orb - top left
        { id: 1, x: 10, y: 15, size: 500, color: 'rgba(201, 168, 108, 0.12)', blur: 140, duration: 28, delay: 0 },
        // Aurora teal orb - top right
        { id: 2, x: 85, y: 10, size: 400, color: 'rgba(79, 255, 237, 0.06)', blur: 120, duration: 32, delay: 2 },
        // Holographic violet orb - center right
        { id: 3, x: 75, y: 55, size: 550, color: 'rgba(168, 85, 247, 0.05)', blur: 160, duration: 35, delay: 4 },
        // Rose platinum orb - bottom left
        { id: 4, x: 20, y: 70, size: 450, color: 'rgba(212, 180, 164, 0.08)', blur: 130, duration: 30, delay: 1 },
        // Crystalline center orb
        { id: 5, x: 50, y: 40, size: 600, color: 'rgba(250, 250, 250, 0.03)', blur: 180, duration: 40, delay: 3 },
        // Prism pink accent - top center
        { id: 6, x: 45, y: 5, size: 350, color: 'rgba(244, 114, 182, 0.04)', blur: 100, duration: 25, delay: 5 },
    ], [])

    return (
        <div className="animated-background" aria-hidden="true">
            {/* Deep obsidian foundation */}
            <div className="absolute inset-0 bg-[#050505]" />

            {/* Premium subtle grain texture */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Holographic Mesh Gradient Background - Ultra-Premium Orbs */}
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
                        x: [0, 40, -30, 25, 0],
                        y: [0, -35, 25, -20, 0],
                        scale: [1, 1.15, 0.92, 1.08, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: orb.delay,
                    }}
                />
            ))}

            {/* Aurora Borealis Effect - Top */}
            {mounted && (
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[800px]"
                    style={{
                        background: `linear-gradient(
                            180deg,
                            rgba(79, 255, 237, 0.03) 0%,
                            rgba(168, 85, 247, 0.02) 30%,
                            rgba(201, 168, 108, 0.02) 60%,
                            transparent 100%
                        )`,
                    }}
                    animate={{
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Premium Holographic Light Beam */}
            {mounted && (
                <motion.div
                    className="absolute -top-1/4 left-1/3 w-[1000px] h-[1400px] opacity-[0.025]"
                    style={{
                        background: `linear-gradient(
                            135deg,
                            transparent 0%,
                            rgba(79, 255, 237, 0.2) 30%,
                            rgba(168, 85, 247, 0.15) 50%,
                            rgba(244, 114, 182, 0.1) 70%,
                            transparent 100%
                        )`,
                        transform: 'rotate(-20deg)',
                        filter: 'blur(80px)',
                    }}
                    animate={{
                        opacity: [0.02, 0.04, 0.02],
                        x: [-80, 80, -80],
                    }}
                    transition={{
                        duration: 25,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Second Holographic Beam - Counter Direction */}
            {mounted && (
                <motion.div
                    className="absolute top-1/4 -right-1/4 w-[800px] h-[1200px] opacity-[0.02]"
                    style={{
                        background: `linear-gradient(
                            -135deg,
                            transparent 0%,
                            rgba(201, 168, 108, 0.15) 40%,
                            rgba(250, 250, 250, 0.1) 60%,
                            transparent 100%
                        )`,
                        transform: 'rotate(15deg)',
                        filter: 'blur(70px)',
                    }}
                    animate={{
                        opacity: [0.015, 0.03, 0.015],
                        x: [60, -60, 60],
                    }}
                    transition={{
                        duration: 20,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 5,
                    }}
                />
            )}

            {/* Refined Architectural Grid */}
            <div
                className="absolute inset-0 opacity-[0.012]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(250, 250, 250, 0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(250, 250, 250, 0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: '120px 120px',
                }}
            />

            {/* Premium Floating Particles - Multi-Color */}
            {mounted && [...Array(30)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: 1.5 + Math.random() * 2.5,
                        height: 1.5 + Math.random() * 2.5,
                        left: `${Math.random() * 100}%`,
                        top: `${70 + Math.random() * 40}%`,
                        background: i % 4 === 0
                            ? 'rgba(79, 255, 237, 0.5)'    // Aurora teal
                            : i % 4 === 1
                                ? 'rgba(201, 168, 108, 0.5)'  // Gold
                                : i % 4 === 2
                                    ? 'rgba(168, 85, 247, 0.4)'   // Violet
                                    : 'rgba(250, 250, 250, 0.4)', // White
                    }}
                    animate={{
                        y: [0, -700],
                        opacity: [0, 0.7, 0.5, 0],
                    }}
                    transition={{
                        duration: 12 + Math.random() * 8,
                        ease: "linear",
                        repeat: Infinity,
                        delay: i * 0.8,
                    }}
                />
            ))}

            {/* Premium Radial Glow from Center */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(201, 168, 108, 0.025) 0%, transparent 70%)',
                }}
            />

            {/* Holographic Corner Accents */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
                style={{
                    background: 'radial-gradient(circle at 100% 0%, rgba(79, 255, 237, 0.02) 0%, transparent 50%)',
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-30"
                style={{
                    background: 'radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.02) 0%, transparent 50%)',
                }}
            />

            {/* Cinematic Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(5, 5, 5, 0.7) 100%)',
                }}
            />

            {/* Bottom Fade for Content Integration */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
    )
}
