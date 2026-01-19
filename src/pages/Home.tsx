import { ArrowRight, Server, Headphones, Bot, Phone, Globe, BarChart3, Sparkles } from 'lucide-react'
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
    RecognitionSection,
    LiveMetrics,
} from '../components'

export default function Home() {
    const [isNeutralized, setIsNeutralized] = useState(false)

    return (
        <>
            {/* OPTION C: Cinematic Overlay Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Server Room Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/zerog-hero-bg.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Deep Blue Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0d1f3c]/90 to-[#061224]/95" />

                    {/* Cinematic Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,transparent_0%,rgba(6,18,36,0.7)_100%)]" />

                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Hero Headline - "Escape the gravity" */}
                            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-light text-white mb-6 leading-[1.1] tracking-tight">
                                Escape the gravity
                                <br />
                                <span className="font-normal">of legacy systems</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                Escape the gravity of legacy systems with next-generation
                                AI transformation, better outcomes, and future-ready technologies.
                            </p>

                            {/* CTA Button */}
                            <div className="flex justify-center">
                                <Link
                                    to="/platform-demo"
                                    className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-[0.9375rem] tracking-wide rounded-lg transition-all duration-500 hover:bg-white/20 hover:border-white/40"
                                >
                                    REQUEST A DEMO
                                </Link>
                            </div>
                        </motion.div>

                        {/* Premium Metrics Bar */}
                        <motion.div
                            className="grid grid-cols-3 gap-10 md:gap-24 pt-20 mt-20 border-t border-white/10 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.2 }}
                        >
                            <div className="group text-center">
                                <div className="text-[2.25rem] md:text-[3rem] text-white font-light tracking-tight">
                                    $12M<span className="text-white/50">+</span>
                                </div>
                                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50 mt-2">
                                    Average Savings
                                </div>
                            </div>
                            <div className="group text-center">
                                <div className="text-[2.25rem] md:text-[3rem] text-white font-light tracking-tight">
                                    95<span className="text-white/50">%</span>
                                </div>
                                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50 mt-2">
                                    Production Accuracy
                                </div>
                            </div>
                            <div className="group text-center">
                                <div className="text-[2.25rem] md:text-[3rem] text-white font-light tracking-tight">
                                    5<span className="text-white/50">x</span>
                                </div>
                                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50 mt-2">
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
                </div>
            </section>

            {/* LIVE PERFORMANCE METRICS */}
            <Section id="metrics">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <p className="text-[0.8rem] tracking-[0.25em] uppercase text-[var(--color-champagne)]/70 mb-4 font-light">
                            Real-Time Results
                        </p>
                        <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-normal text-white">
                            Live Platform Performance
                        </h2>
                    </div>
                    <LiveMetrics />
                </ScrollReveal>
            </Section>

            {/* THE PROBLEM: Twin Drags on Innovation */}
            <Section background="alt" id="problem">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-[0.8rem] tracking-[0.25em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                The Challenge
                            </p>
                            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-8">
                                Your Legacy Core and Customer Experience are{' '}
                                <span className="italic text-[var(--color-error)]">Holding You Back</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mainframe Anchor */}
                            <Card className="p-8 border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/40 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                                        <Server className="w-7 h-7 text-[var(--color-gold)]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">The Mainframe Anchor</h3>
                                </div>
                                <ul className="space-y-3 text-[var(--color-muted)]">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 flex-shrink-0" />
                                        $65B+ spent annually on legacy systems
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 flex-shrink-0" />
                                        75% of COBOL developers retiring within 10 years
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 flex-shrink-0" />
                                        Innovation velocity limited by technical debt
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 flex-shrink-0" />
                                        Critical business logic locked in aging systems
                                    </li>
                                </ul>
                            </Card>

                            {/* Contact Center Friction */}
                            <Card className="p-8 border-[var(--color-aurora-teal)]/20 hover:border-[var(--color-aurora-teal)]/40 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center">
                                        <Headphones className="w-7 h-7 text-[var(--color-aurora-teal)]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Contact Center Friction</h3>
                                </div>
                                <ul className="space-y-3 text-[var(--color-muted)]">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-aurora-teal)] mt-2 flex-shrink-0" />
                                        Agent burnout and 40%+ annual turnover
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-aurora-teal)] mt-2 flex-shrink-0" />
                                        Siloed channels frustrate customers
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-aurora-teal)] mt-2 flex-shrink-0" />
                                        Rising customer expectations unmet
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-aurora-teal)] mt-2 flex-shrink-0" />
                                        Revenue leakage from poor CX
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* THE SOLUTION: Two Solutions, One Engine */}
            <Section id="solution">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="badge badge-gold mb-6">The Zero Foundry Advantage</span>
                        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                            Two Solutions. One Agentic AI Engine.
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                            Transform both your core systems and customer experience with a unified AI platform—built for enterprise scale, guaranteed for production.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <ScrollReveal>
                        <Card className="p-10 h-full hover:border-[var(--color-gold)]/40 transition-all duration-500 group cursor-pointer">
                            <Link to="/solutions/mainframe" className="block">
                                <div className="w-16 h-16 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Server className="w-8 h-8 text-[var(--color-gold)]" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">Mainframe Modernization</h3>
                                <p className="text-[var(--color-muted)] mb-6">
                                    Assess, reimagine, and transform your legacy core. AI-powered code conversion with 95%+ accuracy, guaranteed.
                                </p>
                                <div className="flex items-center gap-2 text-[var(--color-gold)] font-medium group-hover:gap-3 transition-all">
                                    Explore Solutions <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-10 h-full hover:border-[var(--color-aurora-teal)]/40 transition-all duration-500 group cursor-pointer">
                            <Link to="/solutions/contact-center" className="block">
                                <div className="w-16 h-16 rounded-xl bg-[var(--color-aurora-teal)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Bot className="w-8 h-8 text-[var(--color-aurora-teal)]" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">AI Contact Center</h3>
                                <p className="text-[var(--color-muted)] mb-6">
                                    Transform your contact center into an AI-native revenue engine. Real-time copilots, accent neutralization, omnichannel intelligence.
                                </p>
                                <div className="flex items-center gap-2 text-[var(--color-aurora-teal)] font-medium group-hover:gap-3 transition-all">
                                    Explore Solutions <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* AI CONTACT CENTER DEMO: Accent Neutralization */}
            <Section background="alt" id="contact-center-demo">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-holographic-violet)]/10 border border-[var(--color-holographic-violet)]/20 text-[var(--color-holographic-violet)] text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Experience the Future
                        </span>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-4">
                            Real-Time Accent Neutralization
                        </h2>
                        <p className="text-lg text-[var(--color-muted)]">
                            Crystal-clear communication, regardless of accent. Toggle to hear the difference.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Card className="max-w-3xl mx-auto p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-aurora-teal)]/20 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[var(--color-aurora-teal)]" />
                                </div>
                                <span className="text-white font-medium">Live Call Demo</span>
                            </div>

                            {/* Toggle */}
                            <div className="flex items-center gap-4">
                                <span className={`text-sm ${!isNeutralized ? 'text-white' : 'text-[var(--color-subtle)]'}`}>
                                    Original
                                </span>
                                <button
                                    onClick={() => setIsNeutralized(!isNeutralized)}
                                    className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isNeutralized ? 'bg-[var(--color-aurora-teal)]' : 'bg-white/20'
                                        }`}
                                >
                                    <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 ${isNeutralized ? 'translate-x-7' : 'translate-x-0.5'
                                        }`} />
                                </button>
                                <span className={`text-sm ${isNeutralized ? 'text-[var(--color-aurora-teal)]' : 'text-[var(--color-subtle)]'}`}>
                                    AI Enhanced
                                </span>
                            </div>
                        </div>

                        {/* Waveform */}
                        <div className="p-6 rounded-xl bg-[var(--color-background)]/50 border border-[var(--color-border)]">
                            <div className="flex items-center gap-1 h-16 justify-center">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-1 rounded-full ${isNeutralized ? 'bg-[var(--color-aurora-teal)]' : 'bg-white/30'}`}
                                        animate={{
                                            height: [8, Math.random() * 40 + 8, 8],
                                        }}
                                        transition={{
                                            duration: 0.6 + Math.random() * 0.4,
                                            repeat: Infinity,
                                            delay: i * 0.02,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                {[
                                    { icon: <Bot className="w-4 h-4" />, label: 'AI Copilot' },
                                    { icon: <Globe className="w-4 h-4" />, label: 'Omnichannel' },
                                    { icon: <BarChart3 className="w-4 h-4" />, label: 'Analytics' },
                                ].map((feature) => (
                                    <div key={feature.label} className="flex items-center gap-2 text-[var(--color-muted)] text-sm">
                                        {feature.icon}
                                        {feature.label}
                                    </div>
                                ))}
                            </div>
                            <Link to="/solutions/contact-center" className="text-[var(--color-aurora-teal)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* HOW IT WORKS: Three-Phase Methodology */}
            <Section id="methodology">
                <ScrollReveal>
                    <SectionHeader
                        badge="Our Methodology"
                        title="Guaranteed Production-Grade Results"
                        subtitle="A structured approach that aligns our incentives with your success."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16">
                    <StaggerItem>
                        <Card className="p-8 h-full text-center">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] mx-auto mb-6 font-serif text-2xl">
                                01
                            </div>
                            <h4 className="text-white font-medium text-lg mb-3">Assess</h4>
                            <p className="text-sm text-[var(--color-muted)]">
                                AI-powered analysis and ROI quantification with your finance team
                            </p>
                            <p className="text-xs text-[var(--color-subtle)] mt-4">4-6 weeks</p>
                        </Card>
                    </StaggerItem>
                    <StaggerItem>
                        <Card className="p-8 h-full text-center border-[var(--color-aurora-teal)]/30">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-aurora-teal)]/10 flex items-center justify-center text-[var(--color-aurora-teal)] mx-auto mb-6 font-serif text-2xl">
                                02
                            </div>
                            <h4 className="text-white font-medium text-lg mb-3">Transform</h4>
                            <p className="text-sm text-[var(--color-muted)]">
                                Fixed-fee implementation with 95%+ accuracy guarantees
                            </p>
                            <p className="text-xs text-[var(--color-subtle)] mt-4">8-16 weeks</p>
                        </Card>
                    </StaggerItem>
                    <StaggerItem>
                        <Card className="p-8 h-full text-center">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)] mx-auto mb-6 font-serif text-2xl">
                                03
                            </div>
                            <h4 className="text-white font-medium text-lg mb-3">Optimize</h4>
                            <p className="text-sm text-[var(--color-muted)]">
                                Continuous monitoring with performance floor guarantees
                            </p>
                            <p className="text-xs text-[var(--color-subtle)] mt-4">Ongoing</p>
                        </Card>
                    </StaggerItem>
                </StaggerContainer>

                <div className="text-center">
                    <Button to="/methodology" variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                        Explore Full Methodology
                    </Button>
                </div>
            </Section>

            {/* INDUSTRY RECOGNITION */}
            <RecognitionSection />

            {/* CASE STUDIES */}
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

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <ScrollReveal>
                        <Card className="p-8 h-full">
                            <span className="badge badge-gold mb-4">Healthcare • Claims Automation</span>
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Fortune 100 Insurer Saves $8M Annually
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-2xl font-serif text-[var(--color-gold)]">95%</div>
                                    <div className="text-xs text-[var(--color-muted)]">Automation Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-serif text-[var(--color-success)]">$8M</div>
                                    <div className="text-xs text-[var(--color-muted)]">Annual Savings</div>
                                </div>
                            </div>
                            <Link to="/case-studies" className="text-[var(--color-gold)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Read Case Study <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="p-8 h-full">
                            <span className="badge mb-4">Financial Services • Document Intelligence</span>
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Global Bank Cuts Compliance Review by 92%
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-2xl font-serif text-[var(--color-aurora-teal)]">99.7%</div>
                                    <div className="text-xs text-[var(--color-muted)]">Accuracy</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-serif text-[var(--color-success)]">$5.2M</div>
                                    <div className="text-xs text-[var(--color-muted)]">Cost Reduction</div>
                                </div>
                            </div>
                            <Link to="/case-studies" className="text-[var(--color-aurora-teal)] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Read Case Study <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* EXECUTIVE CTA */}
            <ExecutiveCTA
                title="Ready to Transform from Core to Customer?"
                subtitle="Schedule a complimentary executive briefing. We'll quantify your AI transformation opportunity across mainframe modernization and customer experience."
                buttonText="Request a Demo"
                buttonLink="/platform-demo"
            />
        </>
    )
}
