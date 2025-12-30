import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GradientTextProps {
    children: ReactNode
    variant?: 'default' | 'gold' | 'premium'
    as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
    className?: string
}

export default function GradientText({
    children,
    variant = 'default',
    as: Component = 'span',
    className = '',
}: GradientTextProps) {
    const variantClasses = {
        default: 'text-gradient',
        gold: 'text-gradient-gold',
        premium: 'text-gradient-premium',
    }

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Component className={`${variantClasses[variant]} ${className}`}>
                {children}
            </Component>
        </motion.span>
    )
}
