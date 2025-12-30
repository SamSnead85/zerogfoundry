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
        // Generate floating particles - ScaledNative pattern
        const generatedParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
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
            {/* Pure black foundation */}
            <div className="absolute inset-0 bg-black" />

            {/* Radial gradient glow from top - ScaledNative atmospheric lighting */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.08), transparent)'
                }}
            />

            {/* Secondary ambient glow - adds depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 60% 40% at 70% 30%, rgba(100,150,255,0.04), transparent)'
                }}
            />

            {/* Primary Rotating Sphere - 60s slow rotation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
                <div className="w-full h-full rounded-full border border-white/10 rotating-sphere">
                    {/* Concentric rings for depth */}
                    <div className="absolute inset-[5%] rounded-full border border-white/[0.06]" />
                    <div className="absolute inset-[10%] rounded-full border border-white/[0.05]" />
                    <div className="absolute inset-[15%] rounded-full border border-white/[0.04]" />
                    <div className="absolute inset-[20%] rounded-full border border-white/[0.03]" />
                    <div className="absolute inset-[25%] rounded-full border border-white/[0.02]" />

                    {/* Orbital dots at cardinal points */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/25 rounded-full blur-[1px]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white/15 rounded-full blur-[0.5px]" />
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white/20 rounded-full blur-[1px]" />
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/15 rounded-full blur-[0.5px]" />
                </div>
            </div>

            {/* Secondary rotating ring - opposite direction, smaller */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px]">
                <div className="w-full h-full rounded-full border border-white/[0.06] rotating-sphere-reverse">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Tertiary rotating ring - even smaller, different speed */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px]">
                <div className="w-full h-full rounded-full border border-white/[0.04] rotating-sphere-slow">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/25 rounded-full" />
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Floating particles - ScaledNative dust effect */}
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

            {/* Subtle diagonal light beam - cinematic effect */}
            <div
                className="absolute top-0 left-1/4 w-[300px] h-[150%] opacity-[0.03]"
                style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
                    transform: 'rotate(25deg)',
                    filter: 'blur(40px)',
                }}
            />

            {/* Noise texture overlay */}
            <div className="noise-overlay" />
        </div>
    )
}
