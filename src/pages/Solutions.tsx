import { ArrowRight, Shield, Clock, DollarSign, FileCheck, Stethoscope, FileSearch, Scale, Building2, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Section,
    Card,
    ScrollReveal,
} from '../components'

const industries = [
    {
        id: 'healthcare',
        name: 'Healthcare',
        icon: Heart,
        description: 'HIPAA-compliant AI solutions for payers, providers, and health systems.',
        useCases: [
            {
                icon: FileCheck,
                title: 'Prior Authorization',
                stat: '85%',
                statLabel: 'Straight-through processing',
                description: 'Automate prior auth decisions with clinical accuracy.',
            },
            {
                icon: Stethoscope,
                title: 'Claims Processing',
                stat: '$12M',
                statLabel: 'Annual savings',
                description: 'Reduce manual review and accelerate adjudication.',
            },
        ],
        trust: ['HIPAA Compliance', 'PHI Protection', 'Clinical RLHF', 'EHR Integration'],
    },
    {
        id: 'financial',
        name: 'Financial Services',
        icon: Building2,
        description: 'SOC 2-compliant AI for insurance, banking, and investment firms.',
        useCases: [
            {
                icon: FileSearch,
                title: 'Document Processing',
                stat: '95%',
                statLabel: 'Automation rate',
                description: 'Extract and classify financial documents instantly.',
            },
            {
                icon: Scale,
                title: 'Regulatory Compliance',
                stat: '70%',
                statLabel: 'Reduction in review time',
                description: 'Automate compliance monitoring and reporting.',
            },
        ],
        trust: ['SOC 2 Type II', 'ISO 27001', 'Explainable AI', 'Real-time Monitoring'],
    },
]

const capabilities = [
    { icon: Shield, label: 'Enterprise Security', description: 'SOC 2, HIPAA, ISO 27001 compliant' },
    { icon: Clock, label: '4-Week Assessment', description: 'Comprehensive AI roadmap delivery' },
    { icon: DollarSign, label: 'Guaranteed ROI', description: 'Performance floors in every contract' },
]

export default function Solutions() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center">
                <div className="container relative z-10 py-24 md:py-32">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-sm tracking-[0.2em] uppercase text-white/60 mb-6 font-medium">
                                Industry Solutions
                            </p>
                            <h1 className="hero-headline mb-6">
                                AI That Works in
                                <br />
                                <span className="hero-headline-accent">Production</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                                Production-grade AI workflows tailored for Healthcare and Financial Services.
                                Guaranteed outcomes with enterprise compliance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <Section>
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {capabilities.map((cap, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="text-center p-8">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center">
                                    <cap.icon className="w-6 h-6 text-white/80" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{cap.label}</h3>
                                <p className="text-white/50 text-sm">{cap.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Industry Sections */}
            {industries.map((industry, idx) => (
                <Section key={industry.id} background={idx % 2 === 0 ? 'default' : 'alt'}>
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                <industry.icon className="w-6 h-6 text-white/80" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif text-white">{industry.name}</h2>
                                <p className="text-white/50">{industry.description}</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Use Cases */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {industry.useCases.map((uc, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Card className="p-8 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <uc.icon className="w-5 h-5 text-white/70" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                                            <p className="text-white/50 text-sm mb-4">{uc.description}</p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-serif text-white">{uc.stat}</span>
                                                <span className="text-xs text-white/40 uppercase tracking-wide">{uc.statLabel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap gap-3">
                        {industry.trust.map((signal) => (
                            <span key={signal} className="px-3 py-1.5 text-xs text-white/60 bg-white/5 rounded-full border border-white/10">
                                {signal}
                            </span>
                        ))}
                    </div>
                </Section>
            ))}

            {/* CTA Section */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
                            Ready to Transform Your Operations?
                        </h2>
                        <p className="text-white/60 mb-8">
                            Schedule a complimentary executive briefing to explore how we can deliver guaranteed AI outcomes for your organization.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-executive">
                                Schedule Assessment
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/case-studies" className="btn-executive-outline">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
