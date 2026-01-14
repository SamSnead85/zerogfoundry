import { ArrowRight, Layers, Shield, Lock, Zap, GitBranch, Globe, CheckCircle, Server, Bot, Brain, Sparkles } from 'lucide-react'
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

export default function PlatformOverview() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#050505]">
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
                            filter: 'blur(100px)',
                        }}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-holographic-violet)]/10 border border-[var(--color-holographic-violet)]/20 text-[var(--color-holographic-violet)] text-sm font-medium mb-8">
                                <Layers className="w-4 h-4" />
                                Platform
                            </span>

                            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] text-[var(--color-foreground)] mb-8">
                                The Unified AI{' '}
                                <span className="italic text-[var(--color-holographic-violet)]">
                                    Transformation Platform
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
                                One platform. Two solutions. Infinite possibilities. Zero Foundry's agentic AI foundation
                                powers both mainframe modernization and contact center transformation.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/platform/agentic-engine"
                                    className="group inline-flex items-center px-8 py-4 bg-white text-[#050505] font-medium rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
                                >
                                    Explore the Engine
                                    <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/security"
                                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl transition-all hover:bg-white/5"
                                >
                                    Security & Compliance
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Platform Architecture */}
            <Section id="architecture">
                <ScrollReveal>
                    <SectionHeader
                        badge="Architecture"
                        title="Built for Enterprise Scale"
                        subtitle="A modern, cloud-native architecture designed for the most demanding enterprise workloads."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    <ScrollReveal>
                        <Card className="p-8 h-full">
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
                                <Brain className="w-7 h-7 text-[var(--color-gold)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Agentic AI Core</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Foundation models fine-tuned with RLHF for enterprise accuracy. 95%+ performance guaranteed.
                            </p>
                            <Link to="/platform/agentic-engine" className="text-[var(--color-gold)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full">
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center mb-6">
                                <GitBranch className="w-7 h-7 text-[var(--color-aurora-teal)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Integration Layer</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Pre-built connectors for CRM, ERP, and legacy systems. Custom APIs for seamless integration.
                            </p>
                            <span className="text-[var(--color-muted)] text-sm">200+ Integrations</span>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card className="p-8 h-full">
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-[var(--color-success)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Security Fabric</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Enterprise-grade security with SOC 2, HIPAA, and ISO 27001 compliance built in.
                            </p>
                            <Link to="/security" className="text-[var(--color-success)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                View Certifications <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Two Solutions */}
            <Section background="alt" id="solutions">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="badge mb-6">Two Solutions, One Platform</span>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-4">
                            End-to-End AI Transformation
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                            From core systems to customer experience—we have you covered.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    <ScrollReveal>
                        <Card className="p-10 h-full hover:border-[var(--color-gold)]/40 transition-colors group">
                            <div className="w-16 h-16 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Server className="w-8 h-8 text-[var(--color-gold)]" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Mainframe Modernization</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Assess, reimagine, and transform legacy systems. Break free from the mainframe anchor
                                with AI-powered code conversion and guaranteed accuracy.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['COBOL/PL/I to Modern Languages', 'AI-Powered Assessment', '95%+ Accuracy Guarantee'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/solutions/mainframe"
                                className="inline-flex items-center gap-2 text-[var(--color-gold)] font-medium hover:gap-3 transition-all"
                            >
                                Explore Mainframe Solutions <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-10 h-full hover:border-[var(--color-aurora-teal)]/40 transition-colors group">
                            <div className="w-16 h-16 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Bot className="w-8 h-8 text-[var(--color-aurora-teal)]" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">AI Contact Center</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Transform your contact center into an AI-native revenue engine. Empower agents
                                and delight customers with agentic AI assistance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Real-Time AI Copilot', 'Accent Neutralization', 'Omnichannel Intelligence'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-aurora-teal)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/solutions/contact-center"
                                className="inline-flex items-center gap-2 text-[var(--color-aurora-teal)] font-medium hover:gap-3 transition-all"
                            >
                                Explore Contact Center <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Differentiators */}
            <Section id="differentiators">
                <ScrollReveal>
                    <SectionHeader
                        badge="Why Zero Foundry"
                        title="The Independent Advantage"
                        subtitle="Unlike hyperscaler-locked solutions, we give you freedom and flexibility."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Lock />, title: 'No Lock-In', desc: 'Multi-cloud architecture. Your choice of infrastructure.' },
                        { icon: <Zap />, title: 'Production-Grade', desc: '95%+ accuracy guaranteed. Performance floors in every contract.' },
                        { icon: <Globe />, title: 'Enterprise Scale', desc: 'Built for Fortune 500. SOC 2, HIPAA, ISO 27001 compliant.' },
                        { icon: <Sparkles />, title: 'Continuous Learning', desc: 'RLHF ensures models improve with every interaction.' },
                    ].map((item) => (
                        <StaggerItem key={item.title}>
                            <Card className="p-6 h-full text-center">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 text-white">
                                    {item.icon}
                                </div>
                                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                                <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* CTA */}
            <ExecutiveCTA
                title="Ready to Transform with Zero Foundry?"
                subtitle="Schedule a platform demo to see how our unified AI platform can accelerate your transformation."
                buttonText="Request a Demo"
                buttonLink="/platform-demo"
            />
        </>
    )
}
