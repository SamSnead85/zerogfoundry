import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ExecutiveCTAProps {
    title?: string
    subtitle?: string
    buttonText?: string
    buttonLink?: string
    className?: string
}

export default function ExecutiveCTA({
    title = "Ready to Transform Your Operations?",
    subtitle = "Schedule a complimentary AI opportunity assessment with our senior consultants.",
    buttonText = "Book Your Assessment",
    buttonLink = "/contact",
    className = '',
}: ExecutiveCTAProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-[var(--color-background-alt)]" />

            {/* Holographic accent orbs */}
            <motion.div
                className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(201, 168, 108, 0.08) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, 20, -30, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <motion.div
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-25"
                style={{
                    background: 'radial-gradient(circle, rgba(79, 255, 237, 0.06) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
                animate={{
                    x: [0, -25, 20, 0],
                    y: [0, -20, 25, 0],
                    scale: [1, 0.95, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 3,
                }}
            />

            {/* Border accents */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-aurora-teal)]/15 to-transparent" />

            <div className="container relative z-10 py-24 md:py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-8"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl text-[var(--color-muted)] mb-12 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Link
                            to={buttonLink}
                            className="group inline-flex items-center px-10 py-5 bg-[var(--color-foreground)] text-[#050505] font-medium text-base tracking-wide rounded-xl transition-all duration-500 hover:shadow-[0_0_80px_rgba(201,168,108,0.3)] hover:scale-[1.02]"
                        >
                            {buttonText}
                            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
