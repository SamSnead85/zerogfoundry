import { useState, useEffect } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollProgress)
        }

        window.addEventListener('scroll', updateProgress, { passive: true })
        updateProgress() // Initial call
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    // Smooth spring animation for progress
    const springProgress = useSpring(progress, { damping: 30, stiffness: 200 })
    const width = useTransform(springProgress, (value) => `${value}%`)

    return (
        <>
            {/* Premium scroll progress bar with gradient and glow */}
            <motion.div
                className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none"
                style={{
                    width,
                    background: 'linear-gradient(90deg, var(--color-gold) 0%, var(--color-aurora-teal) 50%, var(--color-holographic-violet) 100%)',
                    boxShadow: '0 0 15px var(--color-gold), 0 0 30px var(--color-aurora-teal), 0 2px 10px rgba(0,0,0,0.3)',
                }}
                aria-hidden="true"
            />

            {/* Glow effect layer */}
            <motion.div
                className="fixed top-0 left-0 h-[8px] z-[9998] pointer-events-none opacity-40"
                style={{
                    width,
                    background: 'linear-gradient(90deg, var(--color-gold) 0%, var(--color-aurora-teal) 100%)',
                    filter: 'blur(8px)',
                }}
                aria-hidden="true"
            />
        </>
    )
}
