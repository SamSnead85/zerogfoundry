import { ArrowRight, MapPin, DollarSign, Briefcase, Heart, Globe, Zap } from 'lucide-react'
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

const openRoles = [
    {
        title: 'Senior AI Engineer (RLHF Specialist)',
        department: 'Engineering',
        location: 'Remote / San Francisco',
        type: 'Full-time',
        description: 'Lead RLHF implementation for enterprise AI systems. Experience with reinforcement learning, LLMs, and production ML systems required.',
    },
    {
        title: 'AI Strategy Consultant (Healthcare)',
        department: 'Consulting',
        location: 'Remote / San Francisco',
        type: 'Full-time',
        description: 'Drive AI transformation projects for healthcare clients. Deep healthcare domain expertise and enterprise consulting experience required.',
    },
    {
        title: 'AI Strategy Consultant (Financial Services)',
        department: 'Consulting',
        location: 'Remote / New York',
        type: 'Full-time',
        description: 'Lead AI initiatives for financial services clients. Experience with regulatory requirements and enterprise change management.',
    },
    {
        title: 'Head of Business Development',
        department: 'Sales',
        location: 'San Francisco',
        type: 'Full-time',
        description: 'Drive enterprise sales strategy and execution. Experience selling to C-suite executives at Fortune 500 companies required.',
    },
]

const benefits = [
    { icon: DollarSign, title: 'Competitive Compensation', description: 'Market-leading salary plus meaningful equity' },
    { icon: Heart, title: 'Health & Wellness', description: 'Premium health, dental, vision, and mental health coverage' },
    { icon: Globe, title: 'Remote-First', description: 'Work from anywhere with flexible schedules' },
    { icon: Zap, title: 'Learning Budget', description: 'Annual budget for conferences, courses, and certifications' },
]

const whyJoin = [
    'Work on cutting-edge AI challenges with real-world impact',
    'Direct influence on Fortune 1000 company transformations',
    'Small, elite team where your contributions matter',
    'Equity in a high-growth AI company',
    'Learn from experienced operators and AI researchers',
    'Culture of transparency and continuous improvement',
]

export default function Careers() {
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
                        <p className="text-eyebrow mb-6">Careers</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Shape the Future of Enterprise AI</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            We're building a team of world-class AI engineers, strategists, and operators
                            who want to solve the hardest problems in enterprise AI.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Why Join */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge mb-4">Why Zero G Foundry</span>
                            <h2 className="text-white mb-6">Join an Elite Team</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                                At Zero G Foundry, you'll work alongside experienced operators and researchers
                                to deliver real AI transformation for the world's largest enterprises.
                            </p>

                            <div className="space-y-3">
                                {whyJoin.map((reason, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                        </div>
                                        <span className="text-[var(--color-muted)]">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <StaggerContainer className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit) => (
                                <StaggerItem key={benefit.title}>
                                    <Card className="p-5 text-center h-full">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mx-auto mb-3">
                                            <benefit.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-sm font-semibold text-white mb-1">{benefit.title}</h3>
                                        <p className="text-xs text-[var(--color-muted)]">{benefit.description}</p>
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Open Roles */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Open Positions"
                        title="Current Opportunities"
                        subtitle="We're always looking for exceptional talent to join our team."
                    />
                </ScrollReveal>

                <div className="space-y-4 mb-12">
                    {openRoles.map((role, index) => (
                        <ScrollReveal key={role.title} delay={index * 0.1}>
                            <Card className="p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                                            <span className="badge">{role.department}</span>
                                        </div>
                                        <p className="text-[var(--color-muted)] mb-3">{role.description}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)]">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {role.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {role.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Button variant="secondary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                                        Apply Now
                                    </Button>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <Card className="p-8 text-center">
                        <h3 className="text-xl font-semibold text-white mb-3">Don't See the Right Role?</h3>
                        <p className="text-[var(--color-muted)] mb-6 max-w-2xl mx-auto">
                            We're always interested in hearing from exceptional candidates. Send us your
                            resume and tell us how you can contribute to our mission.
                        </p>
                        <Button href="mailto:careers@zerogfoundry.com" variant="secondary">
                            Send General Application
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* Culture */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="badge mb-4">Our Culture</span>
                        <h2 className="text-white mb-6">How We Work</h2>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                            We're a remote-first team that values ownership, transparency, and outcomes
                            over process. We hire experienced professionals who thrive with autonomy
                            and take pride in delivering exceptional results.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button to="/about" variant="secondary">
                                Learn About Our Team
                            </Button>
                            <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
