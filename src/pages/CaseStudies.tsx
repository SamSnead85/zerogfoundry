import { TrendingUp, Building2, Shield, ArrowRight, Clock, Users, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const caseStudies = [
    {
        id: 'healthcare-claims',
        title: 'Claims Processing Transformation',
        industry: 'Healthcare / Insurance',
        icon: Building2,
        client: 'Fortune 100 Insurer',
        challenge: 'Manual claims review costing $8M annually with 45% requiring human intervention',
        solution: 'RLHF-trained claims adjudication AI with domain expert feedback loops',
        results: [
            { metric: '95%', label: 'Automation Rate', prev: '55%' },
            { metric: '$3.8M', label: 'Annual Savings', prev: '-' },
            { metric: '48hrs', label: 'Faster Processing', prev: '-' },
            { metric: '+22pts', label: 'CSAT Improvement', prev: '-' },
        ],
        engagement: { duration: '18 months', teamSize: 12, tech: ['NVIDIA DGX', 'Azure ML', 'Custom RLHF'] },
        testimonial: {
            quote: "Zero G Foundry didn't just deliver a model—they delivered a transformation. Their RLHF approach ensured our claims adjusters trusted the AI.",
            author: 'Chief Operations Officer',
            company: 'Fortune 100 Insurance Company',
        },
    },
    {
        id: 'finserv-compliance',
        title: 'Regulatory Compliance Automation',
        industry: 'Financial Services',
        icon: Shield,
        client: 'Top-20 Global Bank',
        challenge: '6-week compliance review cycles with 4% error rate on critical filings',
        solution: 'Document intelligence platform with custom NLP for regulatory classification',
        results: [
            { metric: '92%', label: 'Time Reduction', prev: '-' },
            { metric: '99.7%', label: 'Accuracy Rate', prev: '96%' },
            { metric: '$5.2M', label: 'Annual Savings', prev: '-' },
            { metric: '0', label: 'Critical Errors', prev: '4%' },
        ],
        engagement: { duration: '14 months', teamSize: 8, tech: ['GCP Vertex AI', 'Snowflake', 'Custom NLP'] },
        testimonial: {
            quote: "The compliance review process that used to take 6 weeks now takes 4 days. This has fundamentally changed how we handle regulatory submissions.",
            author: 'Chief Risk Officer',
            company: 'Top-20 Global Financial Institution',
        },
    },
]

export default function CaseStudies() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Client Success Stories
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Proven Enterprise
                                <span className="italic text-[var(--color-champagne)]"> Impact</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                Detailed case studies showcasing our methodology, technology stack,
                                and measurable outcomes across industries.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Case Studies */}
            {caseStudies.map((study, index) => (
                <Section key={study.id} background={index % 2 === 0 ? 'default' : 'alt'}>
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <span className="badge mb-4">{study.industry}</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                                    {study.title}
                                </h2>
                                <p className="text-[var(--color-muted)]">{study.client}</p>
                            </div>

                            {/* Engagement Scope */}
                            <div className="flex flex-wrap items-center justify-center gap-6 mb-12 p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)]">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                                    <span className="text-sm text-white font-medium">{study.engagement.duration}</span>
                                </div>
                                <div className="w-px h-4 bg-[var(--color-border)]" />
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                    <span className="text-sm text-white font-medium">{study.engagement.teamSize}-Person Team</span>
                                </div>
                                <div className="w-px h-4 bg-[var(--color-border)]" />
                                <div className="flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-[var(--color-success)]" />
                                    <span className="text-sm text-[var(--color-muted)]">{study.engagement.tech.join(' • ')}</span>
                                </div>
                            </div>

                            {/* Challenge & Solution */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <Card className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-error)]" />
                                        The Challenge
                                    </h3>
                                    <p className="text-[var(--color-muted)]">{study.challenge}</p>
                                </Card>
                                <Card className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                        Our Solution
                                    </h3>
                                    <p className="text-[var(--color-muted)]">{study.solution}</p>
                                </Card>
                            </div>

                            {/* Results */}
                            <div className="grid md:grid-cols-4 gap-4 mb-12">
                                {study.results.map((result) => (
                                    <motion.div
                                        key={result.label}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] text-center"
                                    >
                                        <p className="text-3xl font-bold text-[var(--color-gold)] mb-1">
                                            {result.metric}
                                        </p>
                                        <p className="text-sm text-white font-medium">{result.label}</p>
                                        {result.prev !== '-' && (
                                            <p className="text-xs text-[var(--color-subtle)] mt-1">
                                                was {result.prev}
                                            </p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Testimonial */}
                            <Card className="p-8 border-l-4 border-l-[var(--color-gold)]">
                                <blockquote className="text-lg text-white italic mb-6">
                                    "{study.testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                                        <span className="text-[var(--color-gold)] font-bold">
                                            {study.testimonial.author.split(' ').map(w => w[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">{study.testimonial.author}</p>
                                        <p className="text-[var(--color-muted)] text-sm">{study.testimonial.company}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </ScrollReveal>
                </Section>
            ))}

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <Card className="p-12 text-center">
                        <TrendingUp className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Ready to Achieve Similar Results?
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                            Let's discuss how our methodology can deliver production-grade AI
                            and measurable impact for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                Schedule Consultation
                            </Button>
                            <Button to="/roi-calculator" variant="secondary">
                                Calculate Your ROI
                            </Button>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
