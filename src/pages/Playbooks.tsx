import { motion } from 'framer-motion'
import { BookOpen, Download, Clock, CheckCircle, ArrowRight, FileText, Users, Zap, Shield } from 'lucide-react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

interface Playbook {
    id: string
    title: string
    category: string
    description: string
    readTime: string
    chapters: string[]
    icon: typeof BookOpen
    color: string
}

const playbooks: Playbook[] = [
    {
        id: 'ai-implementation',
        title: 'Enterprise AI Implementation',
        category: 'Implementation',
        description: 'Step-by-step guide to deploying production AI in enterprise environments. Covers infrastructure, security, change management, and scaling.',
        readTime: '45 min',
        chapters: [
            'Readiness Assessment',
            'Infrastructure Planning',
            'Security Architecture',
            'Pilot Design',
            'Production Deployment',
            'Scaling & Optimization',
        ],
        icon: Zap,
        color: 'var(--color-accent)',
    },
    {
        id: 'ai-governance',
        title: 'AI Governance Framework',
        category: 'Governance',
        description: 'Comprehensive governance structures for responsible AI. Includes policy templates, review processes, and compliance checklists.',
        readTime: '35 min',
        chapters: [
            'Governance Structure',
            'Risk Assessment Framework',
            'Ethics Review Process',
            'Compliance Requirements',
            'Audit Procedures',
            'Incident Response',
        ],
        icon: Shield,
        color: 'var(--color-gold)',
    },
    {
        id: 'change-management',
        title: 'AI Change Management',
        category: 'People',
        description: 'Managing organizational change during AI transformation. Addresses resistance, training, and culture evolution.',
        readTime: '30 min',
        chapters: [
            'Stakeholder Analysis',
            'Communication Strategy',
            'Training Programs',
            'Resistance Management',
            'Success Metrics',
            'Sustainability Planning',
        ],
        icon: Users,
        color: 'var(--color-success)',
    },
    {
        id: 'vendor-selection',
        title: 'AI Vendor Evaluation',
        category: 'Procurement',
        description: 'Framework for evaluating AI vendors and solutions. Includes RFP templates, scoring matrices, and due diligence checklists.',
        readTime: '25 min',
        chapters: [
            'Requirements Definition',
            'Vendor Identification',
            'Evaluation Criteria',
            'RFP Process',
            'POC Guidelines',
            'Contract Negotiation',
        ],
        icon: FileText,
        color: 'var(--color-champagne)',
    },
]

const failureCases = [
    {
        title: 'The Pilot That Never Scaled',
        lesson: 'Success in controlled environments doesn\'t guarantee production viability. Always design pilots with production constraints in mind.',
        symptoms: ['Excellent POC results', 'Unexpected production issues', 'Indefinite "phase 2" delays'],
    },
    {
        title: 'The Accuracy Trap',
        lesson: '95% accuracy sounds good until you calculate the cost of the 5% failures. Always quantify error impact in business terms.',
        symptoms: ['Focus on aggregate metrics', 'Ignored edge cases', 'Surprised by real-world failures'],
    },
    {
        title: 'The Integration Nightmare',
        lesson: 'AI models are 20% of the work. The other 80% is integration, data pipelines, and change management.',
        symptoms: ['Model-first thinking', 'Underestimated integration', 'Shadow IT solutions'],
    },
    {
        title: 'The Governance Gap',
        lesson: 'Moving fast without governance creates technical and regulatory debt that compounds over time.',
        symptoms: ['No audit trail', 'Unclear accountability', 'Compliance scrambles'],
    },
]

export default function Playbooks() {
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
                        <p className="text-eyebrow mb-6">Implementation Playbooks</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Battle-Tested AI Deployment Guides
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Practical playbooks built from hundreds of enterprise AI implementations.
                            Learn from our successes—and our failures.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Playbooks Grid */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Playbooks"
                        title="Implementation Guides"
                        subtitle="Comprehensive guides for every phase of AI deployment."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {playbooks.map((playbook) => (
                        <StaggerItem key={playbook.id}>
                            <Card className="h-full" padding="lg">
                                <div className="flex items-start gap-4 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${playbook.color}20`, color: playbook.color }}
                                    >
                                        <playbook.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="badge mb-2">{playbook.category}</span>
                                        <h3 className="text-xl font-semibold text-white">{playbook.title}</h3>
                                    </div>
                                </div>

                                <p className="text-[var(--color-muted)] mb-4">{playbook.description}</p>

                                <div className="flex items-center gap-4 text-sm text-[var(--color-subtle)] mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {playbook.readTime}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <BookOpen className="w-4 h-4" />
                                        {playbook.chapters.length} chapters
                                    </span>
                                </div>

                                {/* Chapters */}
                                <div className="space-y-2 mb-6">
                                    {playbook.chapters.map((chapter, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                            <span className="text-[var(--color-muted)]">{chapter}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    to="/contact"
                                    variant="secondary"
                                    size="sm"
                                    className="w-full"
                                    icon={<Download className="w-4 h-4" />}
                                >
                                    Request Playbook
                                </Button>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Failure Analysis */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Lessons Learned"
                        title="Common Failure Patterns"
                        subtitle="Learn from the mistakes we've seen (and made)."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {failureCases.map((failure, index) => (
                        <ScrollReveal key={failure.title} delay={index * 0.1}>
                            <Card padding="lg" className="border-l-4 border-l-red-500/50">
                                <h3 className="text-lg font-semibold text-white mb-3">{failure.title}</h3>
                                <p className="text-[var(--color-muted)] mb-4">{failure.lesson}</p>
                                <div className="space-y-2">
                                    <p className="text-xs text-[var(--color-subtle)] uppercase tracking-wider">Warning Signs</p>
                                    {failure.symptoms.map((symptom, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                            <span className="text-[var(--color-muted)]">{symptom}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Implement?</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Get hands-on guidance from practitioners who've deployed AI at scale.
                            We'll help you avoid the common pitfalls and accelerate time to value.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Implementation Review
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
