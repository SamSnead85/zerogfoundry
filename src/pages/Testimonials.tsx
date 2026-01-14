import { useState } from 'react'
import { Play, ArrowRight, Quote, Building2, Filter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

interface Testimonial {
    id: string
    client: string
    industry: string
    role: string
    quote: string
    metrics: { label: string; value: string }[]
    hasVideo: boolean
    thumbnail?: string
}

const testimonials: Testimonial[] = [
    {
        id: 'fortune100-insurer',
        client: 'Fortune 100 Insurance Company',
        industry: 'Healthcare',
        role: 'Chief Operations Officer',
        quote: "Zero G Foundry didn't just deliver a model—they delivered a transformation. Their RLHF approach ensured our claims adjusters trusted the AI, and the results speak for themselves. This is the first AI project that's actually delivered on its promises.",
        metrics: [
            { label: 'Automation Rate', value: '95%' },
            { label: 'Annual Savings', value: '$3.8M' },
        ],
        hasVideo: true,
    },
    {
        id: 'global-bank',
        client: 'Top-20 Global Bank',
        industry: 'Financial Services',
        role: 'Chief Risk Officer',
        quote: "The compliance review process that used to take our team 6 weeks now takes 4 days. Zero G Foundry's approach to document intelligence has fundamentally changed how we handle regulatory submissions.",
        metrics: [
            { label: 'Processing Time', value: '-92%' },
            { label: 'Accuracy', value: '99.7%' },
        ],
        hasVideo: true,
    },
    {
        id: 'regional-health-plan',
        client: 'Regional Health Plan (2M Members)',
        industry: 'Healthcare',
        role: 'Chief Medical Officer',
        quote: "Our providers went from frustrated to delighted. Prior auth used to be our biggest pain point—now it's a competitive advantage. The turnaround time improvement alone has transformed our provider relationships.",
        metrics: [
            { label: 'Straight-Through', value: '85%' },
            { label: 'Provider NPS', value: '+35pts' },
        ],
        hasVideo: true,
    },
    {
        id: 'specialty-pharma',
        client: 'Specialty Pharma Company',
        industry: 'Healthcare',
        role: 'VP of Market Access',
        quote: "We were drowning in prior authorization denials. Zero G Foundry built a system that not only processes faster but actually helps us write stronger clinical justifications. Our approval rates are up 23%.",
        metrics: [
            { label: 'Approval Rate', value: '+23%' },
            { label: 'Processing Speed', value: '4x' },
        ],
        hasVideo: false,
    },
    {
        id: 'investment-firm',
        client: 'Global Investment Firm',
        industry: 'Financial Services',
        role: 'Head of Operations',
        quote: "The document processing capabilities have been game-changing for our regulatory reporting. What used to require a team of 15 analysts is now handled automatically with better accuracy.",
        metrics: [
            { label: 'FTE Reduction', value: '12 FTEs' },
            { label: 'Error Rate', value: '-94%' },
        ],
        hasVideo: true,
    },
]

const industries = ['All', 'Healthcare', 'Financial Services']

export default function Testimonials() {
    const [selectedIndustry, setSelectedIndustry] = useState('All')
    const [playingVideo, setPlayingVideo] = useState<string | null>(null)

    const filteredTestimonials = selectedIndustry === 'All'
        ? testimonials
        : testimonials.filter(t => t.industry === selectedIndustry)

    return (
        <>
            {/* Hero */}
            <Section className="pt-16 pb-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Client Stories</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Hear From Our Clients
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Real stories from enterprise leaders who've transformed their operations
                            with AI that actually works in production.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Featured Video */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-0 overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="relative aspect-video lg:aspect-auto bg-[var(--color-background)] flex items-center justify-center cursor-pointer group"
                                onClick={() => setPlayingVideo('featured')}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/20 to-transparent" />
                                <div className="w-20 h-20 rounded-full bg-[var(--color-gold)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-[#050505] ml-1" />
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="badge badge-gold">Featured Story</span>
                                </div>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col justify-center">
                                <Quote className="w-10 h-10 text-[var(--color-gold)]/30 mb-4" />
                                <blockquote className="text-xl text-white italic leading-relaxed mb-6">
                                    "{testimonials[0].quote}"
                                </blockquote>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-bold">
                                        {testimonials[0].role.split(' ').map(w => w[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{testimonials[0].role}</p>
                                        <p className="text-sm text-[var(--color-muted)]">{testimonials[0].client}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    {testimonials[0].metrics.map((metric) => (
                                        <div key={metric.label}>
                                            <p className="text-2xl font-serif text-[var(--color-gold)]">{metric.value}</p>
                                            <p className="text-xs text-[var(--color-muted)]">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* All Testimonials */}
            <Section>
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-serif text-white">All Testimonials</h2>
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-[var(--color-muted)]" />
                        <div className="flex gap-2">
                            {industries.map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => setSelectedIndustry(industry)}
                                    className={`px-4 py-2 text-sm rounded-lg transition-all ${selectedIndustry === industry
                                        ? 'bg-[var(--color-foreground)] text-[#050505] font-medium'
                                        : 'bg-[var(--color-card)] text-[var(--color-muted)] hover:text-white border border-[var(--color-border)]'
                                        }`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndustry}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {filteredTestimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                                            <Building2 className="w-5 h-5 text-[var(--color-gold)]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">{testimonial.client}</p>
                                            <p className="text-xs text-[var(--color-muted)]">{testimonial.industry}</p>
                                        </div>
                                    </div>
                                    {testimonial.hasVideo && (
                                        <button
                                            onClick={() => setPlayingVideo(testimonial.id)}
                                            className="p-2 rounded-lg bg-[var(--color-gold)]/10 text-[var(--color-gold)] hover:bg-[var(--color-gold)]/20 transition-colors"
                                        >
                                            <Play className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                                <blockquote className="text-[var(--color-muted)] italic leading-relaxed mb-4 text-sm">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                                    <p className="text-xs text-[var(--color-subtle)]">{testimonial.role}</p>
                                    <div className="flex gap-4">
                                        {testimonial.metrics.map((metric) => (
                                            <div key={metric.label} className="text-right">
                                                <p className="text-sm font-bold text-[var(--color-gold)]">{metric.value}</p>
                                                <p className="text-xs text-[var(--color-subtle)]">{metric.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Section>

            {/* Video Modal */}
            <AnimatePresence>
                {playingVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={() => setPlayingVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="w-full max-w-4xl aspect-video bg-[var(--color-card)] rounded-2xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="text-[var(--color-muted)]">Video player placeholder - Click outside to close</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif text-white mb-6">
                            Ready to Join Them?
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-10">
                            Schedule a consultation to discuss how we can deliver similar results for your organization.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Consultation
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
