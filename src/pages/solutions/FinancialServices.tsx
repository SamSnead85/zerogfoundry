import { ArrowRight, Shield, Clock, DollarSign, Check, AlertTriangle, FileSearch, Scale } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../../components'

const useCases = [
    {
        icon: FileSearch,
        title: 'Insurance Claims Processing',
        challenge: '30-40% of claims require manual review, creating bottlenecks and customer dissatisfaction.',
        solution: 'Intelligent claims adjudication with 95% accuracy and full explainability for audits.',
        results: [
            '$50-100 savings per claim',
            'Millions in annual savings',
            '95% automation rate',
        ],
        color: 'var(--color-accent)',
    },
    {
        icon: AlertTriangle,
        title: 'Fraud Detection',
        challenge: 'High false positive rates waste investigator time while real fraud slips through.',
        solution: 'Real-time fraud detection with explainable AI that investigators can trust.',
        results: [
            '40% reduction in false positives',
            '25% increase in fraud detection',
            'Real-time alerting',
        ],
        color: 'var(--color-error)',
    },
    {
        icon: Scale,
        title: 'Regulatory Compliance',
        challenge: "Manual compliance review is slow, error-prone, and doesn't scale with regulatory changes.",
        solution: 'Automated compliance monitoring with comprehensive audit trails and real-time updates.',
        results: [
            '70% reduction in review time',
            'Zero audit failures',
            'Real-time compliance alerts',
        ],
        color: 'var(--color-success)',
    },
]

const trustSignals = [
    'SOC 2 Type II Framework',
    'ISO 27001 Standards',
    'Financial Regulatory Expertise',
    'Explainable AI for Auditors',
    'Real-time Risk Monitoring',
    'Enterprise Security Architecture',
]

export default function FinancialServices() {
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
                        <p className="text-eyebrow mb-6">Financial Services Solutions</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">AI Transformation for Financial Services & Insurance</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            From fraud detection to regulatory compliance, we build AI systems that financial
                            institutions can trust.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Solutions"
                        title="Financial Services Use Cases"
                        subtitle="Proven AI solutions for the operational challenges facing financial institutions."
                    />
                </ScrollReveal>

                <div className="space-y-12">
                    {useCases.map((useCase, index) => (
                        <ScrollReveal key={useCase.title} delay={index * 0.1}>
                            <Card className="overflow-hidden" padding="none">
                                <div className="grid lg:grid-cols-2">
                                    <div className="p-8 lg:p-12">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                                            style={{
                                                background: `${useCase.color}15`,
                                                color: useCase.color
                                            }}
                                        >
                                            <useCase.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-error)] uppercase tracking-wider mb-2">Challenge</h4>
                                            <p className="text-[var(--color-muted)]">{useCase.challenge}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-success)] uppercase tracking-wider mb-2">Our Solution</h4>
                                            <p className="text-[var(--color-muted)]">{useCase.solution}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 lg:p-12 bg-[var(--color-background)]/50 flex flex-col justify-center">
                                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Results</h4>
                                        <div className="space-y-4">
                                            {useCase.results.map((result, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <div
                                                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{ background: `${useCase.color}20`, color: useCase.color }}
                                                    >
                                                        <Check className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-white font-medium text-lg">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Trust Signals */}
            <Section>
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge mb-4">Security & Compliance</span>
                            <h2 className="text-white mb-6">Built for Financial Standards</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                                Financial services AI requires enterprise-grade security, regulatory compliance,
                                and explainability for auditors. Our solutions meet the highest standards.
                            </p>
                            <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Financial Services Assessment
                            </Button>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {trustSignals.map((signal) => (
                                <StaggerItem key={signal}>
                                    <Card className="flex items-start gap-3" padding="sm">
                                        <Shield className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                                        <span className="text-white text-sm">{signal}</span>
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Why Financial Services */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mx-auto mb-4">
                                <Scale className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Regulatory Ready</h3>
                            <p className="text-[var(--color-muted)]">
                                Explainable AI that satisfies regulatory requirements and auditor scrutiny.
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)] mx-auto mb-4">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Domain RLHF</h3>
                            <p className="text-[var(--color-muted)]">
                                Models refined by financial services experts who understand your business.
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-warning)]/10 flex items-center justify-center text-[var(--color-warning)] mx-auto mb-4">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                            <p className="text-[var(--color-muted)]">
                                Quantifiable savings and risk reduction that deliver measurable value.
                            </p>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Transform Your Financial Operations</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            Join leading financial institutions that trust Zero G Foundry for their
                            AI transformation initiatives.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Financial Services Assessment
                            </Button>
                            <Button to="/case-studies" variant="secondary" size="lg">
                                View Case Studies
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
