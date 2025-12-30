import { useRef, type ReactNode } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface ScrollRevealProps {
    children: ReactNode
    direction?: Direction
    delay?: number
    duration?: number
    className?: string
    once?: boolean
}

const getVariants = (direction: Direction): Variants => {
    const distance = 30

    const hiddenState: Record<Direction, { opacity: number; x?: number; y?: number }> = {
        up: { opacity: 0, y: distance },
        down: { opacity: 0, y: -distance },
        left: { opacity: 0, x: distance },
        right: { opacity: 0, x: -distance },
        none: { opacity: 0 },
    }

    return {
        hidden: hiddenState[direction],
        visible: { opacity: 1, x: 0, y: 0 },
    }
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={getVariants(direction)}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
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
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Child item for stagger effect
interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
