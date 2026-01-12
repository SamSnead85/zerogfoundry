import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Star, TrendingUp, Users, Award, CheckCircle, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

// ============================================
// CLIENT LOGO CAROUSEL (Phase 182)
// ============================================
const clientLogos = [
    { name: 'NVIDIA', letter: 'N', color: 'var(--color-gold)' },
    { name: 'AWS', letter: 'A', color: 'var(--color-aurora-teal)' },
    { name: 'Microsoft Azure', letter: 'M', color: 'var(--color-holographic-violet)' },
    { name: 'Google Cloud', letter: 'G', color: 'var(--color-accent)' },
    { name: 'Snowflake', letter: 'S', color: 'var(--color-success)' },
    { name: 'Databricks', letter: 'D', color: 'var(--color-warning)' },
    { name: 'Anthropic', letter: 'A', color: 'var(--color-gold)' },
    { name: 'OpenAI', letter: 'O', color: 'var(--color-aurora-teal)' },
]

export function ClientLogoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % Math.ceil(clientLogos.length / 5))
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const visibleLogos = clientLogos.slice(currentIndex * 5, currentIndex * 5 + 5)

    return (
        <div className="py-16 border-y border-[var(--color-border)]">
            <div className="container">
                <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-subtle)] mb-8 font-medium text-center">
                    Trusted by Industry Leaders
                </p>
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            {visibleLogos.map((logo) => (
                                <motion.div
                                    key={logo.name}
                                    className="group flex items-center gap-3 text-[var(--color-muted)] hover:text-white transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-gold)]/30 transition-all duration-300"
                                        style={{ boxShadow: `0 0 20px ${logo.color}10` }}
                                    >
                                        <span
                                            className="text-lg font-bold transition-colors"
                                            style={{ color: logo.color }}
                                        >
                                            {logo.letter}
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium tracking-wide hidden md:block">{logo.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* Carousel dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(clientLogos.length / 5) }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                    ? 'bg-[var(--color-gold)] w-6'
                                    : 'bg-[var(--color-border)] hover:bg-[var(--color-muted)]'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// ============================================
// FLOATING CTA (Phase 185)
// ============================================
export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const threshold = window.innerHeight * 0.5
            setIsVisible(scrollY > threshold && !isDismissed)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isDismissed])

    if (!isVisible) return null

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
        >
            <div className="relative">
                <button
                    onClick={() => setIsDismissed(true)}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-error)]/20 transition-colors z-10"
                    aria-label="Dismiss"
                >
                    <X className="w-3 h-3" />
                </button>
                <Link
                    to="/contact"
                    className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[#050505] font-semibold rounded-2xl shadow-[0_0_40px_rgba(201,168,108,0.3)] hover:shadow-[0_0_60px_rgba(201,168,108,0.5)] transition-all duration-300"
                >
                    <span>Book Briefing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    )
}

// ============================================
// SOCIAL PROOF NOTIFICATIONS (Phase 188)
// ============================================
const notifications = [
    { icon: TrendingUp, text: 'Fortune 500 company just completed onboarding', time: '2 min ago', color: 'var(--color-success)' },
    { icon: Users, text: '12 new enterprise clients this quarter', time: '1 hour ago', color: 'var(--color-aurora-teal)' },
    { icon: Award, text: 'Named Top AI Consultancy 2024', time: 'Today', color: 'var(--color-gold)' },
    { icon: Star, text: 'Client achieved 97% automation rate', time: 'This week', color: 'var(--color-holographic-violet)' },
    { icon: CheckCircle, text: '$8.2M in savings delivered this month', time: '3 days ago', color: 'var(--color-success)' },
]

