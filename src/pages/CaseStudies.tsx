import { ArrowRight, CheckCircle, Clock, BarChart3, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const caseStudyData = {
    title: 'Transforming Claims Processing for a Top-5 Insurer',
    client: 'Fortune 100 Insurance Company',
    industry: 'Insurance / Financial Services',
    timeline: '20 weeks total',
    challenge: `A Fortune 100 insurance company was struggling with claims processing inefficiency. 
    45% of claims required manual review, costing $8M annually in labor and causing 
    customer satisfaction issues due to slow processing times.`,
    phases: [
        {
            title: 'Assessment Phase',
            duration: '4 weeks',
            activities: [
                'Analyzed 50,000 historical claims',
                'Identified 12 key failure modes causing manual review',
                'Quantified opportunity: $3.5M in annual savings at 90% automation',
            ],
        },
        {
            title: 'Solution Development',
            duration: '12 weeks',
            activities: [
                'Generated 100,000 synthetic training examples using proprietary data generation',
                'Applied RLHF with 5 senior claims adjusters over 200 hours',
                'Achieved 92% accuracy on validation set (vs. 45% baseline)',
            ],
        },
        {
            title: 'Deployment & Optimization',
            duration: '4 weeks',
            activities: [
                "Deployed to client's cloud infrastructure (AWS)",
                'Integrated with existing claims management system',
                'Achieved 95% straight-through processing in production',
            ],
        },
    ],
    results: [
        { metric: '95%', label: 'Automation Rate', subtext: 'Up from 55%' },
        { metric: '$3.8M', label: 'Annual Savings', subtext: 'Exceeded projection' },
        { metric: '48hr', label: 'Processing Reduction', subtext: 'Cycle time improvement' },
        { metric: '+22', label: 'CSAT Increase', subtext: 'Points improvement' },
    ],
    testimonial: {
        quote: `Zero G Foundry didn't just deliver a model—they delivered a transformation. Their 
      RLHF approach ensured our claims adjusters trusted the AI, and the results speak 
      for themselves. This is the first AI project that's actually delivered on its promises.`,
        author: 'Chief Operations Officer',
        company: 'Fortune 100 Insurance Company',
    },
}

export default function CaseStudies() {
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
                        <p className="text-eyebrow mb-6">Case Studies</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Proof of Results</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Real outcomes from real engagements. See how we've delivered transformational
                            results for Fortune 1000 companies.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Featured Case Study */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="mb-12">
                        <Card className="p-8 lg:p-12">
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="badge">Featured</span>
                                <span className="text-[var(--color-muted)]">{caseStudyData.industry}</span>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">{caseStudyData.title}</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-4xl">
                                {caseStudyData.challenge}
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                                {caseStudyData.results.map((result, i) => (
                                    <div key={i} className="p-4 border-l border-[var(--color-border)]">
                                        <div className="text-2xl font-semibold text-[var(--color-foreground)] mb-1">
                                            {result.metric}
                                        </div>
                                        <div className="text-[var(--color-muted)] text-sm">{result.label}</div>
                                        <div className="text-[var(--color-subtle)] text-xs mt-1">{result.subtext}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>

                {/* Our Approach Timeline */}
                <ScrollReveal>
                    <SectionHeader
                        title="Our Approach"
                        subtitle={`Delivered in ${caseStudyData.timeline}`}
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {caseStudyData.phases.map((phase, index) => (
                        <ScrollReveal key={phase.title} delay={index * 0.1}>
                            <Card className="h-full" padding="lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                                        <span className="text-sm text-[var(--color-muted)]">{phase.duration}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {phase.activities.map((activity, i) => (
                                        <li key={i} className="flex items-start gap-2 text-[var(--color-muted)]">
                                            <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-1" />
                                            <span className="text-sm">{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Testimonial */}
                <ScrollReveal>
                    <Card className="p-8 lg:p-12 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                        <div className="max-w-4xl mx-auto text-center">
                            <Award className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
                            <blockquote className="text-xl lg:text-2xl text-white italic leading-relaxed mb-8">
                                "{caseStudyData.testimonial.quote}"
                            </blockquote>
                            <div>
                                <p className="text-white font-semibold">{caseStudyData.testimonial.author}</p>
                                <p className="text-[var(--color-muted)]">{caseStudyData.testimonial.company}</p>
                            </div>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* More Case Studies Coming */}
            <Section>
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-8 opacity-75">
                            <span className="badge mb-4">Coming Soon</span>
                            <h3 className="text-xl font-semibold text-white mb-2">Prior Authorization Automation</h3>
                            <p className="text-[var(--color-muted)] mb-4">
                                How a major health plan reduced prior auth processing time from 72 hours to 4 hours.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    Healthcare
                                </span>
                                <span className="flex items-center gap-1">
                                    <BarChart3 className="w-4 h-4" />
                                    $8M savings
                                </span>
                            </div>
                        </Card>

                        <Card className="p-8 opacity-75">
                            <span className="badge mb-4">Coming Soon</span>
                            <h3 className="text-xl font-semibold text-white mb-2">Fraud Detection Enhancement</h3>
                            <p className="text-[var(--color-muted)] mb-4">
                                Reducing false positives by 40% while increasing fraud detection by 25%.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    Financial Services
                                </span>
                                <span className="flex items-center gap-1">
                                    <BarChart3 className="w-4 h-4" />
                                    $15M protected
                                </span>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Ready to Be Our Next Success Story?</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            Let's discuss how we can deliver similar results for your organization.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Your Assessment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
