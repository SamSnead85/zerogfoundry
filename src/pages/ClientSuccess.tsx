import { ArrowRight, Download, Filter, Clock, Users, Cpu, CheckCircle, Play } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

const caseStudies = [
    {
        id: 'healthcare-claims',
        industry: 'Healthcare',
        category: 'Claims Automation',
        client: 'Fortune 100 Insurance Company',
        title: 'Transforming Claims Processing with 95% Automation',
        challenge: 'A Fortune 100 insurance company was struggling with claims processing inefficiency. 45% of claims required manual review, costing $8M annually in labor and causing member satisfaction issues with extended processing times.',
        approach: [
            'Conducted comprehensive 6-week AI readiness assessment',
            'Developed custom NLP models for document classification',
            'Implemented RLHF pipeline with claims adjuster expertise',
            'Built real-time accuracy monitoring dashboard',
            'Deployed with fallback protocols for edge cases',
        ],
        results: [
            { metric: '95%', label: 'Automation Rate', before: '55%' },
            { metric: '$3.8M', label: 'Annual Savings', before: '$0' },
            { metric: '48hr', label: 'Processing Reduction', before: '5 days' },
            { metric: '+22pts', label: 'CSAT Improvement', before: 'Baseline' },
        ],
        engagement: {
            duration: '18 Months',
            team: '12-Person Team',
            tech: 'NVIDIA DGX • Azure ML • Custom RLHF',
        },
        testimonial: {
            quote: "Zero G Foundry didn't just deliver a model—they delivered a transformation. Their RLHF approach ensured our claims adjusters trusted the AI, and the results speak for themselves. This is the first AI project that's actually delivered on its promises.",
            author: 'Chief Operations Officer',
            company: 'Fortune 100 Insurance Company',
        },
        hasVideo: true,
        hasPDF: true,
    },
    {
        id: 'financial-compliance',
        industry: 'Financial Services',
        category: 'Document Intelligence',
        client: 'Top-20 Global Bank',
        title: 'Automating Regulatory Compliance with 99.7% Accuracy',
        challenge: 'A global financial institution needed to process thousands of regulatory documents across multiple jurisdictions. Manual review was creating bottlenecks and compliance risks with a 4% error rate in critical filings.',
        approach: [
            'Mapped regulatory document taxonomy across 15 jurisdictions',
            'Built multi-language NLP classification engine',
            'Implemented confidence scoring with human review triggers',
            'Created audit trail for compliance documentation',
            'Integrated with existing GRC platforms',
        ],
        results: [
            { metric: '92%', label: 'Processing Time Reduction', before: '6 weeks' },
            { metric: '99.7%', label: 'Classification Accuracy', before: '96%' },
            { metric: '$5.2M', label: 'Annual Cost Reduction', before: '$0' },
            { metric: '0', label: 'Critical Filing Errors', before: '12/year' },
        ],
        engagement: {
            duration: '14 Months',
            team: '8-Person Team',
            tech: 'GCP Vertex AI • Snowflake • Custom NLP',
        },
        testimonial: {
            quote: "The compliance review process that used to take our team 6 weeks now takes 4 days. Zero G Foundry's approach to document intelligence has fundamentally changed how we handle regulatory submissions.",
            author: 'Chief Risk Officer',
            company: 'Top-20 Global Financial Institution',
        },
        hasVideo: false,
        hasPDF: true,
    },
    {
        id: 'healthcare-prior-auth',
        industry: 'Healthcare',
        category: 'Prior Authorization',
        client: 'Regional Health Plan (2M Members)',
        title: 'Reducing Prior Auth Turnaround by 85%',
        challenge: 'A regional health plan serving 2 million members faced mounting prior authorization backlogs. Average turnaround exceeded 5 days, causing provider friction and member complaints. Manual review costs exceeded $4M annually.',
        approach: [
            'Analyzed 3 years of prior auth decisions for pattern recognition',
            'Built clinical criteria validation engine',
            'Implemented peer-to-peer review scheduling automation',
            'Created real-time decision support for clinical staff',
            'Deployed phased rollout across service categories',
        ],
        results: [
            { metric: '85%', label: 'Straight-Through Processing', before: '35%' },
            { metric: '4hrs', label: 'Average Turnaround', before: '5 days' },
            { metric: '$2.8M', label: 'Annual Savings', before: '$0' },
            { metric: '+35pts', label: 'Provider NPS', before: 'Baseline' },
        ],
        engagement: {
            duration: '10 Months',
            team: '6-Person Team',
            tech: 'AWS SageMaker • Epic Integration • FHIR APIs',
        },
        testimonial: {
            quote: "Our providers went from frustrated to delighted. Prior auth used to be our biggest pain point—now it's a competitive advantage.",
            author: 'Chief Medical Officer',
            company: 'Regional Health Plan',
        },
        hasVideo: true,
        hasPDF: true,
    },
]

