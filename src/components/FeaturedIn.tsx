import { motion } from 'framer-motion'

interface FeaturedInProps {
    className?: string
}

// Media outlets for thought leadership credibility
const mediaLogos = [
    { name: 'Forbes', id: 'forbes' },
    { name: 'TechCrunch', id: 'techcrunch' },
    { name: 'Harvard Business Review', id: 'hbr' },
    { name: 'MIT Technology Review', id: 'mit' },
    { name: 'Gartner', id: 'gartner' },
    { name: 'McKinsey', id: 'mckinsey' },
]

export default function FeaturedIn({ className = '' }: FeaturedInProps) {
    return (
        <section className={`py-16 border-t border-b border-[var(--color-border)] ${className}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-center text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-10">
                        Featured In
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
                        {mediaLogos.map((logo, index) => (
                            <motion.div
                                key={logo.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="group"
                            >
                                <span className="text-[var(--color-subtle)] group-hover:text-[var(--color-muted)] text-sm font-medium tracking-wide transition-colors duration-300">
                                    {logo.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
