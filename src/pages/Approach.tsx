import { ArrowRight, Check, Clock, DollarSign, Target, FileText, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const phases = [
    {
        number: '01',
        title: 'Paid Discovery & Value Quantification',
        subtitle: 'The Assessment',
        investment: '$75,000 - $250,000',
        timeline: '4-6 weeks',
        description: 'We deep dive into your specific workflow, establish baseline performance, and quantify the total value of improvement with your finance team.',
        deliverables: [
            'Deep dive into specific client workflow (e.g., claims processing, prior authorization)',
            'Establish baseline performance using our benchmark framework',
            "Quantify total value of improvement with client's finance team",
        ],
        outcome: 'Comprehensive report with baseline metrics, gap analysis, and ROI projection',
        color: 'var(--color-accent)',
    },
    {
        number: '02',
        title: 'Fixed-Fee Solution Development',
        subtitle: 'Implementation',
        investment: '15-25% of 1-year quantified value',
        timeline: '8-16 weeks',
        description: 'We develop your solution using our proprietary DGX infrastructure, data generation, and RLHF to achieve target outcomes.',
        deliverables: [
            'Develop solution using proprietary DGX infrastructure, data generation, and RLHF',
            'Iterate to achieve target outcome (e.g., 95% success rate)',
            "Deploy to client's infrastructure (infrastructure-agnostic)",
        ],
        outcome: 'Production-ready AI system achieving guaranteed performance targets',
        color: 'var(--color-success)',
    },
    {
        number: '03',
        title: 'Performance Guarantee & Optimization',
        subtitle: 'Ongoing Partnership',
        investment: 'Annual retainer + Performance Kicker',
        timeline: 'Ongoing',
        description: 'We continuously monitor, maintain, and improve your AI system with guaranteed performance floors.',
        deliverables: [
            'Continuous monitoring and maintenance',
            'Model updates and retraining',
            'Human-in-the-loop feedback integration',
        ],
        outcome: 'Performance floor guarantee (e.g., "success rate will not drop below 85%")',
        color: 'var(--color-warning)',
    },
]

export default function Approach() {
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
                        <p className="text-eyebrow mb-6">Our Methodology</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">How We Guarantee Results</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            We don't sell AI platforms. We deliver guaranteed outcomes through a proven,
                            three-phase methodology that de-risks your investment and ensures measurable business value.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Journey Timeline */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="The Journey"
                        title="Three Phases to Transformation"
                        subtitle="A structured approach that aligns our incentives with your success."
                    />
                </ScrollReveal>

                {/* Visual Timeline */}
                <div className="relative">
                    {/* Connection Line - Understated */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[var(--color-border)]" />

                    <div className="grid lg:grid-cols-3 gap-8 relative">
                        {phases.map((phase, index) => (
                            <ScrollReveal key={phase.number} delay={index * 0.1}>
                                <div className="relative">
                                    {/* Phase Number - Understated */}
                                    <div className="w-12 h-12 rounded-md bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center text-lg font-medium text-[var(--color-foreground)] mx-auto lg:mx-0 mb-6 relative z-10">
                                        {phase.number}
                                    </div>

                                    <Card className="h-full p-6">
                                        <div className="text-center mb-6">
                                            <span className="badge mb-2">{phase.subtitle}</span>
                                            <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                                        </div>

                                        <p className="text-[var(--color-muted)] mb-6 text-center">
                                            {phase.description}
                                        </p>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-center gap-3 text-sm">
                                                <DollarSign className="w-5 h-5 text-[var(--color-success)]" />
                                                <span className="text-white">{phase.investment}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                                                <span className="text-white">{phase.timeline}</span>
                                            </div>
                                        </div>

                                        <div className="border-t border-[var(--color-border)] pt-6">
                                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                                <Target className="w-4 h-4" />
                                                Process
                                            </h4>
                                            <ul className="space-y-2">
                                                {phase.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                                                        <Check className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-6 p-4 rounded-lg bg-[var(--color-background)]/50">
                                            <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                Deliverable
                                            </h4>
                                            <p className="text-sm text-[var(--color-muted)]">{phase.outcome}</p>
                                        </div>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why It Works */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="The Advantage"
                        title="Why This Model Works"
                        subtitle="Our hybrid value-based pricing aligns our success with yours."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StaggerItem>
                        <Card className="h-full" padding="lg">
                            <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">De-Risked Investment</h3>
                            <p className="text-[var(--color-muted)]">
                                The paid assessment filters non-serious inquiries and gives you a clear picture
                                of ROI before any major commitment.
                            </p>
                        </Card>
                    </StaggerItem>

                    <StaggerItem>
                        <Card className="h-full" padding="lg">
                            <div className="w-12 h-12 rounded-lg bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)] mb-4">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Value-Aligned Pricing</h3>
                            <p className="text-[var(--color-muted)]">
                                Our fees are tied to the value we create. When you save $3.5M annually,
                                paying $700K for the solution delivers 5X+ ROI.
                            </p>
                        </Card>
                    </StaggerItem>

                    <StaggerItem>
                        <Card className="h-full" padding="lg">
                            <div className="w-12 h-12 rounded-lg bg-[var(--color-warning)]/10 flex items-center justify-center text-[var(--color-warning)] mb-4">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Long-Term Partnership</h3>
                            <p className="text-[var(--color-muted)]">
                                The performance guarantee and kicker structure keeps us invested in your
                                continued success, not just the initial deployment.
                            </p>
                        </Card>
                    </StaggerItem>
                </StaggerContainer>
            </Section>

            {/* Example ROI Calculator */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge mb-4">Example</span>
                            <h2 className="text-white mb-6">See the Value in Action</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                                For a client with $3.5M in annual savings opportunity from claims automation:
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-background)]">
                                    <span className="text-[var(--color-muted)]">Phase 1: Assessment</span>
                                    <span className="text-white font-semibold">$150,000</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-background)]">
                                    <span className="text-[var(--color-muted)]">Phase 2: Implementation (20%)</span>
                                    <span className="text-white font-semibold">$700,000</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-background)]">
                                    <span className="text-[var(--color-muted)]">Phase 3: Annual Retainer</span>
                                    <span className="text-white font-semibold">$85,000/year</span>
                                </div>
                                <div className="border-t border-[var(--color-border)] pt-4 mt-4">
                                    <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-success)]/10">
                                        <span className="text-white font-semibold">Year 1 Net Savings</span>
                                        <span className="text-[var(--color-success)] font-bold text-xl">$2.57M</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">5-Year Impact</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[var(--color-muted)]">Total Investment</span>
                                        <span className="text-white">$1.19M</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-[var(--color-background)]">
                                        <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: '15%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[var(--color-muted)]">Total Savings</span>
                                        <span className="text-white">$17.5M</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-[var(--color-background)]">
                                        <div className="h-full rounded-full bg-[var(--color-success)]" style={{ width: '100%' }} />
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-[var(--color-border)]">
                                    <div className="text-center">
                                        <span className="text-5xl font-bold text-[var(--color-success)]">14.7x</span>
                                        <p className="text-[var(--color-muted)] mt-2">Return on Investment</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            The first step is a conversation. Let's discuss your operational challenges
                            and explore whether we're the right partner for your AI transformation.
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