export function SocialProofNotifications() {
    const [currentNotification, setCurrentNotification] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        // Show first notification after 5 seconds
        const initialDelay = setTimeout(() => {
            if (!isDismissed) setIsVisible(true)
        }, 5000)

        return () => clearTimeout(initialDelay)
    }, [isDismissed])

    useEffect(() => {
        if (!isVisible || isDismissed) return

        // Rotate notifications
        const interval = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setCurrentNotification(prev => (prev + 1) % notifications.length)
                setIsVisible(true)
            }, 500)
        }, 8000)

        return () => clearInterval(interval)
    }, [isVisible, isDismissed])

    const notification = notifications[currentNotification]
    const Icon = notification.icon

    if (isDismissed) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-6 left-6 z-40 max-w-sm"
                    initial={{ opacity: 0, x: -100, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                >
                    <div className="relative bg-[var(--color-card)]/95 backdrop-blur-xl border border-[var(--color-border)] rounded-2xl p-4 shadow-2xl">
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[var(--color-subtle)] hover:text-white transition-colors"
                            aria-label="Dismiss notifications"
                        >
                            <X className="w-3 h-3" />
                        </button>
                        <div className="flex items-start gap-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${notification.color}15` }}
                            >
                                <Icon className="w-5 h-5" style={{ color: notification.color }} />
                            </div>
                            <div className="flex-1 min-w-0 pr-4">
                                <p className="text-white text-sm font-medium leading-snug">{notification.text}</p>
                                <p className="text-[var(--color-subtle)] text-xs mt-1">{notification.time}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// ============================================
// TRUST BADGES BAR (Phase 190)
// ============================================
const trustBadges = [
    { icon: Shield, label: 'SOC 2 Type II', sublabel: 'Certified' },
    { icon: Award, label: 'ISO 27001', sublabel: 'Compliant' },
    { icon: CheckCircle, label: 'HIPAA', sublabel: 'Ready' },
    { icon: Zap, label: 'NVIDIA', sublabel: 'Partner' },
    { icon: Star, label: '95%+', sublabel: 'Accuracy' },
]

export function TrustBadgesBar() {
    return (
        <div className="py-6 bg-[var(--color-card)]/50 border-y border-[var(--color-border)]">
            <div className="container">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {trustBadges.map((badge, index) => {
                        const Icon = badge.icon
                        return (
                            <motion.div
                                key={badge.label}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Icon className="w-4 h-4 text-[var(--color-gold)]" />
                                <div className="text-sm">
                                    <span className="text-white font-medium">{badge.label}</span>
                                    <span className="text-[var(--color-subtle)] ml-1">{badge.sublabel}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// ============================================
// ANIMATED HERO METRICS (Phase 181 Enhancement)
// ============================================
interface HeroMetricProps {
    value: string
    label: string
    suffix?: string
    color?: string
    delay?: number
}

export function AnimatedHeroMetric({ value, label, suffix = '', color = 'var(--color-foreground)', delay = 0 }: HeroMetricProps) {
    const [displayValue, setDisplayValue] = useState('0')
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))

    const animate = useCallback(() => {
        const duration = 2000
        const steps = 60
        const stepDuration = duration / steps
        const increment = numericValue / steps

        let current = 0
        let step = 0

        const timer = setInterval(() => {
            step++
            current += increment

            if (step >= steps) {
                setDisplayValue(value)
                clearInterval(timer)
            } else {
                if (value.includes('$')) {
                    setDisplayValue(`$${Math.floor(current)}M`)
                } else if (value.includes('%')) {
                    setDisplayValue(`${Math.floor(current)}%`)
                } else {
                    setDisplayValue(`${Math.floor(current)}`)
                }
            }
        }, stepDuration)

        return () => clearInterval(timer)
    }, [numericValue, value])

    useEffect(() => {
        const timeout = setTimeout(animate, delay)
        return () => clearTimeout(timeout)
    }, [animate, delay])

    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay / 1000, duration: 0.8 }}
        >
            <div
                className="text-[2.5rem] md:text-[3.5rem] font-serif font-normal tracking-tight transition-all duration-500"
                style={{ color }}
            >
                {displayValue}
                <span className="text-[var(--color-muted)]">{suffix}</span>
            </div>
            <div className="text-[0.65rem] text-[var(--color-subtle)] uppercase tracking-[0.25em] mt-2 font-medium">
                {label}
            </div>
            {/* Hover glow effect */}
            <div
                className="absolute inset-0 -m-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                }}
            />
        </motion.div>
    )
}

// ============================================
// TESTIMONIAL QUOTE ROTATION (Phase 187)
// ============================================
const testimonialQuotes = [
    {
        quote: "Zero G Foundry delivered what other AI vendors couldn't—production-grade accuracy that our team actually trusts.",
        author: "COO",
        company: "Fortune 100 Insurance Company"
    },
    {
        quote: "The RLHF approach made all the difference. Our document processing went from 60% to 99.7% accuracy.",
        author: "Chief Risk Officer",
        company: "Top-20 Global Bank"
    },
    {
        quote: "First AI project that actually delivered measurable ROI. $8.2M in savings in the first year alone.",
        author: "VP of Operations",
        company: "Healthcare Enterprise"
    },
]

export function TestimonialRotation() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonialQuotes.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const testimonial = testimonialQuotes[currentIndex]

    return (
        <div className="py-16 border-t border-[var(--color-border)]">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-[var(--color-gold)] mb-4">
                                <Star className="w-6 h-6 mx-auto fill-current" />
                            </div>
                            <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="text-[var(--color-muted)]">
                                <span className="font-medium text-white">{testimonial.author}</span>
                                <span className="mx-2">•</span>
                                <span>{testimonial.company}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonialQuotes.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex
                                        ? 'bg-[var(--color-gold)] w-8'
                                        : 'bg-[var(--color-border)] w-4 hover:bg-[var(--color-muted)]'
                                    }`}
                                aria-label={`View testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
