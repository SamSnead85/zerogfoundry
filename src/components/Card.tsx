import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
    glow?: 'none' | 'gold' | 'aurora' | 'holographic'
}

const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
}

const glowClasses = {
    none: '',
    gold: 'hover:shadow-[0_0_60px_rgba(201,168,108,0.15)]',
    aurora: 'hover:shadow-[0_0_60px_rgba(79,255,237,0.12)]',
    holographic: 'hover:shadow-[0_8px_40px_rgba(168,85,247,0.12),0_0_60px_rgba(79,255,237,0.08)]',
}

export default function Card({
    children,
    className = '',
    hover = true,
    padding = 'md',
    glow = 'none',
}: CardProps) {
    return (
        <motion.div
            className={`
                relative overflow-hidden
                ${paddingClasses[padding]} 
                ${glowClasses[glow]}
                bg-[var(--color-card)] 
                border border-[var(--color-border)]
                rounded-2xl
                transition-all duration-500
                ${hover ? 'hover:border-[var(--color-border-strong)] hover:bg-[var(--color-card-hover)]' : ''}
                ${className}
            `}
            style={{
                boxShadow: 'var(--shadow-card)',
            }}
            whileHover={hover ? {
                y: -4,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            } : undefined}
        >
            {/* Subtle inner glow effect */}
            <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    )
}

// Feature Card variant with holographic accent
interface FeatureCardProps {
    icon: ReactNode
    title: string
    description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card className="flex flex-col items-start gap-5" glow="aurora">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-glass-strong)] border border-[var(--color-border)] text-[var(--color-muted)] transition-all duration-500 group-hover:text-[var(--color-aurora-teal)]">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-2">{title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{description}</p>
            </div>
        </Card>
    )
}

// Metric Card variant with premium styling
interface MetricCardProps {
    value: string
    label: string
}

export function MetricCard({ value, label }: MetricCardProps) {
    return (
        <Card className="text-center" padding="lg" glow="gold">
            <div className="metric text-[var(--color-foreground)]">{value}</div>
            <div className="metric-label">{label}</div>
        </Card>
    )
}

// Case Study Card with holographic hover
interface CaseStudyCardProps {
    title: string
    industry: string
    result: string
    href: string
}

export function CaseStudyCard({ title, industry, result, href }: CaseStudyCardProps) {
    return (
        <a href={href}>
            <Card className="h-full flex flex-col" glow="holographic">
                <span className="badge mb-4">{industry}</span>
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">{title}</h3>
                <p className="text-[var(--color-success)] mt-auto font-medium">{result}</p>
            </Card>
        </a>
    )
}
