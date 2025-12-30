import { useEffect, useState } from 'react'

interface Particle {
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
}

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        // Generate floating particles
        const generatedParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 4,
        }))
        setParticles(generatedParticles)
    }, [])

    return (
        <div className="animated-background" aria-hidden="true">
            {/* Pure black base */}
            <div className="absolute inset-0 bg-black" />

            {/* Radial gradient overlay - top glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.08), transparent)'
                }}
            />

            {/* Rotating 3D Sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sphere-container">
                <div className="w-full h-full rounded-full border border-white/10 rotating-sphere">
                    {/* Inner rings for depth */}
                    <div className="absolute inset-8 rounded-full border border-white/[0.05]" />
                    <div className="absolute inset-16 rounded-full border border-white/[0.05]" />
                    <div className="absolute inset-24 rounded-full border border-white/[0.03]" />
                    <div className="absolute inset-32 rounded-full border border-white/[0.02]" />

                    {/* Orbital dots */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/20 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 rounded-full" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/15 rounded-full" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white/10 rounded-full" />
                </div>
            </div>

            {/* Second rotating ring - opposite direction */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
                <div className="w-full h-full rounded-full border border-white/[0.05] rotating-sphere-reverse">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute bg-white/20 rounded-full floating-particle"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Subtle noise overlay */}
            <div className="noise-overlay" />
        </div>
    )
}
