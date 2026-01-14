import { ArrowRight, Server, Cpu, Database, CheckCircle, Clock, Target, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
    ExecutiveCTA,
    MainframeTCOCalculator,
    ArchitectureDiagram,
} from '../components'

export default function MainframeModernization() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#050505]">
                {/* Premium Background */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(201, 168, 108, 0.15) 0%, transparent 70%)',
                            filter: 'blur(120px)',
                        }}
                        animate={{
                            x: [0, 40, -30, 0],
                            y: [0, 30, -20, 0],
                            scale: [1, 1.1, 0.95, 1],
                        }}
                        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(79, 255, 237, 0.08) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                        }}
                        animate={{
                            x: [0, -30, 20, 0],
                            y: [0, -25, 30, 0],
                        }}
                        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                    />

                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(250, 250, 250, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 250, 250, 0.5) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-32">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 text-[var(--color-gold)] text-sm font-medium mb-8">
                                <Server className="w-4 h-4" />
                                Mainframe Modernization
                            </span>

                            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] text-[var(--color-foreground)] mb-8">
                                Break Free from the{' '}
                                <span className="italic text-[var(--color-gold)]">
                                    Mainframe Anchor
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 max-w-2xl leading-relaxed">
                                Your legacy systems hold decades of business logic—and hold back your digital transformation.
                                Our AI-powered assessment quantifies risk, identifies savings, and charts a clear path to modernization.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/assessment"
                                    className="group inline-flex items-center px-8 py-4 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,108,0.3)]"
                                >
                                    Start Free Assessment
                                    <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl transition-all hover:bg-white/5"
                                >
                                    Talk to an Expert
                                </Link>
                            </div>
                        </motion.div>

                        {/* Key Metrics */}
                        <motion.div
                            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            <div>
                                <div className="text-3xl md:text-4xl font-serif text-[var(--color-gold)]">$12M</div>
                                <div className="text-sm text-[var(--color-subtle)] mt-2">Avg. Annual Savings</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-serif text-white">95%</div>
                                <div className="text-sm text-[var(--color-subtle)] mt-2">Code Conversion Accuracy</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-serif text-[var(--color-aurora-teal)]">60%</div>
                                <div className="text-sm text-[var(--color-subtle)] mt-2">Faster Time-to-Market</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <Section background="alt" id="problem">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-6">
                                The Hidden Cost of <span className="italic text-[var(--color-gold)]">Technical Debt</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-8 border-[var(--color-error)]/30">
                                <div className="text-4xl font-serif text-[var(--color-error)] mb-4">$65B+</div>
                                <h3 className="text-white font-medium mb-2">Annual Mainframe Spending</h3>
                                <p className="text-[var(--color-muted)] text-sm">
                                    Enterprises spend billions annually on aging COBOL systems—funds that could fuel innovation.
                                </p>
                            </Card>

                            <Card className="p-8 border-[var(--color-warning)]/30">
                                <div className="text-4xl font-serif text-[var(--color-warning)] mb-4">75%</div>
                                <h3 className="text-white font-medium mb-2">Skills Shortage</h3>
                                <p className="text-[var(--color-muted)] text-sm">
                                    Three-quarters of mainframe professionals will retire within 10 years. Knowledge loss is accelerating.
                                </p>
                            </Card>
                        </div>

                        <div className="mt-8 p-8 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                            <p className="text-lg text-[var(--color-muted)] text-center leading-relaxed">
                                "Every year you wait, modernization becomes more expensive and more risky.
                                The question isn't <span className="text-white">whether</span> to modernize—it's
                                <span className="text-[var(--color-gold)]"> how fast</span> you can do it safely."
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* The Solution: Assessment Framework */}
            <Section id="assessment">
                <ScrollReveal>
                    <SectionHeader
                        badge="AI-Powered Assessment"
                        title="Start with Clarity, Not Chaos"
                        subtitle="Our proprietary assessment framework quantifies your modernization opportunity in just 4 weeks—with guaranteed ROI projections."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                                    <Database className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Codebase Analysis</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        AI scans your COBOL/PL/I codebase to map dependencies, identify dead code, and assess complexity.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-[var(--color-aurora-teal)]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">ROI Quantification</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        Detailed financial modeling with your CFO—licensing savings, labor reduction, and opportunity cost.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-[var(--color-success)]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Phase-by-Phase Roadmap</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        Prioritized migration plan with risk assessment, resource requirements, and timeline.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card className="p-8 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                            <h3 className="text-xl font-semibold text-white mb-6">Assessment Deliverables</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: <CheckCircle />, text: 'Complete codebase inventory & dependency map' },
                                    { icon: <CheckCircle />, text: '5-year TCO analysis with ROI projections' },
                                    { icon: <CheckCircle />, text: 'Risk-scored migration roadmap' },
                                    { icon: <CheckCircle />, text: 'Executive presentation deck' },
                                    { icon: <CheckCircle />, text: 'Technology recommendation report' },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-[var(--color-success)] w-5 h-5">{item.icon}</span>
                                        <span className="text-[var(--color-muted)]">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-serif text-white">4 Weeks</div>
                                        <div className="text-sm text-[var(--color-muted)]">Assessment Timeline</div>
                                    </div>
                                    <Button to="/assessment" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                                        Start Assessment
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Three-Phase Methodology */}
            <Section background="alt" id="methodology">
                <ScrollReveal>
                    <SectionHeader
                        badge="Proven Methodology"
                        title="Three Phases to Freedom"
                        subtitle="A structured approach that aligns our incentives with your success."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollReveal>
                        <Card className="p-8 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-gold)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
                                <span className="text-2xl font-serif text-[var(--color-gold)]">01</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Assess</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                AI-powered analysis of your mainframe portfolio. Quantify ROI with your finance team.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-[var(--color-subtle)]">
                                <Clock className="w-4 h-4" />
                                4-6 weeks
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full relative overflow-hidden border-[var(--color-aurora-teal)]/30">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-aurora-teal)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center mb-6">
                                <span className="text-2xl font-serif text-[var(--color-aurora-teal)]">02</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Transform</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Fixed-fee implementation with 95%+ accuracy guarantees. AI-assisted code conversion with RLHF validation.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-[var(--color-subtle)]">
                                <Clock className="w-4 h-4" />
                                8-16 weeks
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card className="p-8 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-success)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center mb-6">
                                <span className="text-2xl font-serif text-[var(--color-success)]">03</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Optimize</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Continuous monitoring with performance floor guarantees. Ongoing optimization and support.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-[var(--color-subtle)]">
                                <Clock className="w-4 h-4" />
                                Ongoing
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Technology Partners */}
            <Section id="technology">
                <ScrollReveal>
                    <SectionHeader
                        badge="Technology Stack"
                        title="Enterprise-Grade Infrastructure"
                        subtitle="We leverage best-in-class cloud and AI infrastructure—independent of any single hyperscaler."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'NVIDIA DGX', desc: 'AI Training Infrastructure' },
                        { name: 'AWS', desc: 'Cloud Migration' },
                        { name: 'Azure', desc: 'Enterprise Integration' },
                        { name: 'GCP', desc: 'Data Analytics' },
                        { name: 'Snowflake', desc: 'Data Warehouse' },
                        { name: 'Databricks', desc: 'ML Platform' },
                        { name: 'Kubernetes', desc: 'Container Orchestration' },
                        { name: 'Terraform', desc: 'Infrastructure as Code' },
                    ].map((tech) => (
                        <StaggerItem key={tech.name}>
                            <Card className="p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-card-elevated)] flex items-center justify-center mx-auto mb-3 text-[var(--color-muted)]">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h4 className="text-white font-medium text-sm">{tech.name}</h4>
                                <p className="text-xs text-[var(--color-subtle)] mt-1">{tech.desc}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Case Study Preview */}
            <Section background="alt" id="case-study">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="badge badge-gold mb-4">Case Study</span>
                            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white">
                                Fortune 100 Insurer Saves $8M Annually
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            {[
                                { value: '$8M', label: 'Annual Savings' },
                                { value: '18mo', label: 'Engagement' },
                                { value: '2.4M', label: 'Lines of COBOL' },
                                { value: '95%', label: 'Accuracy' },
                            ].map((stat, i) => (
                                <Card key={i} className="p-6 text-center">
                                    <div className="text-3xl font-serif text-[var(--color-gold)]">{stat.value}</div>
                                    <div className="text-sm text-[var(--color-muted)] mt-2">{stat.label}</div>
                                </Card>
                            ))}
                        </div>

                        <Card className="p-8">
                            <blockquote className="text-lg text-white italic leading-relaxed mb-6">
                                "Zero Foundry delivered what three previous vendors couldn't—a working modernization with
                                guaranteed accuracy. Their RLHF approach caught edge cases that would have caused production issues."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-bold">
                                    CTO
                                </div>
                                <div>
                                    <p className="text-white font-medium">Chief Technology Officer</p>
                                    <p className="text-[var(--color-muted)] text-sm">Fortune 100 Insurance Company</p>
                                </div>
                            </div>
                        </Card>

                        <div className="text-center mt-10">
                            <Button to="/case-studies" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
                                View All Case Studies
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Interactive TCO Calculator */}
            <Section id="tco-calculator">
                <ScrollReveal>
                    <SectionHeader
                        badge="ROI Calculator"
                        title="Calculate Your Savings"
                        subtitle="See how much you could save by modernizing your mainframe infrastructure."
                    />
                </ScrollReveal>
                <MainframeTCOCalculator />
            </Section>

            {/* Interactive Architecture */}
            <Section background="alt" id="architecture-diagram">
                <ScrollReveal>
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold text-white mb-2">Mainframe Migration Architecture</h3>
                        <p className="text-sm text-[var(--color-muted)]">Hover to explore the transformation flow</p>
                    </div>
                    <ArchitectureDiagram variant="mainframe" />
                </ScrollReveal>
            </Section>

            {/* Executive CTA */}
            <ExecutiveCTA
                title="Ready to Quantify Your Modernization Opportunity?"
                subtitle="Schedule a complimentary executive briefing. In 4 weeks, we'll deliver a comprehensive assessment with guaranteed ROI projections."
                buttonText="Start Free Assessment"
                buttonLink="/assessment"
            />
        </>
    )
}
