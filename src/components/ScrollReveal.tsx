import { type ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    delay?: number
    duration?: number
    className?: string
    once?: boolean
}

// Disabled scroll animations for better user experience - content shows immediately
export default function ScrollReveal({
    children,
    className = '',
}: ScrollRevealProps) {
    return <div className={className}>{children}</div>
}

// Staggered children variant
interface StaggerContainerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerContainer({
    children,
    className = '',
}: StaggerContainerProps) {
    return <div className={className}>{children}</div>
}

// Child item for stagger effect
interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return <div className={className}>{children}</div>
}

