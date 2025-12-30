import { ArrowRight, Cpu, Database, Users, Shield, CheckCircle, Heart, Building2, Clock, DollarSign, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    FeatureCard,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
    AnimatedCounter,
    ExecutiveCTA,
} from '../components'

export default function Home() {
    return (
        <>
            {/* Premium Hero Section — Luxury Mesh Gradient Design */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
                {/* Ultra-Premium Organic Mesh Background */}
                <div className="absolute inset-0">
                    {/* Subtle grain texture */}
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Organic Blob 1 - Champagne Gold Top Left */}
                    <motion.div
                        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(201, 168, 108, 0.15) 0%, transparent 70%)',
                            filter: 'blur(100px)',
                        }}
                        animate={{
                            x: [0, 40, -30, 20, 0],
                            y: [0, 30, -20, 40, 0],
                            scale: [1, 1.1, 0.95, 1.05, 1],
                        }}
                        transition={{
                            duration: 30,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />

                    {/* Organic Blob 2 - Rose/Blush Top Right */}
                    <motion.div
                        className="absolute -top-20 -right-60 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(196, 168, 152, 0.12) 0%, transparent 70%)',
                            filter: 'blur(90px)',
                        }}
                        animate={{
                            x: [0, -35, 25, -15, 0],
                            y: [0, 25, -30, 20, 0],
                            scale: [1, 0.95, 1.1, 1, 1],
                        }}
                        transition={{
                            duration: 25,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 2,
                        }}
                    />

                    {/* Organic Blob 3 - Platinum/Silver Center */}
                    <motion.div
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(156, 165, 174, 0.08) 0%, transparent 70%)',
                            filter: 'blur(120px)',
                        }}
                        animate={{
                            x: [0, 50, -40, 30, 0],
                            y: [0, -30, 25, -20, 0],
                            scale: [1, 1.05, 0.98, 1.02, 1],
                        }}
                        transition={{
                            duration: 35,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 1,
                        }}
                    />

                    {/* Refined Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.012]"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(248, 246, 244, 0.4) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(248, 246, 244, 0.4) 1px, transparent 1px)
                            `,
                            backgroundSize: '80px 80px',
                        }}
                    />

                    {/* Soft Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,transparent_0%,rgba(10,10,10,0.5)_100%)]" />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-32 md:py-40">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Refined Eyebrow */}
                            <p className="text-[0.8rem] tracking-[0.25em] uppercase text-[var(--color-champagne)]/70 mb-8 font-light">
                                AI Transformation Consultancy
                            </p>

                            {/* Elegant Display Headline */}
                            <h1 className="font-serif text-[clamp(3.5rem,9vw,6rem)] font-normal leading-[0.95] tracking-[-0.02em] text-[var(--color-foreground)] mb-10">
                                From Demo to
                                <br />
                                <span className="italic font-light text-[var(--color-champagne)]">Production</span>
                            </h1>

                            {/* Refined Subtitle */}
                            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-12 max-w-xl leading-relaxed font-light tracking-wide">
                                We transform complex operational challenges into production-grade AI workflows for Fortune 1000 companies.
                                <span className="text-[var(--color-foreground)] font-medium"> Guaranteed outcomes.</span>
                            </p>

                            {/* Premium CTA Buttons */}
                            <div className="flex flex-wrap gap-5 mb-20">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-[#0a0a0a] font-medium text-[0.9375rem] tracking-wide rounded-lg transition-all duration-300 hover:bg-[var(--color-champagne)] hover:shadow-[0_8px_30px_rgba(201,168,108,0.15)]"
                                >
                                    Schedule Executive Briefing
                                    <ArrowRight className="w-4 h-4 ml-3" />
                                </Link>
                                <Link
                                    to="/methodology"
                                    className="inline-flex items-center px-8 py-4 border border-[var(--color-border-strong)] text-[var(--color-foreground)] font-medium text-[0.9375rem] tracking-wide rounded-lg transition-all duration-300 hover:bg-[var(--color-card-hover)] hover:border-[var(--color-champagne)]/30"
                                >
                                    Our Methodology
                                </Link>
                            </div>
                        </motion.div>

                        {/* Elegant Metrics Bar */}
                        <motion.div
                            className="grid grid-cols-3 gap-10 md:gap-20 pt-12 border-t border-[var(--color-border)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                        >
                            <div>
                                <div className="text-[2rem] md:text-[2.5rem] font-serif font-normal text-[var(--color-foreground)] tracking-tight">
                                    $12M<span className="text-[var(--color-muted)]">+</span>
                                </div>
                                <div className="text-[0.7rem] text-[var(--color-subtle)] uppercase tracking-[0.2em] mt-3 font-light">
                                    Average Savings
                                </div>
                            </div>
                            <div>
                                <div className="text-[2rem] md:text-[2.5rem] font-serif font-normal text-[var(--color-foreground)] tracking-tight">
                                    95<span className="text-[var(--color-muted)]">%</span>
                                </div>
                                <div className="text-[0.7rem] text-[var(--color-subtle)] uppercase tracking-[0.2em] mt-3 font-light">
                                    Production Accuracy
                                </div>
                            </div>
                            <div>
                                <div className="text-[2rem] md:text-[2.5rem] font-serif font-normal text-[var(--color-foreground)] tracking-tight">
                                    5<span className="text-[var(--color-muted)]">x</span>
                                </div>
                                <div className="text-[0.7rem] text-[var(--color-subtle)] uppercase tracking-[0.2em] mt-3 font-light">
                                    ROI Multiple
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MANIFESTO: The AI Industry Has a Trust Problem */}
            <Section background="alt" id="manifesto">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-[0.8rem] tracking-[0.25em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Our Perspective
                            </p>
                            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-8">
                                The AI Industry Has a
                                <span className="italic text-[var(--color-champagne)]"> Trust Problem</span>
                            </h2>
                        </div>

                        <div className="space-y-8 text-lg text-[var(--color-muted)] leading-relaxed">
                            <p>
                                Every enterprise AI pitch looks the same: impressive demos, bold ROI projections, and promises of transformation.
                                But here's the uncomfortable truth that vendors won't tell you:
                            </p>

                            <Card className="p-8 bg-gradient-to-br from-[var(--color-error)]/10 to-transparent border-[var(--color-error)]/20">
                                <div className="flex items-center gap-6">
                                    <div className="text-5xl font-serif text-[var(--color-error)]">95%</div>
                                    <div>
                                        <p className="text-[var(--color-foreground)] font-medium text-xl mb-1">of AI projects fail to deliver meaningful ROI</p>
                                        <p className="text-[var(--color-muted)] text-sm">Source: MIT Sloan Management Review, Gartner Research</p>
                                    </div>
                                </div>
                            </Card>

                            <p>
                                The gap between "demo-grade" and "production-grade" AI is enormous. A model that works 60% of the time in a controlled environment
                                is a <span className="text-[var(--color-foreground)] font-medium">100% failure</span> in production. This is the "last mile" problem of AI—and it's where
                                most companies get stuck.
                            </p>

                            <p>
                                We founded Zero G Foundry because we've lived this pain. We've seen the gap between research demos and production reality.
                                We've watched companies waste millions on AI initiatives that never reach their potential. And we decided to do something about it.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* SOLUTION: How We're Different */}
            <Section id="solution">
                <ScrollReveal>
                    <SectionHeader
                        badge="Our Approach"
                        title="We Solve the Last Mile Problem"
                        subtitle="Unlike demos that work 60% of the time, we guarantee 95%+ accuracy with performance floors in our contracts."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
                    <StaggerItem>
                        <FeatureCard
                            icon={<Cpu className="w-6 h-6" />}
                            title="DGX-Powered Development"
                            description="High-performance NVIDIA infrastructure enabling rapid iteration and training at scale. We bring enterprise compute to every engagement."
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <FeatureCard
                            icon={<Database className="w-6 h-6" />}
                            title="Proprietary Data Generation"
                            description="Solving AI's #1 bottleneck—data scarcity—with synthetic, high-quality training data tailored to your specific workflows."
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <FeatureCard
                            icon={<Users className="w-6 h-6" />}
                            title="Human-in-the-Loop RLHF"
                            description="Expert human feedback ensuring models are accurate, trustworthy, and aligned with your business logic. Trust that earns adoption."
                        />
                    </StaggerItem>
                </StaggerContainer>

                {/* 3-Phase Methodology Preview */}
                <ScrollReveal>
                    <Card className="p-8 lg:p-12">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-serif text-[var(--color-foreground)] mb-3">Three Phases to Transformation</h3>
                            <p className="text-[var(--color-muted)]">A structured approach that aligns our incentives with your success.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mx-auto mb-4 font-serif text-xl">01</div>
                                <h4 className="text-[var(--color-foreground)] font-medium mb-2">Assessment</h4>
                                <p className="text-sm text-[var(--color-muted)]">Deep-dive analysis and ROI quantification with your finance team</p>
                                <p className="text-xs text-[var(--color-subtle)] mt-2">4-6 weeks</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)] mx-auto mb-4 font-serif text-xl">02</div>
                                <h4 className="text-[var(--color-foreground)] font-medium mb-2">Implementation</h4>
                                <p className="text-sm text-[var(--color-muted)]">Fixed-fee solution development with guaranteed performance targets</p>
                                <p className="text-xs text-[var(--color-subtle)] mt-2">8-16 weeks</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-warning)]/10 flex items-center justify-center text-[var(--color-warning)] mx-auto mb-4 font-serif text-xl">03</div>
                                <h4 className="text-[var(--color-foreground)] font-medium mb-2">Optimization</h4>
                                <p className="text-sm text-[var(--color-muted)]">Continuous monitoring with performance floor guarantees</p>
                                <p className="text-xs text-[var(--color-subtle)] mt-2">Ongoing</p>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <Button to="/methodology" variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                                Explore Full Methodology
                            </Button>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* PROOF: Featured Case Study */}
            <Section background="alt" id="proof">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="badge mb-4">Featured Case Study</span>
                            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-foreground)]">
                                Transforming Claims Processing for a Top-5 Insurer
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                                    A Fortune 100 insurance company was struggling with claims processing inefficiency.
                                    45% of claims required manual review, costing $8M annually in labor and causing
                                    customer satisfaction issues.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        '95% automation rate (up from 55%)',
                                        '$3.8M annual savings (exceeded projection)',
                                        '48-hour reduction in processing time',
                                        '22-point increase in customer satisfaction',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Card className="p-8 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                                <Award className="w-10 h-10 text-[var(--color-champagne)] mb-6" />
                                <blockquote className="text-lg text-white italic leading-relaxed mb-6">
                                    "Zero G Foundry didn't just deliver a model—they delivered a transformation. Their
                                    RLHF approach ensured our claims adjusters trusted the AI, and the results speak
                                    for themselves. This is the first AI project that's actually delivered on its promises."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-champagne)]/20 flex items-center justify-center text-[var(--color-champagne)] font-bold">
                                        COO
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Chief Operations Officer</p>
                                        <p className="text-[var(--color-muted)]">Fortune 100 Insurance Company</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* EXPERTISE: Industry Focus */}
            <Section id="expertise">
                <ScrollReveal>
                    <SectionHeader
                        badge="Industry Expertise"
                        title="Healthcare & Financial Services"
                        subtitle="Production-grade AI workflows tailored for regulated industries with enterprise compliance."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <ScrollReveal>
                        <Card className="p-8 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Healthcare</h3>
                                    <p className="text-[var(--color-muted)] text-sm">HIPAA-compliant AI solutions</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between p-3 bg-[var(--color-background)]/50 rounded-lg">
                                    <span className="text-[var(--color-muted)]">Prior Authorization</span>
                                    <span className="text-[var(--color-foreground)] font-medium">85% straight-through</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-[var(--color-background)]/50 rounded-lg">
                                    <span className="text-[var(--color-muted)]">Claims Processing</span>
                                    <span className="text-[var(--color-foreground)] font-medium">$12M savings</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['HIPAA Compliance', 'PHI Protection', 'Clinical RLHF', 'EHR Integration'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs text-[var(--color-muted)] bg-[var(--color-background)]/50 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-[var(--color-success)]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Financial Services</h3>
                                    <p className="text-[var(--color-muted)] text-sm">SOC 2-compliant AI for finserv</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between p-3 bg-[var(--color-background)]/50 rounded-lg">
                                    <span className="text-[var(--color-muted)]">Document Processing</span>
                                    <span className="text-[var(--color-foreground)] font-medium">95% automation</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-[var(--color-background)]/50 rounded-lg">
                                    <span className="text-[var(--color-muted)]">Regulatory Compliance</span>
                                    <span className="text-[var(--color-foreground)] font-medium">70% faster review</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['SOC 2 Type II', 'ISO 27001', 'Explainable AI', 'Real-time Monitoring'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs text-[var(--color-muted)] bg-[var(--color-background)]/50 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>

                {/* Trust Signals */}
                <ScrollReveal>
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div className="p-6">
                            <Shield className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                            <p className="text-[var(--color-foreground)] font-medium">Enterprise Security</p>
                            <p className="text-sm text-[var(--color-muted)]">SOC 2, HIPAA, ISO 27001</p>
                        </div>
                        <div className="p-6">
                            <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                            <p className="text-[var(--color-foreground)] font-medium">4-Week Assessment</p>
                            <p className="text-sm text-[var(--color-muted)]">Comprehensive roadmap</p>
                        </div>
                        <div className="p-6">
                            <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                            <p className="text-[var(--color-foreground)] font-medium">Guaranteed ROI</p>
                            <p className="text-sm text-[var(--color-muted)]">Performance floors in every contract</p>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* METRICS: Trust Signals */}
            <Section background="alt" id="metrics">
                <ScrollReveal>
                    <SectionHeader
                        badge="Results That Speak"
                        title="Proven Track Record"
                        subtitle="Real outcomes from real engagements with Fortune 1000 companies."
                    />
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <ScrollReveal delay={0}>
                        <Card className="text-center p-8">
                            <div className="metric">
                                <AnimatedCounter target={95} suffix="%" />
                            </div>
                            <div className="metric-label">Production Accuracy</div>
                            <p className="text-sm text-[var(--color-muted)] mt-2">Up from 45% baseline</p>
                        </Card>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <Card className="text-center p-8">
                            <div className="metric">
                                $<AnimatedCounter target={12} />M
                            </div>
                            <div className="metric-label">Annual Savings</div>
                            <p className="text-sm text-[var(--color-muted)] mt-2">Average client impact</p>
                        </Card>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Card className="text-center p-8">
                            <div className="metric">
                                <AnimatedCounter target={4} />
                            </div>
                            <div className="metric-label">Weeks to Roadmap</div>
                            <p className="text-sm text-[var(--color-muted)] mt-2">Assessment timeline</p>
                        </Card>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <Card className="text-center p-8">
                            <div className="metric">
                                <AnimatedCounter target={5} />x
                            </div>
                            <div className="metric-label">ROI Multiple</div>
                            <p className="text-sm text-[var(--color-muted)] mt-2">Minimum target</p>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* PERSPECTIVE: Thought Leadership Preview */}
            <Section id="insights-preview">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="badge mb-4">Thought Leadership</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-foreground)] mb-6">
                            Perspectives on AI Transformation
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-12">
                            Deep dives into the strategies, technical approaches, and market trends shaping enterprise AI.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <ScrollReveal>
                        <Card className="p-8 h-full" padding="lg">
                            <span className="badge mb-4">Technical Deep Dive</span>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Why Your AI Agent Gets Stuck at 60% Accuracy
                            </h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                The hidden challenges of moving from demo to production, and why RLHF is the missing piece that most AI implementations overlook.
                            </p>
                            <Link to="/insights" className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Read Article <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full" padding="lg">
                            <span className="badge mb-4">Strategy</span>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                The Case Against Gainsharing in AI Contracts
                            </h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Why pure percentage-of-savings models fail, and how to structure value-based pricing that protects both parties.
                            </p>
                            <Link to="/insights" className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Read Article <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>
                </div>

                <div className="text-center">
                    <Button to="/insights" variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                        View All Insights
                    </Button>
                </div>
            </Section>

            {/* Executive CTA */}
            <ExecutiveCTA
                title="Stop Wasting Money on AI Experiments"
                subtitle="Schedule a complimentary executive briefing to quantify your AI transformation opportunity. In 4 weeks, we'll deliver a comprehensive roadmap with guaranteed ROI."
                buttonText="Book Your Executive Briefing"
                buttonLink="/contact"
            />
        </>
    )
}
