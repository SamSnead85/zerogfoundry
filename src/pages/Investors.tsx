import { ArrowRight, TrendingUp, Users, Target, DollarSign, Building2, Shield, Zap, Globe, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Section,
    SectionHeader,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const marketOpportunity = [
    {
        metric: '$500B+',
        label: 'Global AI Market by 2028',
        description: 'Enterprise AI spending growing 35% CAGR',
    },
    {
        metric: '85%',
        label: 'AI Projects Fail to Deploy',
        description: 'Massive market inefficiency we solve',
    },
    {
        metric: '$12M',
        label: 'Avg. Client Value Creation',
        description: 'Demonstrated ROI per engagement',
    },
]

const investmentHighlights = [
    {
        icon: Target,
        title: 'Differentiated Positioning',
        description: 'The only consultancy guaranteeing production-grade AI outcomes with contractual performance floors.',
    },
    {
        icon: TrendingUp,
        title: 'Proven Unit Economics',
        description: 'High-margin consulting model with 80%+ gross margins and strong client retention.',
    },
    {
        icon: Users,
        title: 'Elite Team',
        description: 'Former Google, NVIDIA, McKinsey, and Accenture leaders with deep enterprise AI expertise.',
    },
    {
        icon: Shield,
        title: 'Enterprise-First GTM',
        description: 'Focus on Fortune 500 healthcare and financial services with long sales cycles but massive LTV.',
    },
]

const traction = [
    { metric: '95%', label: 'Production Accuracy', sublabel: 'Guaranteed in contracts' },
    { metric: '5x', label: 'Average ROI', sublabel: 'Client-validated' },
    { metric: '100%', label: 'Client Retention', sublabel: 'Year-over-year' },
    { metric: '4 Weeks', label: 'Assessment to Roadmap', sublabel: 'Rapid time-to-value' },
]

const fundingUse = [
    { percentage: 40, label: 'Engineering & R&D', description: 'RLHF platform & proprietary tooling' },
    { percentage: 30, label: 'Go-to-Market', description: 'Enterprise sales & marketing' },
    { percentage: 20, label: 'Talent Acquisition', description: 'Elite AI engineers & consultants' },
    { percentage: 10, label: 'Operations', description: 'Infrastructure & compliance' },
]

const boardAdvisors = [
    {
        initials: 'DR',
        name: 'Dr. David Rollins',
        role: 'Former CIO, UnitedHealth Group',
        expertise: 'Healthcare IT Strategy',
    },
    {
        initials: 'SC',
        name: 'Sarah Chen',
        role: 'Former Chief Data Officer, JPMorgan',
        expertise: 'Financial Services AI',
    },
    {
        initials: 'MP',
        name: 'Prof. Michael Park',
        role: 'AI Ethics Chair, MIT',
        expertise: 'Responsible AI',
    },
    {
        initials: 'JT',
        name: 'Jennifer Torres',
        role: 'Partner, Andreessen Horowitz',
        expertise: 'Enterprise Software',
    },
]

export default function Investors() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#050505]">
                {/* Premium Background */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />
                    <motion.div
                        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(201, 168, 108, 0.12) 0%, transparent 70%)',
                            filter: 'blur(100px)',
                        }}
                        animate={{
                            x: [0, 30, -20, 0],
                            y: [0, -20, 30, 0],
                            scale: [1, 1.1, 0.95, 1],
                        }}
                        transition={{
                            duration: 30,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-32">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6 font-medium">
                                Investor Relations
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.05] text-[var(--color-foreground)] mb-8">
                                The Enterprise AI
                                <br />
                                <span
                                    className="italic font-light"
                                    style={{
                                        background: 'linear-gradient(135deg, #fafafa 0%, rgba(201, 168, 108, 0.9) 50%, #fafafa 100%)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Implementation Gap
                                </span>
                            </h1>
                            <p className="text-lg text-[var(--color-muted)] mb-10 max-w-2xl leading-relaxed">
                                Enterprises spend billions on AI initiatives, but 85% never reach production.
                                Zero G Foundry solves the "last mile" problem with guaranteed outcomes—
                                creating the most valuable AI consultancy in the market.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:investors@zerogfoundry.com"
                                    className="inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-[#050505] font-medium text-sm tracking-wide rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,108,0.3)] hover:scale-[1.02]"
                                >
                                    Request Investor Deck
                                    <ArrowRight className="w-4 h-4 ml-3" />
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border border-[var(--color-border-strong)] text-[var(--color-foreground)] font-medium text-sm tracking-wide rounded-xl transition-all duration-500 hover:bg-[var(--color-glass)] hover:border-[var(--color-gold)]/30"
                                >
                                    Schedule Call
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Market Opportunity */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Market Opportunity"
                        title="A $500B+ Market With a Critical Gap"
                        subtitle="Enterprise AI adoption is exploding, but implementation success remains elusive. We bridge that gap."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {marketOpportunity.map((item) => (
                        <StaggerItem key={item.label}>
                            <Card className="p-8 text-center h-full">
                                <div className="text-4xl md:text-5xl font-serif text-[var(--color-gold)] mb-4">
                                    {item.metric}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                                <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Our Vision */}
            <Section>
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="badge mb-4">Our Vision</span>
                            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-[var(--color-foreground)] mb-6">
                                The Founder's Story
                            </h2>
                        </div>
                        <Card className="p-8 lg:p-12">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-serif text-xl font-bold flex-shrink-0">
                                    SS
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Sam Sweilem</h3>
                                    <p className="text-[var(--color-muted)]">Founder & CEO</p>
                                </div>
                            </div>
                            <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
                                <p>
                                    "After two decades leading AI transformations at the world's largest enterprises,
                                    I witnessed the same pattern repeatedly: brilliant AI demos that never survived
                                    contact with production reality. Billions wasted. Executives frustrated. Teams demoralized."
                                </p>
                                <p>
                                    "I founded Zero G Foundry to solve the 'last mile' problem once and for all.
                                    We're not another AI vendor making promises—we're operators who guarantee outcomes.
                                    Every engagement includes contractual performance floors because we've built
                                    the methodology to consistently deliver."
                                </p>
                                <p className="text-white font-medium">
                                    "Our vision is simple: become the definitive partner for enterprises serious
                                    about production-grade AI. Not experiments. Not pilots. Production."
                                </p>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Investment Highlights */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Investment Thesis"
                        title="Why Zero G Foundry"
                        subtitle="Key differentiators that position us for category leadership."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {investmentHighlights.map((item) => (
                        <StaggerItem key={item.title}>
                            <Card className="p-8 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-[var(--color-gold)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-[var(--color-muted)]">{item.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Traction & Metrics */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Traction"
                        title="Proven Results"
                        subtitle="Metrics that demonstrate product-market fit and execution capability."
                    />
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {traction.map((item, index) => (
                        <ScrollReveal key={item.label} delay={index * 0.1}>
                            <Card className="p-6 text-center">
                                <div className="text-3xl md:text-4xl font-serif text-[var(--color-foreground)] mb-2">
                                    {item.metric}
                                </div>
                                <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                                <div className="text-xs text-[var(--color-subtle)]">{item.sublabel}</div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Use of Funds */}
                <ScrollReveal>
                    <Card className="p-8 lg:p-12">
                        <h3 className="text-2xl font-serif text-white mb-8 text-center">Use of Investment Capital</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            {fundingUse.map((item) => (
                                <div key={item.label} className="text-center">
                                    <div className="relative w-24 h-24 mx-auto mb-4">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="rgba(255,255,255,0.1)"
                                                strokeWidth="3"
                                            />
                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="var(--color-gold)"
                                                strokeWidth="3"
                                                strokeDasharray={`${item.percentage}, 100`}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-bold text-white">{item.percentage}%</span>
                                        </div>
                                    </div>
                                    <h4 className="text-white font-medium mb-1">{item.label}</h4>
                                    <p className="text-xs text-[var(--color-muted)]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* Board & Advisors */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Governance"
                        title="Board & Advisors"
                        subtitle="Industry leaders guiding our strategic direction."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-6">
                    {boardAdvisors.map((advisor, index) => (
                        <ScrollReveal key={advisor.name} delay={index * 0.1}>
                            <Card className="p-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center mx-auto mb-4">
                                    <span className="text-lg font-bold text-[var(--color-gold)]">{advisor.initials}</span>
                                </div>
                                <h4 className="text-white font-semibold mb-1">{advisor.name}</h4>
                                <p className="text-sm text-[var(--color-muted)] mb-2">{advisor.role}</p>
                                <span className="inline-block px-3 py-1 text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-full">
                                    {advisor.expertise}
                                </span>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Why Now */}
            <Section>
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="badge mb-4">Timing</span>
                            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-[var(--color-foreground)]">
                                Why Now
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Zap,
                                    title: 'Enterprise AI Spending Exploding',
                                    description: 'Every Fortune 500 has AI initiatives, but most are stuck in "pilot purgatory."',
                                },
                                {
                                    icon: Globe,
                                    title: 'Regulation Driving Quality',
                                    description: 'AI governance requirements mean enterprises need reliable, auditable AI—not experiments.',
                                },
                                {
                                    icon: Building2,
                                    title: 'Consulting Gap',
                                    description: 'Traditional consultancies lack technical depth; tech vendors lack business acumen.',
                                },
                                {
                                    icon: Award,
                                    title: 'RLHF Moment',
                                    description: 'Human-in-the-loop AI is now proven at scale—and we\'re the experts.',
                                },
                            ].map((item) => (
                                <Card key={item.title} className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                            <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)] mb-6">
                            Join Us in Building the Future of Enterprise AI
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
                            We're raising our next round to accelerate growth and expand our team.
                            Accredited investors interested in learning more are invited to connect.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:investors@zerogfoundry.com"
                                className="inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-[#050505] font-medium text-sm tracking-wide rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,108,0.3)] hover:scale-[1.02]"
                            >
                                <DollarSign className="w-4 h-4 mr-2" />
                                Request Investor Materials
                            </a>
                            <Link
                                to="/about"
                                className="inline-flex items-center px-8 py-4 border border-[var(--color-border-strong)] text-[var(--color-foreground)] font-medium text-sm tracking-wide rounded-xl transition-all hover:bg-[var(--color-glass)]"
                            >
                                Learn About Our Team
                            </Link>
                        </div>
                        <p className="text-sm text-[var(--color-subtle)] mt-8">
                            For investor inquiries: <a href="mailto:investors@zerogfoundry.com" className="text-[var(--color-gold)] hover:underline">investors@zerogfoundry.com</a>
                        </p>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
