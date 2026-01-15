import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

interface BackToTopProps {
    showAfter?: number // pixels scrolled before showing
}

export default function BackToTop({ showAfter = 400 }: BackToTopProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > showAfter)
        }

        window.addEventListener('scroll', toggleVisibility, { passive: true })
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
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Scroll to top"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-aurora-teal)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Button */}
                    <div className="relative w-12 h-12 rounded-full bg-[var(--color-glass-strong)] border border-[var(--color-border)] backdrop-blur-xl flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all duration-300 shadow-xl group-hover:shadow-[0_8px_30px_rgba(201,168,108,0.2)]">
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>

                    {/* Decorative ring */}
                    <svg className="absolute inset-0 w-12 h-12 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" viewBox="0 0 48 48">
                        <circle
                            cx="24"
                            cy="24"
                            r="23"
                            fill="none"
                            stroke="url(#top-gradient)"
                            strokeWidth="1"
                            strokeDasharray="145"
                            strokeDashoffset="0"
                        />
                        <defs>
                            <linearGradient id="top-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-gold)" />
                                <stop offset="100%" stopColor="var(--color-aurora-teal)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
