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
            transition={{ duration: 0.6 }}
            className={`relative bg-[var(--color-background-alt)] border-y border-[var(--color-border)] ${className}`}
        >
            <div className="container py-20 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-display text-[var(--color-foreground)] mb-6"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link
                            to={buttonLink}
                            className="btn btn-primary btn-lg group inline-flex"
                        >
                            {buttonText}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
