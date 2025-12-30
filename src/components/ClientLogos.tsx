import { motion } from 'framer-motion'

interface ClientLogosProps {
    className?: string
    title?: string
}

// Premium Fortune 500 style logos (placeholder SVGs for demo)
const logos = [
    { name: 'Microsoft', id: 'microsoft' },
    { name: 'Google', id: 'google' },
    { name: 'Amazon', id: 'amazon' },
    { name: 'IBM', id: 'ibm' },
    { name: 'Salesforce', id: 'salesforce' },
    { name: 'Oracle', id: 'oracle' },
]

export default function ClientLogos({ className = '', title = 'Trusted by Industry Leaders' }: ClientLogosProps) {
    return (
        <div className={`py-12 ${className}`}>
            {title && (
                <p className="text-center text-sm font-medium text-[var(--color-subtle)] uppercase tracking-widest mb-8">
                    {title}
                </p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50 hover:opacity-70 transition-opacity duration-500">
                {logos.map((logo, index) => (
                    <motion.div
                        key={logo.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group"
                    >
                        {/* Premium text-based logo placeholder */}
                        <div className="flex items-center gap-2 text-[var(--color-muted)] group-hover:text-white transition-colors duration-300">
                            <div className="w-8 h-8 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
                                <span className="text-xs font-bold">{logo.name.charAt(0)}</span>
                            </div>
                            <span className="text-sm font-semibold tracking-wide">{logo.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
