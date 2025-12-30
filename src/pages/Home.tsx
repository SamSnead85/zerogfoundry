import { ArrowRight, Cpu, Database, Users, Shield, TrendingUp, CheckCircle } from 'lucide-react'
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
    FeaturedIn,
    AwardsSection,
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

                    {/* Organic Blob 4 - Warm Champagne Bottom */}
                    <motion.div
                        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(212, 196, 168, 0.10) 0%, transparent 70%)',
                            filter: 'blur(100px)',
                        }}
                        animate={{
                            x: [0, -30, 45, -25, 0],
                            y: [0, -25, 15, -35, 0],
                            scale: [1, 1.08, 0.92, 1.04, 1],
                        }}
                        transition={{
                            duration: 28,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 4,
                        }}
                    />

                    {/* Premium Light Beam - Diagonal */}
                    <motion.div
                        className="absolute top-0 left-1/4 w-[600px] h-[1000px] opacity-[0.02]"
                        style={{
                            background: 'linear-gradient(135deg, transparent 0%, rgba(248, 246, 244, 0.3) 50%, transparent 100%)',
                            transform: 'rotate(-15deg)',
                            filter: 'blur(60px)',
                        }}
                        animate={{
                            opacity: [0.015, 0.035, 0.015],
                            x: [-50, 80, -50],
                        }}
                        transition={{
                            duration: 18,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />

                    {/* Elegant Floating Particles - Luxury Dust */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(25)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: `${1.5 + Math.random() * 2.5}px`,
                                    height: `${1.5 + Math.random() * 2.5}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${65 + Math.random() * 45}%`,
                                    background: i % 4 === 0
                                        ? 'rgba(201, 168, 108, 0.5)'
                                        : i % 4 === 1
                                            ? 'rgba(248, 246, 244, 0.35)'
                                            : i % 4 === 2
                                                ? 'rgba(196, 168, 152, 0.4)'
                                                : 'rgba(212, 196, 168, 0.45)',
                                }}
                                animate={{
                                    y: [0, -700],
                                    opacity: [0, 0.7, 0.5, 0],
                                }}
                                transition={{
                                    duration: 14 + Math.random() * 8,
                                    ease: "linear",
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                }}
                            />
                        ))}
                    </div>

                    {/* Refined Grid Pattern - Subtle Architecture */}
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

                    {/* Bottom gradient for content integration */}
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

                            {/* Elegant Display Headline - Playfair */}
                            <h1 className="font-serif text-[clamp(3.5rem,9vw,6rem)] font-normal leading-[0.95] tracking-[-0.02em] text-[var(--color-foreground)] mb-10">
                                From Demo to
                                <br />
                                <span className="italic font-light text-[var(--color-champagne)]">Production</span>
                            </h1>

                            {/* Refined Subtitle - Outfit */}
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
                                    to="/our-approach"
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

            {/* The Problem Section */}
            <Section background="alt" id="problem">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-white mb-6">The Last Mile Problem</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                            <span className="text-[var(--color-foreground)] font-semibold text-3xl">95%</span> of enterprise AI projects fail to
                            deliver a meaningful return on investment. You've seen the demos. You've run the pilots.
                            But you're still waiting for the results.
                        </p>
                        <p className="text-xl text-[var(--color-muted)] mt-6 leading-relaxed">
                            You're not alone. This is the <span className="text-white font-semibold">"last mile" problem</span> of AI,
                            and it's where most companies get stuck.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* The Agitation Section */}
            <Section id="agitation">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-white mb-6">The Market Reality</h2>
                                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                                    The market is flooded with AI platforms and generalist consultants who promise transformation
                                    but deliver little more than a slide deck.
                                </p>
                                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                                    They leave you with a system that works <span className="text-[var(--color-warning)] font-semibold">60% of the time</span>,
                                    which in the real world, is a <span className="text-[var(--color-error)] font-semibold">100% failure</span>.
                                </p>
                            </div>
                            <Card className="p-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-error)]/20 flex items-center justify-center text-[var(--color-error)]">
                                            <span className="text-2xl font-bold">95%</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">AI Projects Fail</p>
                                            <p className="text-sm text-[var(--color-muted)]">To deliver meaningful ROI</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-warning)]/20 flex items-center justify-center text-[var(--color-warning)]">
                                            <span className="text-2xl font-bold">60%</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Demo Accuracy</p>
                                            <p className="text-sm text-[var(--color-muted)]">Industry standard ceiling</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
                                            <span className="text-2xl font-bold">$B</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Wasted Investment</p>
                                            <p className="text-sm text-[var(--color-muted)]">In failed AI initiatives</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* The Solution Section */}
            <Section background="alt" id="solution">
                <ScrollReveal>
                    <SectionHeader
                        badge="Our Mission"
                        title="We Solve the Last Mile Problem"
                        subtitle="Zero G Foundry was created to solve this problem. We are not another AI platform. We are a team of elite AI strategists and engineers who deliver guaranteed outcomes."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    <StaggerItem>
                        <FeatureCard
                            icon={<Cpu className="w-6 h-6" />}
                            title="Production-Grade AI"
                            description="We specialize in transforming your most complex, mission-critical workflows with agentic AI that you can trust."
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <FeatureCard
                            icon={<Shield className="w-6 h-6" />}
                            title="Guaranteed Outcomes"
                            description="Unlike demos that work 60% of the time, we guarantee 95%+ accuracy with performance floors in our contracts."
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <FeatureCard
                            icon={<TrendingUp className="w-6 h-6" />}
                            title="Measurable ROI"
                            description="We quantify the value upfront and structure our pricing around the business outcomes we deliver."
                        />
                    </StaggerItem>
                </StaggerContainer>
            </Section >

            {/* The Differentiator Section */}
            < Section id="differentiator" >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="left">
                        <div>
                            <span className="badge mb-4">Our Methodology</span>
                            <h2 className="text-white mb-6">How We Guarantee Results Where Others Fail</h2>
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                                We've built a proprietary methodology that bridges the gap from demo to production.
                                By combining our high-performance infrastructure, proprietary data generation engine,
                                and a rigorous human-in-the-loop reinforcement process, we build AI systems that are
                                not just intelligent, but <span className="text-white font-semibold">reliable, auditable, and aligned with your business</span>.
                            </p>
                            <Button to="/our-approach" variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                                Learn About Our Approach
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="space-y-4">
                            <Card className="flex items-start gap-4 p-6">
                                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">DGX-Powered Development</h3>
                                    <p className="text-[var(--color-muted)]">High-performance infrastructure enabling rapid iteration and training at scale.</p>
                                </div>
                            </Card>
                            <Card className="flex items-start gap-4 p-6">
                                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)]">
                                    <Database className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Proprietary Data Generation</h3>
                                    <p className="text-[var(--color-muted)]">Solving AI's #1 bottleneck—data scarcity—with synthetic, high-quality training data.</p>
                                </div>
                            </Card>
                            <Card className="flex items-start gap-4 p-6">
                                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[var(--color-warning)]/10 flex items-center justify-center text-[var(--color-warning)]">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Human-in-the-Loop RLHF</h3>
                                    <p className="text-[var(--color-muted)]">Expert human feedback ensuring models are accurate, trustworthy, and aligned with business logic.</p>
                                </div>
                            </Card>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Trust Signals - Metrics */}
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

            {/* Social Proof - Case Study Preview */}
            <Section id="proof">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge mb-4">Featured Case Study</span>
                            <h2 className="text-white mb-6">Transforming Claims Processing for a Top-5 Insurer</h2>
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
                            <Button to="/case-studies" icon={<ArrowRight className="w-5 h-5" />}>
                                Read Full Case Study
                            </Button>
                        </div>

                        <Card className="p-8 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                            <blockquote className="text-lg text-white italic leading-relaxed mb-6">
                                "Zero G Foundry didn't just deliver a model—they delivered a transformation. Their
                                RLHF approach ensured our claims adjusters trusted the AI, and the results speak
                                for themselves. This is the first AI project that's actually delivered on its promises."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-bold">
                                    COO
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Chief Operations Officer</p>
                                    <p className="text-[var(--color-muted)]">Fortune 100 Insurance Company</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Thought Leadership - Featured In Media */}
            <FeaturedIn />

            {/* Industry Recognition */}
            <AwardsSection className="bg-[var(--color-background-alt)]" />

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
