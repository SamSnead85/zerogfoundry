import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

interface BackToTopProps {
    showAfter?: number // pixels scrolled before showing
}

export default function BackToTop({ showAfter = 300 }: BackToTopProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > showAfter)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [showAfter])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/50 transition-all shadow-xl flex items-center justify-center"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
