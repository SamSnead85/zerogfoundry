import { ArrowRight, Shield, Clock, DollarSign, Check, FileCheck, Stethoscope, FileText } from 'lucide-react'
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
        icon: FileCheck,
        title: 'Prior Authorization Processing',
        challenge: '40-60% of requests require manual review, causing delays and patient frustration.',
        solution: '95% automated approval/denial with full audit trail and explainable decisions.',
        results: [
            '$8M annual savings',
            '72-hour reduction in processing time',
            '95% automation rate',
        ],
        color: 'var(--color-accent)',
    },
    {
        icon: Stethoscope,
        title: 'Clinical Documentation',
        challenge: 'Physicians spend 2+ hours daily on documentation, leading to burnout and reduced patient time.',
        solution: 'AI-powered documentation with HIPAA compliance and physician-approved workflows.',
        results: [
            '60% reduction in documentation time',
            'Improved accuracy and completeness',
            'Higher physician satisfaction',
        ],
        color: 'var(--color-success)',
    },
    {
        icon: FileText,
        title: 'Claims Processing',
        challenge: 'High error rates and manual review bottlenecks slow down reimbursement cycles.',
        solution: 'Intelligent claims adjudication with explainable AI and real-time validation.',
        results: [
            '85% straight-through processing',
            '$12M annual savings',
            '48-hour cycle reduction',
        ],
        color: 'var(--color-warning)',
    },
]

const trustSignals = [
    'HIPAA Compliance Architecture',
    'SOC 2 Type II Framework',
    'Healthcare-specific RLHF with Clinical Experts',
    'PHI Data Protection Standards',
    'Audit Trail & Explainability',
    'EHR/EMR Integration Experience',
]

export default function Healthcare() {
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
                        <p className="text-eyebrow mb-6">Healthcare Solutions</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">AI Transformation for Healthcare Operations</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            From prior authorization to clinical documentation, we deliver production-grade AI
                            that meets the rigorous standards of healthcare.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Solutions"
                        title="Healthcare Use Cases"
                        subtitle="Proven AI solutions for the operational challenges facing healthcare organizations."
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
                            <span className="badge mb-4">Compliance & Trust</span>
                            <h2 className="text-white mb-6">Built for Healthcare Standards</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                                Healthcare AI requires more than just accuracy—it demands compliance,
                                auditability, and trust. Our solutions are designed from the ground up
                                to meet the unique requirements of healthcare organizations.
                            </p>
                            <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Healthcare AI Assessment
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

            {/* Why Healthcare */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mx-auto mb-4">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Compliance First</h3>
                            <p className="text-[var(--color-muted)]">
                                HIPAA-compliant architecture with PHI protection built into every solution.
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)] mx-auto mb-4">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Clinical RLHF</h3>
                            <p className="text-[var(--color-muted)]">
                                Our models are refined by clinical experts who understand healthcare workflows.
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-warning)]/10 flex items-center justify-center text-[var(--color-warning)] mx-auto mb-4">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                            <p className="text-[var(--color-muted)]">
                                Quantifiable savings and efficiency gains that justify your investment.
                            </p>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Transform Your Healthcare Operations</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            Join leading healthcare organizations that trust Zero G Foundry for their
                            AI transformation initiatives.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Healthcare Assessment
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
