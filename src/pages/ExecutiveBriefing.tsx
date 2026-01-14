import { motion } from 'framer-motion'
import { Briefcase, Download, ArrowRight, Calendar, FileText, Users, TrendingUp, Building2, CheckCircle } from 'lucide-react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const briefingKits = [
    {
        title: 'AI ROI Business Case',
        description: 'Board-ready presentation on AI investment justification, including industry benchmarks and financial models.',
        format: 'PowerPoint + Excel',
        pages: 28,
        icon: TrendingUp,
    },
    {
        title: 'Technology Landscape Overview',
        description: 'Executive summary of enterprise AI technologies, vendor landscape, and strategic recommendations.',
        format: 'PDF + PowerPoint',
        pages: 35,
        icon: Building2,
    },
    {
        title: 'Risk & Governance Framework',
        description: 'Comprehensive AI governance documentation for board review and regulatory compliance.',
        format: 'PDF',
        pages: 42,
        icon: FileText,
    },
    {
        title: 'Implementation Roadmap Template',
        description: 'Customizable 12-month AI implementation roadmap with milestones and resource planning.',
        format: 'PowerPoint + Project',
        pages: 18,
        icon: Calendar,
    },
]

const focusAreas = [
    {
        title: 'Strategic AI Vision',
        points: ['Market positioning through AI', 'Competitive differentiation', 'Long-term technology strategy'],
    },
    {
        title: 'Operational Excellence',
        points: ['Process automation priorities', 'Efficiency metrics', 'Quality improvement targets'],
    },
    {
        title: 'Risk Management',
        points: ['Regulatory compliance', 'Data governance', 'Ethical AI frameworks'],
    },
    {
        title: 'Investment Planning',
        points: ['ROI projections', 'Resource allocation', 'Build vs. buy decisions'],
    },
]

const executiveBenefits = [
    'Direct access to AI strategy leadership',
    'Customized briefings for your industry and challenges',
    'Board-ready materials and presentation support',
    'Confidential peer benchmarking insights',
    'Priority access to research and thought leadership',
]

export default function ExecutiveBriefing() {
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
                        <p className="text-eyebrow mb-6">Executive Briefing Center</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Strategic AI Intelligence for C-Suite Leaders
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                            Confidential briefings and board-ready materials to help you lead
                            AI transformation with confidence.
                        </p>
                        <Button to="/contact" size="lg" icon={<Calendar className="w-5 h-5" />}>
                            Schedule Executive Briefing
                        </Button>
                    </motion.div>
                </div>
            </Section>

            {/* Benefits */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <p className="text-eyebrow mb-4">Executive Program</p>
                        <h2 className="text-3xl font-bold text-white mb-6">Tailored for Senior Leadership</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Our executive briefing program is designed for CIOs, CTOs, and business unit leaders
                            who need strategic AI guidance without the technical noise.
                        </p>
                        <div className="space-y-4">
                            {executiveBenefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                                    <span className="text-[var(--color-foreground)]">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card padding="lg" className="bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-gold)]/5">
                            <div className="text-center">
                                <Briefcase className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Complimentary Assessment</h3>
                                <p className="text-[var(--color-muted)] mb-6">
                                    Begin with a 60-minute executive assessment to identify
                                    your highest-impact AI opportunities.
                                </p>
                                <ul className="text-left space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                                        Current state assessment
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                                        Opportunity identification
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                                        Strategic recommendations
                                    </li>
                                </ul>
                                <Button to="/contact" variant="primary" className="w-full">
                                    Request Assessment
                                </Button>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Focus Areas */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Focus Areas"
                        title="Briefing Topics"
                        subtitle="We cover the strategic dimensions that matter most to executive teams."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {focusAreas.map((area) => (
                        <StaggerItem key={area.title}>
                            <Card padding="md" className="h-full text-center">
                                <h3 className="text-lg font-semibold text-white mb-4">{area.title}</h3>
                                <ul className="space-y-2">
                                    {area.points.map((point, i) => (
                                        <li key={i} className="text-sm text-[var(--color-muted)]">{point}</li>
                                    ))}
                                </ul>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Board Presentation Kits */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Resources"
                        title="Board Presentation Kits"
                        subtitle="Ready-to-use materials for executive and board presentations."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {briefingKits.map((kit) => (
                        <StaggerItem key={kit.title}>
                            <Card padding="lg" className="h-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)]">
                                        <kit.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">{kit.title}</h3>
                                        <p className="text-sm text-[var(--color-muted)] mb-4">{kit.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-[var(--color-subtle)]">
                                            <span>{kit.format}</span>
                                            <span>•</span>
                                            <span>{kit.pages} pages</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    to="/contact"
                                    variant="secondary"
                                    size="sm"
                                    className="w-full mt-4"
                                    icon={<Download className="w-4 h-4" />}
                                >
                                    Request Kit
                                </Button>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <Users className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-4">Join Our Executive Network</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Connect with peers facing similar AI transformation challenges.
                            Quarterly roundtables and exclusive research access for members.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                                Apply for Membership
                            </Button>
                            <Button to="/insights" variant="secondary">
                                Browse Our Research
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
