import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

const industries = ['Healthcare', 'Financial Services', 'Insurance', 'Other']

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        title: '',
        industry: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission (replace with actual Netlify Forms or API)
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (isSubmitted) {
        return (
            <Section className="pt-32 pb-16 min-h-[80vh] flex items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-[var(--color-success)]" />
                    </div>
                    <h1 className="text-white mb-4">Thank You!</h1>
                    <p className="text-xl text-[var(--color-muted)] mb-8">
                        We've received your request and will be in touch within 24 hours to
                        schedule your AI Opportunity Assessment.
                    </p>
                    <Button to="/" variant="secondary">
                        Return to Home
                    </Button>
                </motion.div>
            </Section>
        )
    }

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-32 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Contact</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Let's Talk</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Start with a conversation. Tell us about your operational challenges,
                            and we'll explore whether we're the right partner for your AI transformation.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Contact Options */}
            <Section background="alt">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Book a Call */}
                        <ScrollReveal>
                            <Card className="p-8 lg:p-10 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">Book an Executive Briefing</h2>
                                        <p className="text-sm text-[var(--color-muted)]">30-minute discovery call</p>
                                    </div>
                                </div>

                                <p className="text-[var(--color-muted)] mb-8">
                                    Schedule a complimentary call to discuss your AI transformation goals
                                    and explore potential opportunities.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                        <Clock className="w-4 h-4" />
                                        <span>30 minutes</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                        <span>Understand your current challenges</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                        <span>Explore potential AI use cases</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                        <span>Discuss next steps</span>
                                    </div>
                                </div>

                                {/* Cal.com Embed Placeholder */}
                                <div className="p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-center">
                                    <p className="text-[var(--color-muted)] text-sm mb-4">
                                        Calendar booking widget
                                    </p>
                                    <a
                                        href="https://cal.com/zerogfoundry/executive-briefing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-[var(--color-foreground)] text-[#0a0a0a] font-medium text-sm rounded-lg transition-all hover:bg-[var(--color-champagne)]"
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Book via Cal.com
                                    </a>
                                </div>
                            </Card>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal delay={0.1}>
                            <Card className="p-8 lg:p-10 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-[var(--color-success)]" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">Send a Message</h2>
                                        <p className="text-sm text-[var(--color-muted)]">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    className="space-y-5"
                                >
                                    <input type="hidden" name="form-name" value="contact" />

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="form-label">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="company" className="form-label">Company *</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="Company name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="industry" className="form-label">Industry</label>
                                            <select
                                                id="industry"
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="form-input"
                                            >
                                                <option value="">Select industry</option>
                                                {industries.map(industry => (
                                                    <option key={industry} value={industry}>{industry}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="form-label">
                                            How can we help? *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-input resize-none"
                                            placeholder="Tell us about your AI transformation goals..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                        icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </Card>
                        </ScrollReveal>
                    </div>

                    {/* Contact Info */}
                    <ScrollReveal>
                        <div className="mt-12 pt-12 border-t border-[var(--color-border)]">
                            <div className="flex flex-wrap justify-center gap-12 text-center">
                                <div>
                                    <Mail className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-3" />
                                    <p className="text-white font-medium mb-1">Email</p>
                                    <a
                                        href="mailto:contact@zerogfoundry.com"
                                        className="text-[var(--color-muted)] hover:text-white transition-colors"
                                    >
                                        contact@zerogfoundry.com
                                    </a>
                                </div>
                                <div>
                                    <MapPin className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-3" />
                                    <p className="text-white font-medium mb-1">Location</p>
                                    <p className="text-[var(--color-muted)]">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>
        </>
    )
}
