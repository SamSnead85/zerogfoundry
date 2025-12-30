import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

const industries = ['Healthcare', 'Financial Services', 'Insurance', 'Other']
const impactRanges = ['< $1M', '$1M - $5M', '$5M - $20M', '$20M+']

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        title: '',
        industry: '',
        useCase: '',
        expectedImpact: '',
        phone: '',
        preferredContact: 'email',
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
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Contact</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Let's Quantify Your AI Opportunity</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Start with a conversation. Tell us about your operational challenges,
                            and we'll explore whether we're the right partner for your AI transformation.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Contact Form */}
            <Section background="alt">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <ScrollReveal>
                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Assessment</h2>

                                <form
                                    onSubmit={handleSubmit}
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    className="space-y-6"
                                >
                                    <input type="hidden" name="form-name" value="contact" />

                                    <div className="grid md:grid-cols-2 gap-6">
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

                                    <div className="grid md:grid-cols-2 gap-6">
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
                                            <label htmlFor="title" className="form-label">Title *</label>
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                required
                                                value={formData.title}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="Your role"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="industry" className="form-label">Industry *</label>
                                            <select
                                                id="industry"
                                                name="industry"
                                                required
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
                                        <div>
                                            <label htmlFor="expectedImpact" className="form-label">Expected Annual Impact</label>
                                            <select
                                                id="expectedImpact"
                                                name="expectedImpact"
                                                value={formData.expectedImpact}
                                                onChange={handleChange}
                                                className="form-input"
                                            >
                                                <option value="">Select range</option>
                                                {impactRanges.map(range => (
                                                    <option key={range} value={range}>{range}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="useCase" className="form-label">
                                            Describe the operational challenge you're looking to solve *
                                        </label>
                                        <textarea
                                            id="useCase"
                                            name="useCase"
                                            required
                                            rows={4}
                                            value={formData.useCase}
                                            onChange={handleChange}
                                            className="form-input resize-none"
                                            placeholder="Tell us about the workflow or process you'd like to transform..."
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="form-label">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Preferred Contact Method</label>
                                            <div className="flex gap-6 mt-3">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="preferredContact"
                                                        value="email"
                                                        checked={formData.preferredContact === 'email'}
                                                        onChange={handleChange}
                                                        className="w-4 h-4 text-[var(--color-accent)]"
                                                    />
                                                    <span className="text-white">Email</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="preferredContact"
                                                        value="phone"
                                                        checked={formData.preferredContact === 'phone'}
                                                        onChange={handleChange}
                                                        className="w-4 h-4 text-[var(--color-accent)]"
                                                    />
                                                    <span className="text-white">Phone</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                        icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                    </Button>
                                </form>
                            </Card>
                        </ScrollReveal>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6">
                        <ScrollReveal>
                            <Card padding="lg">
                                <h3 className="text-lg font-semibold text-white mb-4">Alternative Contact</h3>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:contact@zerogfoundry.com"
                                        className="flex items-start gap-3 text-[var(--color-muted)] hover:text-white transition-colors"
                                    >
                                        <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span>contact@zerogfoundry.com</span>
                                    </a>
                                    <div className="flex items-start gap-3 text-[var(--color-muted)]">
                                        <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span>San Francisco, CA</span>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <Card padding="lg">
                                <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
                                <ol className="space-y-4">
                                    {[
                                        'We review your submission within 24 hours',
                                        'Initial discovery call to understand your needs',
                                        'We scope a paid assessment ($75K-$250K)',
                                        'You receive baseline metrics and ROI projection',
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                                            </div>
                                            <span className="text-[var(--color-muted)] text-sm">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <Card padding="lg" className="bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent">
                                <h3 className="text-lg font-semibold text-white mb-2">For Investors</h3>
                                <p className="text-sm text-[var(--color-muted)] mb-4">
                                    Interested in investment opportunities or portfolio support?
                                </p>
                                <Button to="/investors" variant="secondary" size="sm" className="w-full">
                                    Investor Relations
                                </Button>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </Section>
        </>
    )
}
