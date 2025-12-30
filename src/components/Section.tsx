import type { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    className?: string
    id?: string
    background?: 'default' | 'alt' | 'gradient'
}

const backgroundClasses = {
    default: 'bg-[var(--color-background)]',
    alt: 'bg-[var(--color-background-alt)]',
    gradient: 'bg-gradient-to-b from-[var(--color-background)] to-[var(--color-background-alt)]',
}

export default function Section({
    children,
    className = '',
    id,
    background = 'default',
}: SectionProps) {
    return (
        <section id={id} className={`section ${backgroundClasses[background]} ${className}`}>
            <div className="container">{children}</div>
        </section>
    )
}

// Section Header subcomponent
interface SectionHeaderProps {
    badge?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
}

export function SectionHeader({
    badge,
    title,
    subtitle,
    align = 'center',
}: SectionHeaderProps) {
    const alignClass = align === 'center' ? 'text-center mx-auto' : ''

    return (
        <div className={`max-w-3xl mb-12 ${alignClass}`}>
            {badge && <p className="text-eyebrow mb-4">{badge}</p>}
            <h2 className="text-[var(--color-foreground)] mb-4">{title}</h2>
            {subtitle && <p className="text-[var(--color-muted)] leading-relaxed">{subtitle}</p>}
        </div>
    )
}
