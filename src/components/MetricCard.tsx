import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MetricCardProps {
    value: string | number
    label: string
    sublabel?: string
    icon?: ReactNode
    variant?: 'default' | 'gold' | 'success' | 'accent'
    className?: string
}

export default function MetricCard({
    value,
    label,
    sublabel,
    icon,
    variant = 'default',
    className = '',
}: MetricCardProps) {
    const variantClasses = {
        default: 'metric-accent',
        gold: 'metric-gold',
        success: 'metric-success',
        accent: 'metric-accent',
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`card text-center p-8 md:p-10 ${className}`}
        >
            {icon && (
                <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-gold)]">
                        {icon}
                    </div>
                </div>
            )}

            <div className={`metric ${variantClasses[variant]}`}>
                {value}
            </div>

            <div className="metric-label">{label}</div>

            {sublabel && (
                <div className="metric-sublabel">{sublabel}</div>
            )}
        </motion.div>
    )
}
