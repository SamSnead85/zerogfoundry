import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ArrowRight, FileText, Mail } from 'lucide-react'
import { Button, Card } from '../components'

interface ExitIntentProps {
    /** Delay in ms before exit intent becomes active */
    delay?: number
    /** Content offer title */
    title?: string
    /** Content offer description */
    description?: string
    /** CTA button text */
    ctaText?: string
    /** Resource name for download */
    resourceName?: string
}

export default function ExitIntent({
    delay = 5000,
    title = 'Wait! Don\'t miss our latest research',
    description = 'Download our comprehensive guide to Enterprise AI Implementation—featuring insights from 100+ successful deployments.',
    ctaText = 'Get Free Guide',
    resourceName = 'Enterprise AI Implementation Guide',
}: ExitIntentProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleExitIntent = useCallback((e: MouseEvent) => {
        // Only trigger when mouse leaves toward the top of the page
        if (e.clientY <= 5 && !hasShown) {
            setIsVisible(true)
            setHasShown(true)
        }
    }, [hasShown])

    useEffect(() => {
        // Check if already shown in this session
        const shown = sessionStorage.getItem('exitIntentShown')
        if (shown) {
            setHasShown(true)
            return
        }

        // Add delay before activating exit intent
        const timer = setTimeout(() => {
            document.addEventListener('mouseout', handleExitIntent)
        }, delay)

        return () => {
            clearTimeout(timer)
            document.removeEventListener('mouseout', handleExitIntent)
        }
    }, [delay, handleExitIntent])

    const handleClose = () => {
        setIsVisible(false)
        sessionStorage.setItem('exitIntentShown', 'true')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setIsSubmitted(true)
        sessionStorage.setItem('exitIntentShown', 'true')

        // Close after showing success
        setTimeout(() => {
            setIsVisible(false)
        }, 3000)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
                    >
                        <Card padding="lg" className="relative">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--color-card-elevated)] flex items-center justify-center text-[var(--color-muted)] hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-4">
                                        <Download className="w-8 h-8 text-[var(--color-success)]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Check Your Inbox!</h3>
                                    <p className="text-[var(--color-muted)]">
                                        We've sent the {resourceName} to your email.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                                            <FileText className="w-8 h-8 text-[var(--color-gold)]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                                        <p className="text-[var(--color-muted)]">{description}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
                                            <input
                                                type="email"
                                                placeholder="Enter your work email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            disabled={isSubmitting}
                                            icon={<ArrowRight className="w-5 h-5" />}
                                        >
                                            {isSubmitting ? 'Sending...' : ctaText}
                                        </Button>
                                    </form>

                                    <p className="text-xs text-center text-[var(--color-subtle)] mt-4">
                                        We respect your privacy. Unsubscribe anytime.
                                    </p>
                                </>
                            )}
                        </Card>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
