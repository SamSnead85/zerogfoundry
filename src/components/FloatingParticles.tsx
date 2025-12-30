import { useMemo } from 'react'

interface Particle {
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
    opacity: number
}

interface FloatingParticlesProps {
    count?: number
    className?: string
}

export default function FloatingParticles({ count = 30, className = '' }: FloatingParticlesProps) {
    const particles = useMemo<Particle[]>(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 4 + 4,
            opacity: Math.random() * 0.5 + 0.2,
        }))
    }, [count])

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-[var(--color-accent)]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animation: `float ${p.duration}s ease-in-out infinite`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}
