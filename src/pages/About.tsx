import { ArrowRight, Mail, MapPin, Briefcase, Users, Target, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
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
        description: 'Build production-grade AI systems for enterprise clients.',
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

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <Section className="pt-16 pb-12">
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

            {/* Executive Leadership Section */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Leadership"
                        title="Executive Team"
                        subtitle="Industry veterans with deep enterprise AI expertise."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            initials: 'SS',
                            name: 'Sam Sweilem',
                            title: 'Founder & CEO',
                            background: 'Former VP of AI Strategy, Accenture',
                            credentials: ['20+ years enterprise consulting', 'Led $500M+ AI transformations', 'Published author on enterprise AI'],
                            color: 'var(--color-gold)',
                        },
                        {
                            initials: 'MK',
                            name: 'Dr. Maya Krishnan',
                            title: 'Chief Technology Officer',
                            background: 'Former Principal Engineer, Google AI',
                            credentials: ['PhD in Machine Learning, Stanford', '40+ patents in AI/ML', 'Built production systems at scale'],
                            color: 'var(--color-accent)',
                        },
                        {
                            initials: 'JR',
                            name: 'James Richardson',
                            title: 'Chief Strategy Officer',
                            background: 'Former Partner, McKinsey Digital',
                            credentials: ['15+ years consulting leadership', 'Healthcare & Financial Services focus', 'Board advisor to Fortune 100'],
                            color: 'var(--color-success)',
                        },
                    ].map((exec) => (
                        <Card key={exec.name} className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold"
                                    style={{ backgroundColor: `${exec.color}20`, color: exec.color }}
                                >
                                    {exec.initials}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{exec.name}</h3>
                                    <p className="text-[var(--color-muted)] text-sm">{exec.title}</p>
                                </div>
                            </div>
                            <p className="text-white text-sm font-medium mb-4">{exec.background}</p>
                            <ul className="space-y-2">
                                {exec.credentials.map((cred, i) => (
                                    <li key={i} className="text-[var(--color-subtle)] text-xs flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                                        {cred}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                {/* Advisory Board */}
                <ScrollReveal>
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <span className="badge mb-4">Advisory Board</span>
                            <h3 className="text-2xl font-serif text-[var(--color-foreground)]">
                                Guided by Industry Pioneers
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { initials: 'DR', name: 'Dr. David Rollins', role: 'Former CIO, UnitedHealth Group' },
                                { initials: 'SC', name: 'Sarah Chen', role: 'Former Chief Data Officer, JPMorgan' },
                                { initials: 'MP', name: 'Prof. Michael Park', role: 'AI Ethics Chair, MIT' },
                                { initials: 'LT', name: 'Lisa Thornton', role: 'Former SVP Operations, Aetna' },
                            ].map((advisor) => (
                                <Card key={advisor.name} className="p-5 text-center">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center mx-auto mb-3">
                                        <span className="text-sm font-bold text-[var(--color-muted)]">{advisor.initials}</span>
                                    </div>
                                    <h4 className="text-white font-medium text-sm">{advisor.name}</h4>
                                    <p className="text-[var(--color-subtle)] text-xs mt-1">{advisor.role}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Partnership Ecosystem */}
                <ScrollReveal>
                    <Card className="p-8 lg:p-12 text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Partnership Ecosystem</h3>
                        <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto mb-8">
                            Our strategic partnerships enable us to deliver enterprise-grade solutions across every layer of the AI stack.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-[var(--color-background)]/50 rounded-xl">
                                <h4 className="text-white font-medium mb-2">Cloud Infrastructure</h4>
                                <p className="text-[var(--color-subtle)] text-sm">AWS • Azure • Google Cloud</p>
                            </div>
                            <div className="p-6 bg-[var(--color-background)]/50 rounded-xl">
                                <h4 className="text-white font-medium mb-2">AI/ML Platforms</h4>
                                <p className="text-[var(--color-subtle)] text-sm">NVIDIA • Databricks • Snowflake</p>
                            </div>
                            <div className="p-6 bg-[var(--color-background)]/50 rounded-xl">
                                <h4 className="text-white font-medium mb-2">System Integrators</h4>
                                <p className="text-[var(--color-subtle)] text-sm">Select Delivery Partners</p>
                            </div>
                        </div>
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
                                            <p className="text-sm text-[var(--color-muted)]">Work on AI systems that transform enterprise operations</p>
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
