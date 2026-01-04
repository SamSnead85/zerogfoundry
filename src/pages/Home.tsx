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
    RecognitionSection,
} from '../components'

export default function Home() {
    return (
        <>
            {/* Ultra-Premium Hero Section — Holographic Mesh Design */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
                {/* Million-Dollar Organic Mesh Background */}
                <div className="absolute inset-0">
                    {/* Premium grain texture */}
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Primary Gold Orb - Top Left */}
                    <motion.div
                        className="absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(201, 168, 108, 0.18) 0%, transparent 70%)',
                            filter: 'blur(120px)',
                        }}
                        animate={{
                            x: [0, 50, -40, 30, 0],
                            y: [0, 40, -30, 50, 0],
                            scale: [1, 1.15, 0.9, 1.1, 1],
                        }}
                        transition={{
                            duration: 35,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />

                    {/* Aurora Teal Orb - Top Right */}
                    <motion.div
                        className="absolute -top-20 -right-40 w-[700px] h-[700px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(79, 255, 237, 0.08) 0%, transparent 70%)',
                            filter: 'blur(100px)',
                        }}
                        animate={{
                            x: [0, -45, 35, -25, 0],
                            y: [0, 35, -40, 30, 0],
                            scale: [1, 0.9, 1.15, 0.95, 1],
                        }}
                        transition={{
                            duration: 30,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 3,
                        }}
                    />

                    {/* Holographic Violet Orb - Center */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)',
                            filter: 'blur(140px)',
                        }}
                        animate={{
                            x: [0, 60, -50, 40, 0],
                            y: [0, -40, 35, -30, 0],
                            scale: [1, 1.1, 0.95, 1.08, 1],
                        }}
                        transition={{
                            duration: 40,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 2,
                        }}
                    />

                    {/* Premium Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.01]"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(250, 250, 250, 0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(250, 250, 250, 0.5) 1px, transparent 1px)
                            `,
                            backgroundSize: '100px 100px',
                        }}
                    />

                    {/* Cinematic Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,transparent_0%,rgba(5,5,5,0.6)_100%)]" />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-36 md:py-44">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Ultra-Premium Display Headline */}
                            <h1 className="font-serif text-[clamp(3.5rem,10vw,7rem)] font-normal leading-[0.9] tracking-[-0.025em] text-[var(--color-foreground)] mb-8">
                                From Demo to
                                <br />
                                <span
                                    className="italic font-light"
                                    style={{
                                        background: 'linear-gradient(135deg, #fafafa 0%, rgba(201, 168, 108, 0.9) 50%, #fafafa 100%)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        animation: 'shimmer 4s ease-in-out infinite',
                                    }}
                                >
                                    Production
                                </span>
                            </h1>

                            {/* Enhanced Subtitle */}
                            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-14 max-w-2xl leading-[1.8] font-light tracking-wide">
                                We transform complex operational challenges into
                                <span className="text-[var(--color-foreground)]"> production-grade AI workflows</span> for
                                enterprise clients. Guaranteed outcomes, measurable results.
                            </p>

                            {/* Premium CTA Buttons */}
                            <div className="flex flex-wrap gap-5 mb-24">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-[#050505] font-medium text-[0.9375rem] tracking-wide rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,108,0.3)] hover:scale-[1.02]"
                                >
                                    Schedule Executive Briefing
                                    <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/methodology"
                                    className="inline-flex items-center px-8 py-4 border border-[var(--color-border-strong)] text-[var(--color-foreground)] font-medium text-[0.9375rem] tracking-wide rounded-xl transition-all duration-500 hover:bg-[var(--color-glass)] hover:border-[var(--color-gold)]/30 hover:shadow-[0_0_40px_rgba(79,255,237,0.1)]"
                                >
                                    Explore Methodology
                                </Link>
                            </div>
                        </motion.div>

                        {/* Premium Metrics Bar with Glow Effects */}
                        <motion.div
                            className="grid grid-cols-3 gap-10 md:gap-24 pt-14 border-t border-[var(--color-border)]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.2 }}
                        >
                            <div className="group">
                                <div className="text-[2.25rem] md:text-[3rem] font-serif font-normal text-[var(--color-foreground)] tracking-tight transition-all duration-500 group-hover:text-[var(--color-gold)]">
                                    $12M<span className="text-[var(--color-muted)]">+</span>
                                </div>
                                <div className="text-[0.65rem] text-[var(--color-subtle)] uppercase tracking-[0.25em] mt-3 font-medium">
                                    Average Savings
                                </div>
                            </div>
                            <div className="group">
                                <div className="text-[2.25rem] md:text-[3rem] font-serif font-normal text-[var(--color-foreground)] tracking-tight transition-all duration-500 group-hover:text-[var(--color-aurora-teal)]">
                                    95<span className="text-[var(--color-muted)]">%</span>
                                </div>
                                <div className="text-[0.65rem] text-[var(--color-subtle)] uppercase tracking-[0.25em] mt-3 font-medium">
                                    Production Accuracy
                                </div>
                            </div>
                            <div className="group">
                                <div className="text-[2.25rem] md:text-[3rem] font-serif font-normal text-[var(--color-foreground)] tracking-tight transition-all duration-500 group-hover:text-[var(--color-holographic-violet)]">
                                    5<span className="text-[var(--color-muted)]">x</span>
                                </div>
                                <div className="text-[0.65rem] text-[var(--color-subtle)] uppercase tracking-[0.25em] mt-3 font-medium">
                                    ROI Multiple
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STRATEGIC PARTNERS & TECHNOLOGY ALLIANCES */}
            <section className="py-20 border-b border-[var(--color-border)]">
                <div className="container">
                    <div className="text-center mb-12">
                        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-subtle)] mb-8 font-medium">
                            Strategic Technology Partners
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                            {[
                                { name: 'NVIDIA', letter: 'N' },
                                { name: 'AWS', letter: 'A' },
                                { name: 'Microsoft Azure', letter: 'M' },
                                { name: 'Google Cloud', letter: 'G' },
                                { name: 'Snowflake', letter: 'S' },
                            ].map((partner) => (
                                <div
                                    key={partner.name}
                                    className="group flex items-center gap-3 text-[var(--color-muted)] hover:text-white transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-gold)]/30 transition-colors">
                                        <span className="text-sm font-bold text-[var(--color-subtle)] group-hover:text-[var(--color-gold)] transition-colors">
                                            {partner.letter}
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium tracking-wide">{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backed By / Advisory Signals */}
                    <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
                        <div className="text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-subtle)] mb-8 font-medium">
                                Backed By Industry Leaders
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-8">
                                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                                        <span className="text-xs font-bold text-[var(--color-gold)]">VC</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-sm font-medium">Tier-1 Venture Partners</p>
                                        <p className="text-[var(--color-subtle)] text-xs">Strategic Investment</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                                        <span className="text-xs font-bold text-[var(--color-accent)]">F50</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-sm font-medium">Fortune 50 Advisory</p>
                                        <p className="text-[var(--color-subtle)] text-xs">Enterprise Partnerships</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                                    <div className="w-8 h-8 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
                                        <span className="text-xs font-bold text-[var(--color-success)]">AI</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-sm font-medium">AI Research Labs</p>
                                        <p className="text-[var(--color-subtle)] text-xs">Technical Collaboration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

            {/* INDUSTRY RECOGNITION & CERTIFICATIONS */}
            <RecognitionSection />

            {/* PROOF: Featured Case Studies */}
            <Section background="alt" id="proof">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-4 font-light">
                            Enterprise Case Studies
                        </p>
                        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-[var(--color-foreground)]">
                            Proven Enterprise Impact
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Case Study 1: Healthcare/Insurance */}
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto mb-20">
                        <div className="text-center mb-8">
                            <span className="badge mb-4">Healthcare • Claims Automation</span>
                            <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-foreground)]">
                                Transforming Claims Processing for a Top-5 Insurer
                            </h3>
                        </div>

                        {/* Engagement Scope Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                                <span className="text-sm text-white font-medium">18-Month Engagement</span>
                            </div>
                            <div className="w-px h-4 bg-[var(--color-border)]" />
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                <span className="text-sm text-white font-medium">12-Person Dedicated Team</span>
                            </div>
                            <div className="w-px h-4 bg-[var(--color-border)]" />
                            <div className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-[var(--color-success)]" />
                                <span className="text-sm text-[var(--color-muted)]">NVIDIA DGX • Azure ML • Custom RLHF</span>
                            </div>
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

                {/* Case Study 2: Financial Services */}
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="badge mb-4">Financial Services • Document Intelligence</span>
                            <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-foreground)]">
                                Automating Regulatory Compliance for a Global Bank
                            </h3>
                        </div>

                        {/* Engagement Scope Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                                <span className="text-sm text-white font-medium">14-Month Engagement</span>
                            </div>
                            <div className="w-px h-4 bg-[var(--color-border)]" />
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                <span className="text-sm text-white font-medium">8-Person Specialized Team</span>
                            </div>
                            <div className="w-px h-4 bg-[var(--color-border)]" />
                            <div className="flex items-center gap-2">
                                <Database className="w-4 h-4 text-[var(--color-success)]" />
                                <span className="text-sm text-[var(--color-muted)]">GCP Vertex AI • Snowflake • Custom NLP</span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <Card className="p-8 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                                <Building2 className="w-10 h-10 text-[var(--color-success)] mb-6" />
                                <blockquote className="text-lg text-white italic leading-relaxed mb-6">
                                    "The compliance review process that used to take our team 6 weeks now takes 4 days.
                                    Zero G Foundry's approach to document intelligence has fundamentally changed how we
                                    handle regulatory submissions."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center text-[var(--color-success)] font-bold">
                                        CRO
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Chief Risk Officer</p>
                                        <p className="text-[var(--color-muted)]">Top-20 Global Financial Institution</p>
                                    </div>
                                </div>
                            </Card>

                            <div>
                                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                                    A global financial institution needed to process thousands of regulatory documents
                                    across multiple jurisdictions. Manual review was creating bottlenecks and compliance
                                    risks with a 4% error rate in critical filings.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        '92% reduction in document processing time',
                                        '99.7% accuracy on regulatory classifications',
                                        '$5.2M annual compliance cost reduction',
                                        'Zero critical filing errors post-deployment',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
                        subtitle="Real outcomes from real engagements with enterprise clients."
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
