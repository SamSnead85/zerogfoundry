import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { Button, Card } from '../components'

interface ResourceGateProps {
    resourceTitle: string
    resourceDescription: string
    resourceType?: 'whitepaper' | 'guide' | 'template' | 'report'
    onSuccess?: (email: string) => void
    children: React.ReactNode
}

export default function ResourceGate({
    resourceTitle,
    resourceType = 'whitepaper',
    onSuccess,
    children,
}: ResourceGateProps) {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        // Basic email validation
        if (!email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid work email address')
            return
        }

        // Check for common personal email domains
        const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com']
        const domain = email.split('@')[1]?.toLowerCase()
        if (personalDomains.includes(domain)) {
            setError('Please use your work email address')
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setIsUnlocked(true)
        onSuccess?.(email)

        // Store in sessionStorage for the session
        sessionStorage.setItem(`resource_unlocked_${resourceTitle}`, 'true')
    }

    // Check if already unlocked
    useState(() => {
        const unlocked = sessionStorage.getItem(`resource_unlocked_${resourceTitle}`)
        if (unlocked) {
            setIsUnlocked(true)
        }
    })

    if (isUnlocked) {
        return <>{children}</>
    }

    return (
        <div className="relative">
            {/* Blurred preview */}
            <div className="blur-sm pointer-events-none select-none opacity-50">
                {children}
            </div>

            {/* Gate overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-[var(--color-background)]/80 backdrop-blur-sm"
            >
                <Card padding="lg" className="max-w-md w-full mx-4">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-[var(--color-gold)]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            Access {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
                        </h3>
                        <p className="text-sm text-[var(--color-muted)]">
                            Enter your work email to access <strong>{resourceTitle}</strong>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-red-400 mt-2">{error}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                            icon={<ArrowRight className="w-5 h-5" />}
                        >
                            {isSubmitting ? 'Unlocking...' : 'Get Instant Access'}
                        </Button>
                    </form>

                    {/* Benefits */}
                    <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                        <p className="text-xs text-[var(--color-subtle)] mb-3">What you'll get:</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                Instant access to {resourceTitle}
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                Weekly AI insights newsletter
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                Early access to new research
                            </li>
                        </ul>
                    </div>

                    <p className="text-xs text-center text-[var(--color-subtle)] mt-4">
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </Card>
            </motion.div>
        </div>
    )
}
