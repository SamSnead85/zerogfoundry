import { ArrowRight, Brain, Cpu, Database, Zap, Shield, CheckCircle, Bot, Sparkles, RefreshCw, Target, Layers, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Section,
    SectionHeader,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
    ExecutiveCTA,
} from '../components'

export default function AgenticEngine() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#050505]">
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(201, 168, 108, 0.12) 0%, transparent 60%)',
                            filter: 'blur(80px)',
                        }}
                        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(79, 255, 237, 0.08) 0%, transparent 60%)',
                            filter: 'blur(80px)',
                        }}
                        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
                        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 2 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-32">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 text-[var(--color-gold)] text-sm font-medium mb-8">
                                <Brain className="w-4 h-4" />
                                Agentic Engine
                            </span>

                            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] text-[var(--color-foreground)] mb-8">
                                AI That Actually{' '}
                                <span className="italic text-[var(--color-gold)]">
                                    Works in Production
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 max-w-2xl leading-relaxed">
                                The secret to our 95%+ accuracy? Human-in-the-loop reinforcement learning that
                                bridges the gap between demo-grade and production-grade AI.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/platform-demo"
                                    className="group inline-flex items-center px-8 py-4 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,108,0.3)]"
                                >
                                    See It In Action
                                    <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/methodology"
                                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl transition-all hover:bg-white/5"
                                >
                                    View Methodology
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <Section background="alt" id="problem">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-8">
                            Why Most Enterprise AI <span className="italic text-[var(--color-error)]">Fails</span>
                        </h2>

                        <Card className="p-8 border-[var(--color-error)]/30 mb-8">
                            <div className="text-5xl font-serif text-[var(--color-error)] mb-4">95%</div>
                            <p className="text-white text-lg mb-2">of AI projects fail to deliver meaningful ROI</p>
                            <p className="text-[var(--color-muted)] text-sm">
                                Source: MIT Sloan Management Review, Gartner Research
                            </p>
                        </Card>

                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            The gap between a demo that works 60% of the time and a production system that works
                            95%+ of the time is enormous. This is the "last mile" problem of enterprise AI—and
                            it's where most implementations fail.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* RLHF Process */}
            <Section id="rlhf">
                <ScrollReveal>
                    <SectionHeader
                        badge="Our Secret Weapon"
                        title="Human-in-the-Loop RLHF"
                        subtitle="Reinforcement Learning from Human Feedback—the same approach that powers the world's best AI systems."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-gold)] font-serif text-xl">
                                    1
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Domain Expert Annotation</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        Your subject matter experts review AI outputs, providing feedback on accuracy,
                                        relevance, and business logic alignment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-aurora-teal)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-aurora-teal)] font-serif text-xl">
                                    2
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Reward Model Training</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        Human feedback trains a reward model that captures your specific quality
                                        criteria and business requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-success)] font-serif text-xl">
                                    3
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Continuous Optimization</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        The base model is continuously fine-tuned against the reward model,
                                        pushing accuracy from 60% toward 95%+.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card className="p-8 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                            <div className="text-center mb-8">
                                <div className="text-6xl font-serif text-[var(--color-gold)] mb-2">95%+</div>
                                <div className="text-[var(--color-muted)]">Production Accuracy Guaranteed</div>
                            </div>

                            {/* Accuracy visualization */}
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-[var(--color-muted)]">Baseline (Pre-RLHF)</span>
                                        <span className="text-sm text-[var(--color-error)]">~60%</span>
                                    </div>
                                    <div className="h-2 bg-[var(--color-background)] rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-[var(--color-error)]/60 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-[var(--color-muted)]">Post-RLHF</span>
                                        <span className="text-sm text-[var(--color-success)]">95%+</span>
                                    </div>
                                    <div className="h-2 bg-[var(--color-background)] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-success)] rounded-full"
                                            initial={{ width: '60%' }}
                                            whileInView={{ width: '95%' }}
                                            transition={{ duration: 1.5, ease: 'easeOut' }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-[var(--color-subtle)] text-sm mt-6">
                                Performance floor guaranteed in every contract
                            </p>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Capabilities */}
            <Section background="alt" id="capabilities">
                <ScrollReveal>
                    <SectionHeader
                        badge="Core Capabilities"
                        title="What the Engine Powers"
                        subtitle="The same agentic AI foundation drives both of our flagship solutions."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: <Database />, title: 'Code Intelligence', desc: 'Understand and transform legacy COBOL, PL/I, and Assembler with high fidelity.' },
                        { icon: <Bot />, title: 'Conversational AI', desc: 'Natural language processing tuned for enterprise customer interactions.' },
                        { icon: <Sparkles />, title: 'Document Understanding', desc: 'Extract insights from unstructured documents with 99%+ accuracy.' },
                        { icon: <Target />, title: 'Intent Recognition', desc: 'Classify customer intent and route to optimal resolution paths.' },
                        { icon: <RefreshCw />, title: 'Continuous Learning', desc: 'Models improve with every interaction through active feedback loops.' },
                        { icon: <Shield />, title: 'Explainable AI', desc: 'Transparent decision-making that satisfies audit and compliance requirements.' },
                    ].map((item) => (
                        <StaggerItem key={item.title}>
                            <Card className="p-6 h-full">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-[var(--color-aurora-teal)]">
                                    {item.icon}
                                </div>
                                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                                <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Infrastructure */}
            <Section id="infrastructure">
                <ScrollReveal>
                    <SectionHeader
                        badge="Enterprise Infrastructure"
                        title="Built on NVIDIA DGX"
                        subtitle="High-performance AI infrastructure enabling rapid iteration and training at scale."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <Card className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center">
                                    <Cpu className="w-7 h-7 text-[var(--color-success)]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">NVIDIA DGX Cluster</h3>
                                    <p className="text-[var(--color-muted)] text-sm">Enterprise AI Infrastructure</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    'Petaflops of compute for training and inference',
                                    'Sub-second response times for real-time applications',
                                    'Secure, isolated environments for each client',
                                    'Geo-redundant deployment for high availability',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                                        <span className="text-[var(--color-muted)] text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="space-y-6">
                            <Card className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-serif text-white">99.99%</div>
                                        <div className="text-sm text-[var(--color-muted)]">Uptime SLA</div>
                                    </div>
                                    <Zap className="w-8 h-8 text-[var(--color-gold)]" />
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-serif text-white">&lt;100ms</div>
                                        <div className="text-sm text-[var(--color-muted)]">Inference Latency</div>
                                    </div>
                                    <Layers className="w-8 h-8 text-[var(--color-aurora-teal)]" />
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-serif text-white">Multi-Region</div>
                                        <div className="text-sm text-[var(--color-muted)]">Global Deployment</div>
                                    </div>
                                    <GitBranch className="w-8 h-8 text-[var(--color-success)]" />
                                </div>
                            </Card>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* CTA */}
            <ExecutiveCTA
                title="See the Agentic Engine in Action"
                subtitle="Request a technical deep-dive with our AI engineering team. We'll show you exactly how we achieve 95%+ accuracy."
                buttonText="Request Technical Demo"
                buttonLink="/platform-demo"
            />
        </>
    )
}
