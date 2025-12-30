import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface PremiumTestimonialProps {
    quote: string
    name: string
    title: string
    company: string
    image?: string
    className?: string
}

export default function PremiumTestimonial({
    quote,
    name,
    title,
    company,
    image,
    className = '',
}: PremiumTestimonialProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${className}`}
        >
            <div className="card-premium p-8 md:p-10">
                {/* Gold quote icon */}
                <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center shadow-gold">
                        <Quote className="w-5 h-5 text-[var(--color-background)]" />
                    </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 pt-4 italic">
                    "{quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-gold)]/30"
                        />
                    ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-gold)]/20">
                            <span className="text-lg font-bold text-[var(--color-gold)]">
                                {name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                    )}
                    <div>
                        <p className="font-semibold text-white">{name}</p>
                        <p className="text-sm text-[var(--color-gold-light)]">{title}</p>
                        <p className="text-sm text-[var(--color-muted)]">{company}</p>
                    </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--color-gold)]">
                        <path
                            fill="currentColor"
                            d="M100 100V0C100 55.23 55.23 100 0 100h100z"
                        />
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}
