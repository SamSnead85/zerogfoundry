import { motion } from 'framer-motion'
import { Check, Clock, ArrowRight } from 'lucide-react'

interface Phase {
    id: string
    title: string
    duration: string
    description: string
    deliverables: string[]
    status?: 'completed' | 'current' | 'upcoming'
}

interface ImplementationTimelineProps {
    phases: Phase[]
    title?: string
}

export default function ImplementationTimeline({
    phases,
    title = 'Implementation Timeline',
}: ImplementationTimelineProps) {
    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-bold text-white mb-8 text-center">{title}</h3>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />

                {/* Phases */}
                <div className="space-y-8">
                    {phases.map((phase, index) => {
                        const isCompleted = phase.status === 'completed'
                        const isCurrent = phase.status === 'current'

                        return (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-16"
                            >
                                {/* Node */}
                                <div
                                    className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${isCompleted
                                        ? 'bg-[var(--color-success)] border-[var(--color-success)] text-white'
                                        : isCurrent
                                            ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                                            : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-muted)]'
                                        }`}
                                >
                                    {isCompleted ? (
                                        <Check className="w-5 h-5" />
                                    ) : (
                                        <span className="text-sm font-bold">{index + 1}</span>
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`p-5 rounded-xl ${isCurrent
                                        ? 'bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30'
                                        : 'bg-[var(--color-background)]/50'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-lg font-semibold text-white">{phase.title}</h4>
                                        <span className="flex items-center gap-1 text-sm text-[var(--color-muted)]">
                                            <Clock className="w-4 h-4" />
                                            {phase.duration}
                                        </span>
                                    </div>
                                    <p className="text-[var(--color-muted)] mb-4">{phase.description}</p>

                                    {/* Deliverables */}
                                    <div className="space-y-2">
                                        <p className="text-xs text-[var(--color-subtle)] uppercase tracking-wider">Deliverables</p>
                                        <div className="flex flex-wrap gap-2">
                                            {phase.deliverables.map((deliverable, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs bg-[var(--color-card)] rounded text-[var(--color-muted)]"
                                                >
                                                    {deliverable}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow to next */}
                                {index < phases.length - 1 && (
                                    <div className="absolute left-[22px] -bottom-4 text-[var(--color-border)]">
                                        <ArrowRight className="w-4 h-4 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
