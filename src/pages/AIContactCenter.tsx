import { ArrowRight, Database, CheckCircle, Headphones, Bot, Globe, BarChart3, Zap, DollarSign, MessageSquare, Phone, Mail, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
    ExecutiveCTA,
    CompetitorComparison,
} from '../components'

export default function AIContactCenter() {
    const [isNeutralized, setIsNeutralized] = useState(false)

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#050505]">
                {/* Premium Background */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(79, 255, 237, 0.12) 0%, transparent 70%)',
                            filter: 'blur(100px)',
                        }}
                        animate={{
                            x: [0, -30, 20, 0],
                            y: [0, 25, -15, 0],
                            scale: [1, 1.1, 0.95, 1],
                        }}
                        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                        }}
                        animate={{
                            x: [0, 40, -30, 0],
                            y: [0, -20, 35, 0],
                        }}
                        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity, delay: 2 }}
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
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-aurora-teal)]/10 border border-[var(--color-aurora-teal)]/20 text-[var(--color-aurora-teal)] text-sm font-medium mb-8">
                                <Headphones className="w-4 h-4" />
                                AI Contact Center
                            </span>

                            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] text-[var(--color-foreground)] mb-8">
                                Transform Your Contact Center into an{' '}
                                <span className="italic text-[var(--color-aurora-teal)]">
                                    AI-Native Revenue Engine
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 max-w-2xl leading-relaxed">
                                Empower your agents with AI copilots, delight customers with instant resolution,
                                and unlock hidden revenue with omnichannel intelligence—all without the friction of legacy platforms.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/platform-demo"
                                    className="group inline-flex items-center px-8 py-4 bg-[var(--color-aurora-teal)] text-[#050505] font-medium rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(79,255,237,0.3)]"
                                >
                                    Request a Demo
                                    <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl transition-all hover:bg-white/5"
                                >
                                    Talk to Sales
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
                                <div className="text-3xl md:text-4xl font-serif text-[var(--color-aurora-teal)]">40%</div>
                                <div className="text-sm text-[var(--color-subtle)] mt-2">Reduction in AHT</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-serif text-white">85%</div>
                                <div className="text-sm text-[var(--color-subtle)] mt-2">First Call Resolution</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-serif text-[var(--color-gold)]">3x</div>
                                <div className="text-sm text-[var(--color-subtle)] mt-2">Agent Productivity</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase: AI Copilot */}
            <Section id="ai-copilot">
                <ScrollReveal>
                    <SectionHeader
                        badge="AI Copilot"
                        title="Your Agents' Secret Weapon"
                        subtitle="Real-time AI assistance that suggests responses, surfaces knowledge, and handles routine tasks—so agents can focus on what matters."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-6 h-6 text-[var(--color-aurora-teal)]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Smart Response Suggestions</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        AI analyzes context and suggests optimal responses in real-time, cutting response time by 60%.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                                    <Database className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Instant Knowledge Access</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        Automatically surfaces relevant articles, policies, and past resolutions during live conversations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-[var(--color-success)]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Automated After-Call Work</h4>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        AI generates summaries, updates CRM, and schedules follow-ups—saving 5+ minutes per call.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        {/* Agent Dashboard Mockup */}
                        <Card className="p-6 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-background-alt)]">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-aurora-teal)]/20 flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-[var(--color-aurora-teal)]" />
                                    </div>
                                    <div>
                                        <div className="text-white font-medium text-sm">AI Copilot Active</div>
                                        <div className="text-xs text-[var(--color-success)]">● Listening</div>
                                    </div>
                                </div>
                                <span className="text-xs text-[var(--color-subtle)]">Call Duration: 2:34</span>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-[var(--color-background)]/50 border border-[var(--color-border)]">
                                    <div className="text-xs text-[var(--color-aurora-teal)] mb-2">Suggested Response</div>
                                    <p className="text-white text-sm leading-relaxed">
                                        "I understand you're concerned about the billing discrepancy. Let me review your account—I can see the charge from March 15th. Would you like me to process a refund or credit for the next billing cycle?"
                                    </p>
                                </div>

                                <div className="p-4 rounded-lg bg-[var(--color-gold)]/5 border border-[var(--color-gold)]/20">
                                    <div className="text-xs text-[var(--color-gold)] mb-2">Knowledge Surfaced</div>
                                    <p className="text-[var(--color-muted)] text-sm">
                                        Refund Policy KB-2341: Full refunds within 30 days...
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Accent Neutralization Demo */}
            <Section background="alt" id="accent-neutralization">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-holographic-violet)]/10 border border-[var(--color-holographic-violet)]/20 text-[var(--color-holographic-violet)] text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Industry First
                        </span>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-6">
                            Real-Time Accent Neutralization
                        </h2>
                        <p className="text-lg text-[var(--color-muted)]">
                            Break down communication barriers instantly. Our AI adapts agent accents in real-time
                            for crystal-clear understanding—without changing the agent's voice identity.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Card className="max-w-3xl mx-auto p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-white font-medium">Experience the Difference</h3>

                            {/* Toggle Switch */}
                            <div className="flex items-center gap-4">
                                <span className={`text-sm ${!isNeutralized ? 'text-white' : 'text-[var(--color-subtle)]'}`}>
                                    Original
                                </span>
                                <button
                                    onClick={() => setIsNeutralized(!isNeutralized)}
                                    className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isNeutralized
                                        ? 'bg-[var(--color-aurora-teal)]'
                                        : 'bg-white/20'
                                        }`}
                                >
                                    <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 ${isNeutralized ? 'translate-x-9' : 'translate-x-1'
                                        }`} />
                                </button>
                                <span className={`text-sm ${isNeutralized ? 'text-[var(--color-aurora-teal)]' : 'text-[var(--color-subtle)]'}`}>
                                    Neutralized
                                </span>
                            </div>
                        </div>

                        {/* Audio Visualization Mockup */}
                        <div className="p-6 rounded-xl bg-[var(--color-background)]/50 border border-[var(--color-border)]">
                            <div className="flex items-center gap-4 mb-6">
                                <button className="w-14 h-14 rounded-full bg-[var(--color-aurora-teal)] flex items-center justify-center hover:scale-105 transition-transform">
                                    <Phone className="w-6 h-6 text-[#050505]" />
                                </button>
                                <div className="flex-1">
                                    {/* Waveform visualization */}
                                    <div className="flex items-center gap-1 h-12">
                                        {Array.from({ length: 40 }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`w-1 rounded-full ${isNeutralized ? 'bg-[var(--color-aurora-teal)]' : 'bg-white/40'}`}
                                                animate={{
                                                    height: [12, Math.random() * 30 + 10, 12],
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    repeat: Infinity,
                                                    delay: i * 0.05,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-[var(--color-muted)]">Sample: Customer Service Call</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${isNeutralized
                                    ? 'bg-[var(--color-aurora-teal)]/20 text-[var(--color-aurora-teal)]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {isNeutralized ? 'AI Enhanced' : 'Original Audio'}
                                </span>
                            </div>
                        </div>

                        <p className="text-center text-[var(--color-subtle)] text-sm mt-6">
                            Toggle between original and AI-neutralized audio to hear the difference
                        </p>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* Omnichannel Hub */}
            <Section id="omnichannel">
                <ScrollReveal>
                    <SectionHeader
                        badge="Omnichannel Intelligence"
                        title="Every Channel, One View"
                        subtitle="Unified inbox for voice, chat, email, and SMS—with full context preserved across every touchpoint."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: <Phone className="w-6 h-6" />, label: 'Voice', desc: 'AI-powered call handling' },
                        { icon: <MessageSquare className="w-6 h-6" />, label: 'Chat', desc: 'Real-time messaging' },
                        { icon: <Mail className="w-6 h-6" />, label: 'Email', desc: 'Smart ticket routing' },
                        { icon: <Globe className="w-6 h-6" />, label: 'SMS', desc: 'Two-way texting' },
                    ].map((channel) => (
                        <StaggerItem key={channel.label}>
                            <Card className="p-6 text-center hover:border-[var(--color-aurora-teal)]/30 transition-colors">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center mx-auto mb-4 text-[var(--color-aurora-teal)]">
                                    {channel.icon}
                                </div>
                                <h4 className="text-white font-medium mb-1">{channel.label}</h4>
                                <p className="text-sm text-[var(--color-muted)]">{channel.desc}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Analytics Dashboard Preview */}
            <Section background="alt" id="analytics">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <span className="badge badge-gold mb-6">Analytics Engine</span>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-6">
                            Insights That Drive Revenue
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-8">
                            Real-time dashboards with actionable insights. Track CSAT, AHT, FCR, and custom KPIs—with AI-powered recommendations for improvement.
                        </p>

                        <div className="space-y-4">
                            {[
                                'Real-time sentiment analysis across all channels',
                                'Predictive staffing recommendations',
                                'Revenue attribution by channel and agent',
                                'Customizable executive dashboards',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                                    <span className="text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        {/* Dashboard Mockup */}
                        <Card className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-white font-medium">Performance Dashboard</h4>
                                <span className="text-xs text-[var(--color-success)]">● Live</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-lg bg-[var(--color-background)]/50">
                                    <div className="text-2xl font-serif text-[var(--color-success)]">94.2%</div>
                                    <div className="text-xs text-[var(--color-muted)]">CSAT Score</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[var(--color-background)]/50">
                                    <div className="text-2xl font-serif text-[var(--color-aurora-teal)]">3:42</div>
                                    <div className="text-xs text-[var(--color-muted)]">Avg Handle Time</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[var(--color-background)]/50">
                                    <div className="text-2xl font-serif text-[var(--color-gold)]">87%</div>
                                    <div className="text-xs text-[var(--color-muted)]">FCR Rate</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[var(--color-background)]/50">
                                    <div className="text-2xl font-serif text-white">2,847</div>
                                    <div className="text-xs text-[var(--color-muted)]">Calls Today</div>
                                </div>
                            </div>

                            {/* Mini chart mockup */}
                            <div className="h-24 flex items-end gap-2">
                                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 70, 95].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t bg-gradient-to-t from-[var(--color-aurora-teal)]/50 to-[var(--color-aurora-teal)]"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Use Cases */}
            <Section id="use-cases">
                <ScrollReveal>
                    <SectionHeader
                        badge="Use Cases"
                        title="Built for Every Team"
                        subtitle="From sales to support to collections—one platform powers them all."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollReveal>
                        <Card className="p-8 h-full">
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center mb-6">
                                <BarChart3 className="w-7 h-7 text-[var(--color-success)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Sales Teams</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                AI-powered lead qualification, automatic follow-ups, and real-time coaching to close more deals.
                            </p>
                            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                                <li>• Predictive lead scoring</li>
                                <li>• Call recording & analysis</li>
                                <li>• Performance leaderboards</li>
                            </ul>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full border-[var(--color-aurora-teal)]/30">
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center mb-6">
                                <Headphones className="w-7 h-7 text-[var(--color-aurora-teal)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Support Teams</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Resolve issues faster with AI copilots, smart routing, and instant access to knowledge.
                            </p>
                            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                                <li>• Intelligent ticket routing</li>
                                <li>• Automated escalation</li>
                                <li>• Self-service deflection</li>
                            </ul>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card className="p-8 h-full">
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
                                <DollarSign className="w-7 h-7 text-[var(--color-gold)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Collections</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Compliant, empathetic collections with AI-optimized contact strategies and payment processing.
                            </p>
                            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                                <li>• Compliance automation</li>
                                <li>• Payment plan negotiation</li>
                                <li>• Predictive contact timing</li>
                            </ul>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Pricing Section */}
            <Section background="alt" id="pricing">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="badge mb-6">Pricing</span>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-lg text-[var(--color-muted)]">
                            Pay per seat, scale as you grow. Enterprise volume discounts available.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Starter */}
                    <ScrollReveal>
                        <Card className="p-8 h-full">
                            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                            <p className="text-[var(--color-muted)] text-sm mb-6">For small teams getting started</p>
                            <div className="mb-6">
                                <span className="text-4xl font-serif text-white">$99</span>
                                <span className="text-[var(--color-muted)]">/seat/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm">
                                {['AI Copilot', 'Voice + Chat', 'Basic Analytics', 'Email Support'].map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Button to="/contact" variant="secondary" className="w-full">
                                Get Started
                            </Button>
                        </Card>
                    </ScrollReveal>

                    {/* Professional - Featured */}
                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full border-[var(--color-aurora-teal)]/50 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-aurora-teal)] text-[#050505] text-xs font-bold rounded-full">
                                MOST POPULAR
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                            <p className="text-[var(--color-muted)] text-sm mb-6">For growing contact centers</p>
                            <div className="mb-6">
                                <span className="text-4xl font-serif text-[var(--color-aurora-teal)]">$199</span>
                                <span className="text-[var(--color-muted)]">/seat/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm">
                                {['Everything in Starter', 'Accent Neutralization', 'Omnichannel (all channels)', 'Advanced Analytics', 'Priority Support'].map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-aurora-teal)]" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/platform-demo"
                                className="block text-center py-3 bg-[var(--color-aurora-teal)] text-[#050505] font-medium rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Request Demo
                            </Link>
                        </Card>
                    </ScrollReveal>

                    {/* Enterprise */}
                    <ScrollReveal delay={0.2}>
                        <Card className="p-8 h-full">
                            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                            <p className="text-[var(--color-muted)] text-sm mb-6">For large-scale operations</p>
                            <div className="mb-6">
                                <span className="text-4xl font-serif text-white">Custom</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm">
                                {['Everything in Professional', 'Custom Integrations', 'Dedicated Success Manager', 'SLA Guarantees', 'On-premise Option'].map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Button to="/contact" variant="secondary" className="w-full">
                                Contact Sales
                            </Button>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Competitor Comparison */}
            <Section id="compare">
                <ScrollReveal>
                    <SectionHeader
                        badge="Competitive Analysis"
                        title="Why Zero Foundry?"
                        subtitle="See how our AI-native platform compares to legacy and hyperscaler alternatives."
                    />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <CompetitorComparison variant="contact-center" className="max-w-5xl mx-auto" />
                </ScrollReveal>
            </Section>

            {/* Executive CTA */}
            <ExecutiveCTA
                title="Ready to Transform Your Contact Center?"
                subtitle="Join the enterprises already seeing 40%+ efficiency gains. Schedule a personalized demo with our solutions team."
                buttonText="Request a Demo"
                buttonLink="/platform-demo"
            />
        </>
    )
}
