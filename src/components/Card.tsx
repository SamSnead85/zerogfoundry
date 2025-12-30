import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
}

export default function Card({
    children,
    className = '',
    hover = true,
    padding = 'md',
}: CardProps) {
    return (
        <motion.div
            className={`card ${paddingClasses[padding]} ${className}`}
            whileHover={hover ? { y: -2 } : undefined}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

// Feature Card variant for homepage
interface FeatureCardProps {
    icon: ReactNode
    title: string
    description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card className="flex flex-col items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[var(--color-card-elevated)] border border-[var(--color-border)] text-[var(--color-muted)]">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-2">{title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{description}</p>
            </div>
        </Card>
    )
}

// Metric Card variant for trust signals
interface MetricCardProps {
    value: string
    label: string
}

export function MetricCard({ value, label }: MetricCardProps) {
    return (
        <Card className="text-center" padding="lg">
            <div className="metric">{value}</div>
            <div className="metric-label">{label}</div>
        </Card>
    )
}

// Case Study Card variant
interface CaseStudyCardProps {
    title: string
    industry: string
    result: string
    href: string
}

export function CaseStudyCard({ title, industry, result, href }: CaseStudyCardProps) {
    return (
        <a href={href}>
            <Card className="h-full flex flex-col">
                <span className="badge mb-4">{industry}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-[var(--color-success)] mt-auto font-medium">{result}</p>
            </Card>
        </a>
    )
}