const industries = ['All Industries', 'Healthcare', 'Financial Services']

export default function ClientSuccess() {
    const [selectedIndustry, setSelectedIndustry] = useState('All Industries')

    const filteredStudies = selectedIndustry === 'All Industries'
        ? caseStudies
        : caseStudies.filter(study => study.industry === selectedIndustry)

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
                        <p className="text-eyebrow mb-6">Client Success</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Proven Enterprise Impact
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Deep-dive case studies demonstrating measurable outcomes from real
                            enterprise AI transformations. Every engagement, guaranteed results.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Aggregate Metrics */}
            <Section background="alt" className="py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { metric: '$12M+', label: 'Average Annual Savings' },
                        { metric: '95%', label: 'Production Accuracy' },
                        { metric: '100%', label: 'Client Retention' },
                        { metric: '5x', label: 'Average ROI' },
                    ].map((item) => (
                        <div key={item.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-serif text-[var(--color-gold)] mb-2">
                                {item.metric}
                            </div>
                            <div className="text-sm text-[var(--color-muted)]">{item.label}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Filter & Case Studies */}
            <Section>
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-serif text-[var(--color-foreground)]">Case Studies</h2>
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
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        {filteredStudies.map((study, index) => (
                            <ScrollReveal key={study.id} delay={index * 0.1}>
                                <Card className="p-8 lg:p-10">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="badge">{study.industry}</span>
                                                <span className="text-xs text-[var(--color-subtle)]">•</span>
                                                <span className="text-xs text-[var(--color-muted)]">{study.category}</span>
                                            </div>
                                            <h3 className="text-2xl font-serif text-white mb-2">{study.title}</h3>
                                            <p className="text-[var(--color-muted)]">{study.client}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            {study.hasPDF && (
                                                <Button variant="secondary" size="sm" icon={<Download className="w-4 h-4" />}>
                                                    PDF
                                                </Button>
                                            )}
                                            {study.hasVideo && (
                                                <Button variant="secondary" size="sm" icon={<Play className="w-4 h-4" />}>
                                                    Video
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Engagement Scope */}
                                    <div className="flex flex-wrap items-center gap-6 p-4 bg-[var(--color-background)]/50 rounded-xl mb-8">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                                            <span className="text-sm text-white font-medium">{study.engagement.duration}</span>
                                        </div>
                                        <div className="w-px h-4 bg-[var(--color-border)]" />
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                            <span className="text-sm text-white font-medium">{study.engagement.team}</span>
                                        </div>
                                        <div className="w-px h-4 bg-[var(--color-border)]" />
                                        <div className="flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-[var(--color-success)]" />
                                            <span className="text-sm text-[var(--color-muted)]">{study.engagement.tech}</span>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-10">
                                        {/* Left Column */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
                                                The Challenge
                                            </h4>
                                            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                                                {study.challenge}
                                            </p>

                                            <h4 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
                                                Our Approach
                                            </h4>
                                            <ul className="space-y-3">
                                                {study.approach.map((step, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)] mt-1 flex-shrink-0" />
                                                        <span className="text-[var(--color-muted)] text-sm">{step}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Right Column - Results */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
                                                Results Delivered
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                {study.results.map((result) => (
                                                    <div
                                                        key={result.label}
                                                        className="p-4 bg-[var(--color-background)]/50 rounded-xl text-center"
                                                    >
                                                        <div className="text-2xl font-serif text-[var(--color-foreground)] mb-1">
                                                            {result.metric}
                                                        </div>
                                                        <div className="text-xs text-[var(--color-muted)] mb-1">{result.label}</div>
                                                        <div className="text-xs text-[var(--color-subtle)]">
                                                            Before: {result.before}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Testimonial */}
                                            <div className="p-6 bg-gradient-to-br from-[var(--color-card)] to-transparent rounded-xl border border-[var(--color-border)]">
                                                <blockquote className="text-white italic leading-relaxed mb-4">
                                                    "{study.testimonial.quote}"
                                                </blockquote>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] text-xs font-bold">
                                                        {study.testimonial.author.split(' ').map(w => w[0]).join('')}
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">{study.testimonial.author}</p>
                                                        <p className="text-[var(--color-subtle)] text-xs">{study.testimonial.company}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif text-[var(--color-foreground)] mb-6">
                            Ready to Become Our Next Success Story?
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-10">
                            Schedule a complimentary executive briefing to explore how we can deliver
                            similar outcomes for your organization.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Briefing
                            </Button>
                            <Button to="/assessment" variant="secondary" size="lg">
                                Start Assessment
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
