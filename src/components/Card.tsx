import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    glow?: 'none' | 'gold' | 'aurora' | 'holographic' | 'premium'
    variant?: 'default' | 'glass' | 'solid' | 'outline'
}

const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
}

const glowClasses = {
    none: '',
    gold: 'hover:shadow-[0_0_60px_rgba(201,168,108,0.25)] hover:border-[rgba(201,168,108,0.4)]',
    aurora: 'hover:shadow-[0_0_60px_rgba(79,255,237,0.2)] hover:border-[rgba(79,255,237,0.4)]',
    holographic: 'hover:shadow-[0_8px_50px_rgba(168,85,247,0.2),0_0_80px_rgba(79,255,237,0.15)] hover:border-[rgba(168,85,247,0.4)]',
    premium: 'hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.5),0_0_60px_rgba(201,168,108,0.12)] hover:border-[rgba(201,168,108,0.35)]',
}

const variantClasses = {
    default: 'bg-[var(--color-card)] border border-[var(--color-border)] transition-[border-color,box-shadow] duration-500',
    glass: 'bg-white/[0.03] backdrop-blur-3xl border border-white/10 transition-[border-color,box-shadow] duration-500',
    solid: 'bg-[#0a0a0a] border border-white/10 transition-[border-color,box-shadow] duration-500',
    outline: 'bg-transparent border border-white/15 hover:border-white/30 transition-[border-color,box-shadow] duration-500',
}

export default function Card({
    children,
    className = '',
    hover = true,
    padding = 'md',
    glow = 'none',
    variant = 'default',
}: CardProps) {
    return (
        <motion.div
            className={`
                relative overflow-hidden
                ${paddingClasses[padding]} 
                ${glowClasses[glow]}
                ${variantClasses[variant]}
                rounded-2xl
                transition-all duration-500
                ${hover ? 'hover:border-white/20 hover:bg-white/[0.03]' : ''}
                ${className}
            `}
            style={{
                boxShadow: 'var(--shadow-card)',
            }}
            whileHover={hover ? {
                y: -6,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            } : undefined}
        >
            {/* Premium gradient top edge */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

            {/* Holographic shimmer on hover */}
            <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse at 30% 0%, rgba(201, 168, 108, 0.06) 0%, transparent 50%),
                        radial-gradient(ellipse at 70% 100%, rgba(79, 255, 237, 0.04) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Inner glow effect */}
            <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)',
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    )
}

// Premium Glass Card with enhanced effects
interface GlassCardProps {
    children: ReactNode
    className?: string
    accentColor?: 'gold' | 'teal' | 'violet'
}

export function GlassCard({ children, className = '', accentColor = 'gold' }: GlassCardProps) {
    const accentGradients = {
        gold: 'from-[var(--color-gold)]/30 via-transparent to-transparent',
        teal: 'from-[var(--color-aurora-teal)]/30 via-transparent to-transparent',
        violet: 'from-[var(--color-holographic-violet)]/30 via-transparent to-transparent',
    }

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl ${className}`}
            whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        >
            {/* Outer glow */}
            <div className={`absolute -inset-px bg-gradient-to-b ${accentGradients[accentColor]} rounded-2xl blur-xl opacity-60`} />

            {/* Card body */}
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.8)] p-8">
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

                {/* Inner highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                    {children}
                </div>
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
        <Card className="group flex flex-col items-start gap-5" glow="aurora" variant="glass">
            <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white/60 transition-all duration-500 group-hover:text-[var(--color-aurora-teal)] group-hover:border-[var(--color-aurora-teal)]/30">
                    {icon}
                </div>
                {/* Icon glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-[var(--color-aurora-teal)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[var(--color-aurora-teal)] transition-colors duration-300">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{description}</p>
            </div>
        </Card>
    )
}

// Metric Card variant with premium styling
interface MetricCardProps {
    value: string
    label: string
    trend?: 'up' | 'down' | 'neutral'
}

export function MetricCard({ value, label, trend }: MetricCardProps) {
    const trendColors = {
        up: 'text-[var(--color-success)]',
        down: 'text-[var(--color-error)]',
        neutral: 'text-white/50',
    }

    return (
        <Card className="text-center group" padding="lg" glow="premium" variant="glass">
            <div className="relative inline-block">
                <div className={`metric text-white group-hover:text-[var(--color-gold)] transition-colors duration-500`}>
                    {value}
                </div>
                {/* Value glow */}
                <div className="absolute -inset-4 bg-[var(--color-gold)]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className={`metric-label mt-2 ${trend ? trendColors[trend] : ''}`}>{label}</div>
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
        <a href={href} className="block group">
            <Card className="h-full flex flex-col" glow="holographic" variant="glass" padding="lg">
                {/* Industry badge */}
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-[var(--color-holographic-violet)]/10 border border-[var(--color-holographic-violet)]/20 text-[var(--color-holographic-violet)] text-xs font-medium mb-4">
                    {industry}
                </span>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">{title}</h3>

                <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-[var(--color-success)] font-semibold text-lg">{result}</p>
                </div>
            </Card>
        </a>
    )
}

// Stat Card for dashboards
interface StatCardProps {
    value: string
    label: string
    icon?: ReactNode
    color?: 'gold' | 'teal' | 'violet' | 'white'
}

export function StatCard({ value, label, icon, color = 'gold' }: StatCardProps) {
    const colors = {
        gold: 'text-[var(--color-gold)]',
        teal: 'text-[var(--color-aurora-teal)]',
        violet: 'text-[var(--color-holographic-violet)]',
        white: 'text-white',
    }

    return (
        <Card variant="glass" padding="lg" glow="premium" className="group">
            <div className="flex items-start justify-between">
                <div>
                    <div className={`text-4xl font-serif font-normal tracking-tight ${colors[color]} group-hover:scale-105 transition-transform duration-300`}>
                        {value}
                    </div>
                    <div className="text-sm text-white/50 mt-2 uppercase tracking-wider font-medium">{label}</div>
                </div>
                {icon && (
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white/70 transition-colors duration-300">
                        {icon}
                    </div>
                )}
            </div>
        </Card>
    )
}
