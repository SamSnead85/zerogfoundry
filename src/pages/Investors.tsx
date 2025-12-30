import { ArrowRight, TrendingUp, Briefcase, Users, CheckCircle } from 'lucide-react'
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

const investorServices = [
    {
        icon: Briefcase,
        title: 'Due Diligence Support',
        description: 'Comprehensive assessment of AI capabilities and technical roadmap for target companies.',
    },
    {
        icon: TrendingUp,
        title: 'Portfolio Value Creation',
        description: 'Identify and execute AI transformation opportunities across your portfolio companies.',
    },
    {
        icon: Users,
        title: 'Strategic Advisory',
        description: 'Board-level guidance on AI strategy, implementation, and competitive positioning.',
    },
]

const investmentHighlights = [
    'Proven product-market fit with Fortune 1000 clients',
    'Hybrid value-based pricing model with high margins',
    'Proprietary technology (DGX, data generation, RLHF)',
    'Beachhead in Healthcare and Financial Services',
    'Experienced founding team with enterprise AI expertise',
    'Clear path to $50M+ ARR in 3 years',
]

export default function Investors() {
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
                        <p className="text-eyebrow mb-6">For Investors</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Investment Opportunities & Portfolio Support</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            We work with venture capital and private equity firms to evaluate AI opportunities
                            and create value in portfolio companies.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* What We Offer Investors */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Services"
                        title="What We Offer Investors"
                        subtitle="Strategic partnership for AI-driven value creation."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {investorServices.map((service) => (
                        <StaggerItem key={service.title}>
                            <Card className="h-full p-6">
                                <div className="w-10 h-10 rounded-md bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] mb-4">
                                    <service.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-2">{service.title}</h3>
                                <p className="text-[var(--color-muted)] text-sm">{service.description}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Investment Criteria */}
            <Section>
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge mb-4">Investment Opportunity</span>
                            <h2 className="text-white mb-6">Partner With Zero G Foundry</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                                We're seeking strategic investment partners who share our vision for
                                transforming enterprise AI. Our hybrid model combines consulting
                                revenue with high-margin recurring relationships.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-card)]">
                                    <span className="text-[var(--color-muted)]">Target Raise</span>
                                    <span className="text-white font-semibold">Series A / B</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-card)]">
                                    <span className="text-[var(--color-muted)]">Check Size</span>
                                    <span className="text-white font-semibold">$5M - $15M</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--color-card)]">
                                    <span className="text-[var(--color-muted)]">Use of Funds</span>
                                    <span className="text-white font-semibold">Scale & Expand</span>
                                </div>
                            </div>

                            <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Investor Briefing
                            </Button>
                        </div>

                        <Card padding="lg">
                            <h3 className="text-xl font-semibold text-white mb-6">Investment Highlights</h3>
                            <div className="space-y-4">
                                {investmentHighlights.map((highlight, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                                        <span className="text-[var(--color-muted)]">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Market Opportunity */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="badge mb-4">Market Opportunity</span>
                        <h2 className="text-white mb-8">The $200B Agentic AI Market</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <Card className="p-6 text-center">
                                <div className="text-4xl font-bold text-[var(--color-success)] mb-2">$200B</div>
                                <p className="text-[var(--color-muted)] text-sm">Total Addressable Market by 2034</p>
                            </Card>
                            <Card className="p-6 text-center">
                                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">95%</div>
                                <p className="text-[var(--color-muted)] text-sm">AI Projects That Fail to Deliver ROI</p>
                            </Card>
                            <Card className="p-6 text-center">
                                <div className="text-4xl font-bold text-[var(--color-warning)] mb-2">5X</div>
                                <p className="text-[var(--color-muted)] text-sm">Minimum ROI for Our Clients</p>
                            </Card>
                        </div>

                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            We're targeting the "last mile" problem—the gap between AI demos that show promise
                            and production systems that deliver real business value. This is where the vast
                            majority of enterprise AI investments fail, and where we excel.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Explore Investment Opportunities</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            Schedule a confidential briefing to learn more about Zero G Foundry
                            and how we can partner together.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Schedule Investor Briefing
                            </Button>
                            <Button to="/our-approach" variant="secondary" size="lg">
                                View Our Methodology
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
