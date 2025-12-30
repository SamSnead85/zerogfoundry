import { Award, Shield, Trophy, Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface AwardsSectionProps {
    className?: string
}

const awards = [
    {
        icon: Trophy,
        title: 'AI Excellence Award',
        organization: 'Enterprise AI Summit',
        year: '2024',
    },
    {
        icon: Award,
        title: 'Top AI Consultancy',
        organization: 'Gartner Cool Vendor',
        year: '2024',
    },
    {
        icon: Shield,
        title: 'SOC 2 Type II',
        organization: 'Certified Compliant',
        year: '2024',
    },
    {
        icon: Star,
        title: 'Best AI Innovation',
        organization: 'Healthcare IT Awards',
        year: '2024',
    },
]

export default function AwardsSection({ className = '' }: AwardsSectionProps) {
    return (
        <section className={`py-16 ${className}`}>
            <div className="container">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-12"
                >
                    Recognition & Certifications
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {awards.map((award, index) => {
                        const Icon = award.icon
                        return (
                            <motion.div
                                key={award.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group text-center p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:bg-[var(--color-card)]/50"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent border border-[var(--color-gold)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-5 h-5 text-[var(--color-gold)]" />
                                    </div>
                                </div>
                                <h4 className="text-sm font-semibold text-white mb-1">{award.title}</h4>
                                <p className="text-xs text-[var(--color-muted)]">{award.organization}</p>
                                <p className="text-xs text-[var(--color-subtle)] mt-1">{award.year}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
