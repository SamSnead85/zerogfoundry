import { motion } from 'framer-motion'

interface LeadershipCardProps {
    name: string
    title: string
    bio: string
    image?: string
    linkedin?: string
    achievements?: string[]
    className?: string
}

export default function LeadershipCard({
    name,
    title,
    bio,
    image,
    linkedin,
    achievements = [],
    className = '',
}: LeadershipCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`group card overflow-hidden ${className}`}
        >
            {/* Image or Avatar */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[var(--color-card-elevated)] to-[var(--color-background-alt)]">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl font-bold text-[var(--color-gold)]">
                            {name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent" />

                {/* Gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
                <p className="text-sm text-[var(--color-gold)] font-medium mb-3">{title}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{bio}</p>

                {achievements.length > 0 && (
                    <div className="space-y-2 mb-4">
                        {achievements.slice(0, 2).map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 flex-shrink-0" />
                                <span className="text-xs text-[var(--color-subtle)]">{achievement}</span>
                            </div>
                        ))}
                    </div>
                )}

                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent-light)] hover:text-white transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        Connect on LinkedIn
                    </a>
                )}
            </div>
        </motion.div>
    )
}
