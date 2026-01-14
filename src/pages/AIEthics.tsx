import { motion } from 'framer-motion'
import { Shield, Brain, Eye, Users, Scale, AlertTriangle, CheckCircle, ArrowRight, FileText } from 'lucide-react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const principles = [
    {
        icon: Eye,
        title: 'Transparency',
        description: 'All AI decisions can be explained and audited. We maintain complete visibility into model behavior and decision-making processes.',
        commitments: [
            'Explainable AI outputs for all recommendations',
            'Full audit trails for regulatory compliance',
            'Clear documentation of model limitations',
        ],
    },
    {
        icon: Scale,
        title: 'Fairness & Equity',
        description: 'We actively test for and mitigate bias in all AI systems. Our models are evaluated across demographic groups to ensure equitable outcomes.',
        commitments: [
            'Regular bias testing and monitoring',
            'Diverse training data requirements',
            'Fairness metrics in all deployments',
        ],
    },
    {
        icon: Shield,
        title: 'Privacy & Security',
        description: 'Data protection is foundational. We implement privacy-by-design principles and exceed regulatory requirements.',
        commitments: [
            'HIPAA, SOC 2, and GDPR compliant infrastructure',
            'Data minimization and purpose limitation',
            'Encryption at rest and in transit',
        ],
    },
    {
        icon: Users,
        title: 'Human Oversight',
        description: 'AI augments human decision-making but never replaces human accountability. Critical decisions always include human review.',
        commitments: [
            'Human-in-the-loop for high-stakes decisions',
            'Clear escalation protocols',
            'Override capabilities for all automated actions',
        ],
    },
    {
        icon: Brain,
        title: 'Beneficial Purpose',
        description: 'We only deploy AI that creates genuine value for organizations and society. We decline engagements that could cause harm.',
        commitments: [
            'Impact assessment for all projects',
            'Stakeholder benefit analysis',
            'Long-term consequence evaluation',
        ],
    },
    {
        icon: AlertTriangle,
        title: 'Accountability',
        description: 'We take responsibility for AI outcomes. Our contracts include performance guarantees and clear liability frameworks.',
        commitments: [
            'Named responsible parties for each deployment',
            'Incident response procedures',
            'Continuous monitoring and improvement',
        ],
    },
]

const governanceFramework = [
    {
        phase: 'Assessment',
        activities: ['Risk classification', 'Stakeholder identification', 'Regulatory mapping', 'Ethical review'],
    },
    {
        phase: 'Design',
        activities: ['Fairness requirements', 'Transparency specs', 'Privacy controls', 'Human oversight design'],
    },
    {
        phase: 'Development',
        activities: ['Bias testing', 'Security review', 'Documentation', 'Validation protocols'],
    },
    {
        phase: 'Deployment',
        activities: ['Monitoring setup', 'Audit logging', 'Incident response', 'Performance tracking'],
    },
    {
        phase: 'Operations',
        activities: ['Continuous monitoring', 'Drift detection', 'Regular audits', 'Stakeholder feedback'],
    },
]

export default function AIEthics() {
    return (
        <>
            {/* Hero Section */}
            <Section className="pt-16 pb-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">AI Ethics & Governance</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Responsible AI by Design
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            We believe powerful AI requires powerful accountability. Our governance
                            framework ensures every deployment meets the highest ethical standards.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Principles */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Core Principles"
                        title="Our Ethical Foundation"
                        subtitle="Six pillars that guide every AI engagement."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle) => (
                        <StaggerItem key={principle.title}>
                            <Card className="h-full" padding="lg">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 text-[var(--color-accent)]">
                                    <principle.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                                <p className="text-[var(--color-muted)] mb-4">{principle.description}</p>
                                <div className="space-y-2">
                                    {principle.commitments.map((commitment, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                                            <span className="text-[var(--color-subtle)]">{commitment}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Governance Framework */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Framework"
                        title="AI Governance Lifecycle"
                        subtitle="Structured approach to ethical AI deployment."
                    />
                </ScrollReveal>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-border)] hidden lg:block" />

                    <div className="grid lg:grid-cols-5 gap-6">
                        {governanceFramework.map((phase, index) => (
                            <ScrollReveal key={phase.phase} delay={index * 0.1}>
                                <div className="relative">
                                    {/* Phase Number */}
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold mb-4 mx-auto lg:mx-0 relative z-10">
                                        {index + 1}
                                    </div>
                                    <Card padding="md" className="text-center lg:text-left">
                                        <h3 className="text-lg font-semibold text-white mb-3">{phase.phase}</h3>
                                        <ul className="space-y-2">
                                            {phase.activities.map((activity, i) => (
                                                <li key={i} className="text-sm text-[var(--color-muted)]">
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Documentation CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-8 lg:p-12 text-center max-w-3xl mx-auto">
                        <FileText className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-4">Request Our Full Ethics Documentation</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Download our complete AI Ethics Policy, Governance Framework, and Audit Procedures
                            for your compliance review.
                        </p>
                        <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                            Request Documentation
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
