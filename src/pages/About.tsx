import { ArrowRight } from 'lucide-react'
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
        title: 'Operators First',
        description: 'We hire practitioners who have built and shipped production AI systems, not just theorists.',
    },
    {
        title: 'Outcome Obsessed',
        description: 'Every decision we make is focused on delivering measurable business outcomes for our clients.',
    },
    {
        title: 'Radical Transparency',
        description: 'We share our methodology, pricing, and processes openly. No hidden fees, no surprises.',
    },
    {
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
                                        <h4 className="text-white font-medium mb-1">{value.title}</h4>
                                        <p className="text-[var(--color-muted)] text-sm">{value.description}</p>
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
                    {['AI Engineering', 'Strategy & Consulting', 'Data Science', 'Healthcare Expertise', 'Financial Services', 'Product & Delivery'].map((specialty) => (
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
                        <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto mb-8">
                            Our team includes former executives and senior engineers from leading technology
                            companies, top-tier consulting firms, and academic institutions. We combine
                            strategic thinking with hands-on technical execution.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button to="/careers" variant="secondary">
                                Join Our Team
                            </Button>
                            <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                                Work With Us
                            </Button>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* Our Commitment */}
            <Section background="alt">
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
            <Section>
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
