import { ArrowRight, Mail, MapPin, Briefcase, Users, Target, Heart } from 'lucide-react'
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

const values = [
    {
        icon: Users,
        title: 'Operators First',
        description: 'We hire practitioners who have built and shipped production AI systems, not just theorists.',
    },
    {
        icon: Target,
        title: 'Outcome Obsessed',
        description: 'Every decision we make is focused on delivering measurable business outcomes for our clients.',
    },
    {
        icon: Heart,
        title: 'Radical Transparency',
        description: 'We share our methodology, pricing, and processes openly. No hidden fees, no surprises.',
    },
    {
        icon: Users,
        title: 'Human-Centered AI',
        description: "We believe AI should augment human expertise, not replace it. That's why RLHF is central to everything we do.",
    },
]

const commitments = [
    'Infrastructure-agnostic deployment (work with your tech stack)',
    'Transparent pricing and process',
    'Guaranteed outcomes with performance floors',
    'Long-term partnership, not transactional consulting',
]

const openRoles = [
    {
        title: 'Senior AI Engineer',
        department: 'Engineering',
        location: 'San Francisco / Remote',
        description: 'Build production-grade AI systems for Fortune 1000 clients.',
    },
    {
        title: 'AI Strategy Consultant',
        department: 'Consulting',
        location: 'San Francisco / Remote',
        description: 'Lead AI transformation engagements and develop client roadmaps.',
    },
    {
        title: 'Healthcare AI Specialist',
        department: 'Industry Practice',
        location: 'Remote',
        description: 'Deep healthcare expertise to drive AI adoption in payer and provider organizations.',
    },
]

const teamAreas = [
    'AI Engineering',
    'Strategy & Consulting',
    'Data Science',
    'Healthcare Expertise',
    'Financial Services',
    'Product & Delivery',
]

export default function About() {
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
                        <p className="text-eyebrow mb-6">About Us</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Built by Operators, for Operators</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Zero G Foundry was founded by AI strategists and engineers who've lived the pain
                            of failed AI implementations. We've seen the gap between research demos and
                            production reality, and we built this company to bridge it.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge mb-4">Our Philosophy</span>
                            <h2 className="text-white mb-6">AI That Earns Trust</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                                We believe AI should be reliable, auditable, and aligned with human values.
                                That's why we invest heavily in human-in-the-loop reinforcement learning.
                            </p>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                                We don't just build models—<span className="text-white font-semibold">we build trust</span>.
                                Trust between your organization and the AI systems that power it. Trust between
                                your employees and the tools they use. Trust between you and us.
                            </p>
                        </div>

                        <Card className="p-8">
                            <h3 className="text-xl font-semibold text-white mb-6">Our Core Values</h3>
                            <div className="space-y-6">
                                {values.map((value, i) => (
                                    <div key={value.title}>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                                                <value.icon className="w-4 h-4" />
                                            </div>
                                            <h4 className="text-white font-medium">{value.title}</h4>
                                        </div>
                                        <p className="text-[var(--color-muted)] text-sm pl-11">{value.description}</p>
                                        {i < values.length - 1 && <div className="divider mt-6" />}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Team Section */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="The Team"
                        title="Elite AI Specialists"
                        subtitle="A handpicked team of operators, engineers, and strategists."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {teamAreas.map((specialty) => (
                        <StaggerItem key={specialty}>
                            <Card className="p-6">
                                <div className="w-10 h-10 rounded-md bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center mb-4">
                                    <span className="text-[var(--color-muted)] text-sm font-semibold">
                                        {specialty.split(' ')[0][0]}
                                    </span>
                                </div>
                                <h3 className="text-[var(--color-foreground)] font-medium">{specialty}</h3>
                                <p className="text-sm text-[var(--color-subtle)] mt-1">Expert Team</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <ScrollReveal>
                    <Card className="p-8 lg:p-12 text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Our Team Background</h3>
                        <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
                            Our team includes former executives and senior engineers from leading technology
                            companies, top-tier consulting firms, and academic institutions. We combine
                            strategic thinking with hands-on technical execution.
                        </p>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* Careers Section */}
            <Section background="alt" id="careers">
                <ScrollReveal>
                    <SectionHeader
                        badge="Careers"
                        title="Join Our Team"
                        subtitle="We're building the future of enterprise AI. Come build it with us."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <ScrollReveal>
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Why Zero G Foundry?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium">Impact at Scale</span>
                                            <p className="text-sm text-[var(--color-muted)]">Work on AI systems that transform Fortune 1000 operations</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium">Elite Team</span>
                                            <p className="text-sm text-[var(--color-muted)]">Collaborate with top practitioners from leading tech companies</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium">Cutting-Edge Tech</span>
                                            <p className="text-sm text-[var(--color-muted)]">Access to DGX infrastructure and latest AI capabilities</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium">Remote-First</span>
                                            <p className="text-sm text-[var(--color-muted)]">Flexible work arrangements with quarterly in-person gatherings</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="space-y-4">
                        {openRoles.map((role, index) => (
                            <ScrollReveal key={role.title} delay={index * 0.1}>
                                <Card className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
                                                <span className="text-xs text-[var(--color-muted)]">{role.department}</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-white mb-1">{role.title}</h4>
                                            <p className="text-sm text-[var(--color-muted)] mb-2">{role.description}</p>
                                            <div className="flex items-center gap-1 text-xs text-[var(--color-subtle)]">
                                                <MapPin className="w-3 h-3" />
                                                {role.location}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-[var(--color-muted)]" />
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}

                        <ScrollReveal delay={0.3}>
                            <Card className="p-6 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent">
                                <div className="flex items-center gap-3 mb-3">
                                    <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                                    <h4 className="text-white font-medium">Don't see your role?</h4>
                                </div>
                                <p className="text-sm text-[var(--color-muted)] mb-4">
                                    We're always looking for exceptional talent. Send us your resume and tell us how you can contribute.
                                </p>
                                <a
                                    href="mailto:careers@zerogfoundry.com"
                                    className="text-[var(--color-accent)] text-sm font-medium hover:underline"
                                >
                                    careers@zerogfoundry.com
                                </a>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </Section>

            {/* Our Commitment */}
            <Section>
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="badge mb-4">Our Commitment</span>
                        <h2 className="text-white mb-8">What We Promise</h2>

                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {commitments.map((commitment, i) => (
                                <Card key={i} className="p-4 flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                    </div>
                                    <span className="text-white">{commitment}</span>
                                </Card>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Ready to Work With Us?</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            Let's discuss how Zero G Foundry can help you achieve your AI transformation goals.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Get in Touch
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
