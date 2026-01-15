import { useEffect, useState, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface FloatingOrb {
    id: number
    x: number
    y: number
    size: number
    color: string
    blur: number
    duration: number
    delay: number
    intensity: number
}

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)

    // Smooth mouse tracking for interactive gradients
    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)
    const springConfig = { damping: 30, stiffness: 100 }
    const smoothMouseX = useSpring(mouseX, springConfig)
    const smoothMouseY = useSpring(mouseY, springConfig)

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

    // ScaledNative-inspired premium orb configurations
    const orbs = useMemo<FloatingOrb[]>(() => [
        // Primary premium orb - top left (ScaledNative style warm gold)
        { id: 1, x: 8, y: 12, size: 700, color: 'rgba(201, 168, 108, 0.15)', blur: 180, duration: 35, delay: 0, intensity: 1.2 },
        // Teal accent - top right (signature color)
        { id: 2, x: 88, y: 8, size: 550, color: 'rgba(79, 255, 237, 0.08)', blur: 160, duration: 40, delay: 3, intensity: 1 },
        // Deep violet - center-right (depth layer)
        { id: 3, x: 72, y: 50, size: 800, color: 'rgba(168, 85, 247, 0.06)', blur: 200, duration: 45, delay: 5, intensity: 0.8 },
        // Rose platinum - bottom-left (warmth)
        { id: 4, x: 18, y: 75, size: 600, color: 'rgba(212, 164, 144, 0.09)', blur: 170, duration: 38, delay: 2, intensity: 1 },
        // Central prism - crystalline core
        { id: 5, x: 48, y: 38, size: 900, color: 'rgba(250, 250, 250, 0.025)', blur: 220, duration: 50, delay: 4, intensity: 0.7 },
        // Secondary gold - bottom right
        { id: 6, x: 82, y: 85, size: 500, color: 'rgba(201, 168, 108, 0.10)', blur: 150, duration: 32, delay: 6, intensity: 1.1 },
        // Accent prism - top center
        { id: 7, x: 42, y: 5, size: 400, color: 'rgba(244, 114, 182, 0.04)', blur: 130, duration: 28, delay: 7, intensity: 0.9 },
        // Deep blue - subtle depth
        { id: 8, x: 25, y: 45, size: 650, color: 'rgba(96, 165, 250, 0.04)', blur: 180, duration: 42, delay: 8, intensity: 0.6 },
    ], [])

    return (
        <div className="animated-background" aria-hidden="true">
            {/* Ultra-deep obsidian foundation */}
            <div className="absolute inset-0 bg-[#030303]" />

            {/* ScaledNative-style layered mesh gradient */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: `
                        radial-gradient(ellipse 120% 60% at 0% 0%, rgba(201, 168, 108, 0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 100% 80% at 100% 0%, rgba(79, 255, 237, 0.04) 0%, transparent 50%),
                        radial-gradient(ellipse 80% 60% at 100% 100%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
                        radial-gradient(ellipse 100% 70% at 0% 100%, rgba(201, 168, 108, 0.04) 0%, transparent 50%)
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
                    className="absolute w-[1200px] h-[1200px] pointer-events-none opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(201, 168, 108, 0.06) 0%, transparent 50%)',
                        filter: 'blur(100px)',
                        x: useTransform(smoothMouseX, [0, 1], [-600, typeof window !== 'undefined' ? window.innerWidth - 600 : 600]),
                        y: useTransform(smoothMouseY, [0, 1], [-600, typeof window !== 'undefined' ? window.innerHeight - 600 : 600]),
                    }}
                />
            )}

            {/* Premium Floating Orbs with enhanced animations */}
            {mounted && orbs.map((orb) => (
                <motion.div
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
                    animate={{
                        x: [0, 50 * orb.intensity, -40 * orb.intensity, 30 * orb.intensity, 0],
                        y: [0, -40 * orb.intensity, 30 * orb.intensity, -25 * orb.intensity, 0],
                        scale: [1, 1.12 * orb.intensity, 0.94, 1.08 * orb.intensity, 1],
                        opacity: [0.8, 1, 0.85, 0.95, 0.8],
                    }}
                    transition={{
                        duration: orb.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: orb.delay,
                    }}
                />
            ))}

            {/* Aurora Ribbon Effect - Top (ScaledNative signature) */}
            {mounted && (
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[600px]"
                    style={{
                        background: `linear-gradient(
                            180deg,
                            rgba(79, 255, 237, 0.025) 0%,
                            rgba(168, 85, 247, 0.018) 25%,
                            rgba(201, 168, 108, 0.015) 50%,
                            transparent 100%
                        )`,
                    }}
                    animate={{
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Premium Holographic Light Beam 1 */}
            {mounted && (
                <motion.div
                    className="absolute -top-1/3 left-1/4 w-[1200px] h-[1600px] opacity-[0.02]"
                    style={{
                        background: `linear-gradient(
                            125deg,
                            transparent 0%,
                            rgba(79, 255, 237, 0.18) 25%,
                            rgba(168, 85, 247, 0.12) 45%,
                            rgba(244, 114, 182, 0.08) 65%,
                            transparent 100%
                        )`,
                        transform: 'rotate(-15deg)',
                        filter: 'blur(100px)',
                    }}
                    animate={{
                        opacity: [0.015, 0.035, 0.015],
                        x: [-100, 100, -100],
                    }}
                    transition={{
                        duration: 30,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Premium Holographic Light Beam 2 - Counter */}
            {mounted && (
                <motion.div
                    className="absolute top-1/4 -right-1/4 w-[1000px] h-[1400px] opacity-[0.015]"
                    style={{
                        background: `linear-gradient(
                            -125deg,
                            transparent 0%,
                            rgba(201, 168, 108, 0.12) 35%,
                            rgba(250, 250, 250, 0.08) 55%,
                            transparent 100%
                        )`,
                        transform: 'rotate(10deg)',
                        filter: 'blur(90px)',
                    }}
                    animate={{
                        opacity: [0.012, 0.028, 0.012],
                        x: [80, -80, 80],
                    }}
                    transition={{
                        duration: 25,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 8,
                    }}
                />
            )}

            {/* Subtle architectural grid - barely visible */}
            <div
                className="absolute inset-0 opacity-[0.008]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(250, 250, 250, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(250, 250, 250, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '150px 150px',
                }}
            />

            {/* Premium Multi-Color Floating Particles */}
            {mounted && [...Array(40)].map((_, i) => {
                const colors = [
                    'rgba(79, 255, 237, 0.6)',    // Aurora teal
                    'rgba(201, 168, 108, 0.55)',  // Gold
                    'rgba(168, 85, 247, 0.5)',    // Violet
                    'rgba(250, 250, 250, 0.45)',  // White
                    'rgba(244, 114, 182, 0.4)',   // Pink
                ]
                return (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: 1.5 + Math.random() * 3,
                            height: 1.5 + Math.random() * 3,
                            left: `${Math.random() * 100}%`,
                            top: `${75 + Math.random() * 35}%`,
                            background: colors[i % colors.length],
                            boxShadow: `0 0 ${4 + Math.random() * 6}px ${colors[i % colors.length]}`,
                        }}
                        animate={{
                            y: [0, -800],
                            opacity: [0, 0.8, 0.6, 0],
                            scale: [0.8, 1.2, 1, 0.6],
                        }}
                        transition={{
                            duration: 14 + Math.random() * 10,
                            ease: "linear",
                            repeat: Infinity,
                            delay: i * 0.6,
                        }}
                    />
                )
            })}

            {/* Central radial glow - premium warmth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(201, 168, 108, 0.02) 0%, transparent 60%)',
                }}
            />

            {/* Corner accent glows */}
            <div
                className="absolute top-0 right-0 w-[800px] h-[800px] opacity-25"
                style={{
                    background: 'radial-gradient(circle at 100% 0%, rgba(79, 255, 237, 0.02) 0%, transparent 45%)',
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-25"
                style={{
                    background: 'radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.02) 0%, transparent 45%)',
                }}
            />
            <div
                className="absolute top-0 left-0 w-[600px] h-[600px] opacity-20"
                style={{
                    background: 'radial-gradient(circle at 0% 0%, rgba(201, 168, 108, 0.025) 0%, transparent 50%)',
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
