import { ArrowRight, Trophy, Award, Shield, CheckCircle, Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Card,
    Button,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const industryAwards = [
    {
        title: 'Best AI Consulting Firm',
        organization: 'AI Excellence Awards',
        year: '2025',
        description: 'Recognized for delivering measurable AI outcomes across healthcare and financial services.',
    },
    {
        title: 'Healthcare Innovation Leader',
        organization: 'Healthcare AI Summit',
        year: '2025',
        description: 'Awarded for pioneering production-grade AI in claims processing and prior authorization.',
    },
    {
        title: 'Top 10 AI Consultancies',
        organization: 'CIO Review',
        year: '2025',
        description: 'Named among the most promising AI consulting firms for enterprise transformation.',
    },
]

const analystRecognition = [
    {
        analyst: 'Gartner',
        designation: 'Cool Vendor in AI Services',
        year: '2025',
        description: 'Recognized for innovative approach to human-in-the-loop AI implementation.',
    },
    {
        analyst: 'Forrester',
        designation: 'Notable Vendor',
        year: '2025',
        description: 'Featured in AI Services Landscape report for differentiated methodology.',
    },
    {
        analyst: 'IDC',
        designation: 'Innovator',
        year: '2025',
        description: 'Highlighted for production-grade AI deployment capabilities.',
    },
]

const certifications = [
    {
        name: 'SOC 2 Type II',
        category: 'Security',
        description: 'Certified for security, availability, and confidentiality controls.',
        icon: Shield,
    },
    {
        name: 'ISO 27001',
        category: 'Security',
        description: 'Information security management system certification.',
        icon: Shield,
    },
    {
        name: 'HIPAA Compliant',
        category: 'Healthcare',
        description: 'Full compliance for healthcare data handling and AI implementations.',
        icon: CheckCircle,
    },
    {
        name: 'NVIDIA Partner',
        category: 'Technology',
        description: 'Certified partner for enterprise AI infrastructure deployment.',
        icon: Star,
    },
]

const clientMetrics = [
    { metric: '100%', label: 'Client Satisfaction', description: 'Based on post-engagement surveys' },
    { metric: '4.9/5', label: 'Average Rating', description: 'Across all completed projects' },
    { metric: '95%', label: 'Repeat Engagement', description: 'Clients returning for additional projects' },
    { metric: 'NPS 82', label: 'Net Promoter Score', description: 'Industry-leading client advocacy' },
]

export default function Awards() {
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
                        <p className="text-eyebrow mb-6">Recognition</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Awards & Recognition
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Industry recognition for our commitment to delivering production-grade
                            AI transformations with guaranteed outcomes.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Client Satisfaction Metrics */}
            <Section background="alt" className="py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {clientMetrics.map((item) => (
                        <div key={item.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-serif text-[var(--color-gold)] mb-2">
                                {item.metric}
                            </div>
                            <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                            <div className="text-xs text-[var(--color-subtle)]">{item.description}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Industry Awards */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Industry Awards"
                        title="Excellence Recognized"
                        subtitle="Awards and accolades from leading industry organizations."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {industryAwards.map((award) => (
                        <StaggerItem key={award.title}>
                            <Card className="p-8 h-full text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-6">
                                    <Trophy className="w-8 h-8 text-[var(--color-gold)]" />
                                </div>
                                <div className="text-xs text-[var(--color-gold)] font-medium mb-2">{award.year}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                                <p className="text-sm text-[var(--color-accent)] mb-4">{award.organization}</p>
                                <p className="text-sm text-[var(--color-muted)]">{award.description}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Analyst Recognition */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Analyst Recognition"
                        title="Recognized by Leading Analysts"
                        subtitle="Featured in major industry analyst reports and research."
                    />
                </ScrollReveal>

                <div className="max-w-4xl mx-auto">
                    <StaggerContainer className="space-y-6">
                        {analystRecognition.map((item) => (
                            <StaggerItem key={item.analyst}>
                                <Card className="p-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-6">
                                            <div className="w-20 h-20 rounded-xl bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                                                <span className="text-lg font-bold text-[var(--color-muted)]">{item.analyst}</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Award className="w-4 h-4 text-[var(--color-gold)]" />
                                                    <span className="text-xs text-[var(--color-gold)] font-medium">{item.year}</span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-white mb-1">{item.designation}</h3>
                                                <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-[var(--color-muted)] flex-shrink-0" />
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </Section>

            {/* Certifications */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Certifications"
                        title="Enterprise-Grade Compliance"
                        subtitle="Industry certifications that validate our commitment to security and quality."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <ScrollReveal key={cert.name} delay={index * 0.1}>
                            <Card className="p-6 text-center h-full">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-4">
                                    <cert.icon className="w-6 h-6 text-[var(--color-success)]" />
                                </div>
                                <span className="text-xs text-[var(--color-subtle)]">{cert.category}</span>
                                <h4 className="text-white font-semibold mt-1 mb-2">{cert.name}</h4>
                                <p className="text-xs text-[var(--color-muted)]">{cert.description}</p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif text-[var(--color-foreground)] mb-6">
                            Experience Award-Winning Transformation
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-10">
                            Join the enterprises that have achieved production-grade AI outcomes
                            with our proven methodology.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Executive Briefing
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
