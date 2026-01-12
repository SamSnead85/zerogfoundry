import { useState } from 'react'
import { Play, ArrowRight, Monitor, Zap, Shield, BarChart3, Users, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Card,
    Button,
    ScrollReveal,
} from '../components'

const demoSteps = [
    {
        id: 'assessment',
        title: 'AI Readiness Assessment',
        description: 'See how we evaluate your organization\'s AI maturity across 8 dimensions.',
        icon: BarChart3,
        duration: '2 min',
    },
    {
        id: 'data-ingestion',
        title: 'Data Ingestion Pipeline',
        description: 'Watch how we connect to your data sources and prepare training datasets.',
        icon: Zap,
        duration: '3 min',
    },
    {
        id: 'model-training',
        title: 'RLHF Training Process',
        description: 'Experience our human-in-the-loop reinforcement learning workflow.',
        icon: Users,
        duration: '4 min',
    },
    {
        id: 'deployment',
        title: 'Production Deployment',
        description: 'See how models move from training to production with full monitoring.',
        icon: Monitor,
        duration: '3 min',
    },
    {
        id: 'governance',
        title: 'AI Governance Dashboard',
        description: 'Explore our real-time governance and compliance monitoring tools.',
        icon: Shield,
        duration: '2 min',
    },
]

const useCases = [
    {
        id: 'claims',
        title: 'Claims Processing',
        industry: 'Healthcare',
        description: 'Automate claims adjudication with 95%+ accuracy',
        features: ['Document Classification', 'Auto-Adjudication', 'Exception Handling'],
    },
    {
        id: 'prior-auth',
        title: 'Prior Authorization',
        industry: 'Healthcare',
        description: 'Reduce prior auth turnaround from days to hours',
        features: ['Clinical Criteria Matching', 'Auto-Approval Routing', 'P2P Scheduling'],
    },
    {
        id: 'compliance',
        title: 'Regulatory Compliance',
        industry: 'Financial Services',
        description: 'Automate regulatory document processing',
        features: ['Document Intelligence', 'Compliance Validation', 'Audit Trail'],
    },
    {
        id: 'kyc',
        title: 'KYC/AML Review',
        industry: 'Financial Services',
        description: 'Streamline customer due diligence workflows',
        features: ['Identity Verification', 'Risk Scoring', 'Case Management'],
    },
]

export default function PlatformDemo() {
    const [activeStep, setActiveStep] = useState<string | null>(null)
    const [selectedUseCase, setSelectedUseCase] = useState('claims')
    const [showRequestForm, setShowRequestForm] = useState(false)

    return (
        <>
            {/* Hero */}
            <Section className="pt-32 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Platform Tour</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            See It In Action
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                            Explore our enterprise AI platform through guided demos and interactive
                            walkthroughs. See how we deliver 95%+ production accuracy.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button onClick={() => setActiveStep('assessment')} icon={<Play className="w-4 h-4" />}>
                                Start Self-Guided Tour
                            </Button>
                            <Button variant="secondary" onClick={() => setShowRequestForm(true)}>
                                Request Live Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Demo Steps */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Platform Tour"
                        title="Guided Walkthrough"
                        subtitle="Explore key capabilities of our enterprise AI platform."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-5 gap-4">
                    {demoSteps.map((step, index) => (
                        <ScrollReveal key={step.id} delay={index * 0.1}>
                            <div
                                className={`p-6 text-center cursor-pointer transition-all h-full rounded-2xl border ${activeStep === step.id
                                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5'
                                        : 'border-[var(--color-border)] hover:border-[var(--color-gold)]/50 bg-[var(--color-card)]'
                                    }`}
                                onClick={() => setActiveStep(step.id)}
                            >
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <span className="w-6 h-6 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)] text-xs font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    {index < demoSteps.length - 1 && (
                                        <ChevronRight className="w-4 h-4 text-[var(--color-border)] hidden lg:block" />
                                    )}
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-card-elevated)] flex items-center justify-center mx-auto mb-4">
                                    <step.icon className={`w-6 h-6 ${activeStep === step.id ? 'text-[var(--color-gold)]' : 'text-[var(--color-muted)]'}`} />
                                </div>
                                <h4 className="text-white font-medium text-sm mb-2">{step.title}</h4>
                                <p className="text-xs text-[var(--color-muted)] mb-3">{step.description}</p>
                                <span className="text-xs text-[var(--color-accent)]">{step.duration}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Demo Player Placeholder */}
                <AnimatePresence>
                    {activeStep && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-8"
                        >
                            <Card className="p-0 overflow-hidden">
                                <div className="aspect-video bg-[var(--color-background)] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center mx-auto mb-4">
                                            <Play className="w-8 h-8 text-[var(--color-gold)]" />
                                        </div>
                                        <p className="text-white font-medium mb-2">
                                            {demoSteps.find(s => s.id === activeStep)?.title}
                                        </p>
                                        <p className="text-sm text-[var(--color-muted)]">
                                            Interactive demo player - Coming soon
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Section>

            {/* Use Case Demos */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Use Cases"
                        title="Industry-Specific Demos"
                        subtitle="See how our platform solves real enterprise challenges."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.id}
                                className={`p-4 cursor-pointer transition-all rounded-2xl border bg-[var(--color-card)] ${selectedUseCase === useCase.id
                                        ? 'border-[var(--color-gold)]'
                                        : 'border-[var(--color-border)] hover:border-[var(--color-gold)]/50'
                                    }`}
                                onClick={() => setSelectedUseCase(useCase.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium">{useCase.title}</p>
                                        <p className="text-xs text-[var(--color-accent)]">{useCase.industry}</p>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-colors ${selectedUseCase === useCase.id ? 'text-[var(--color-gold)]' : 'text-[var(--color-muted)]'
                                        }`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {useCases.filter(u => u.id === selectedUseCase).map((useCase) => (
                                <motion.div
                                    key={useCase.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <Card className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="badge badge-gold">{useCase.industry}</span>
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4">{useCase.title}</h3>
                                        <p className="text-[var(--color-muted)] mb-6">{useCase.description}</p>

                                        <h4 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
                                            Key Features
                                        </h4>
                                        <div className="space-y-3 mb-8">
                                            {useCase.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3 p-3 bg-[var(--color-background)] rounded-lg">
                                                    <Zap className="w-4 h-4 text-[var(--color-success)]" />
                                                    <span className="text-sm text-[var(--color-muted)]">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="aspect-video bg-[var(--color-background)] rounded-xl flex items-center justify-center mb-6">
                                            <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center cursor-pointer hover:bg-[var(--color-gold)]/30 transition-colors">
                                                <Play className="w-6 h-6 text-[var(--color-gold)]" />
                                            </div>
                                        </div>

                                        <Button className="w-full" onClick={() => setShowRequestForm(true)} icon={<ArrowRight className="w-4 h-4" />}>
                                            Request Custom Demo
                                        </Button>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </Section>

            {/* Request Demo Modal */}
            <AnimatePresence>
                {showRequestForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowRequestForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="w-full max-w-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card className="p-8">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                                        <Monitor className="w-8 h-8 text-[var(--color-gold)]" />
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-2">Request Live Demo</h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        Schedule a personalized demo with our solutions team.
                                    </p>
                                </div>
                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowRequestForm(false); }}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            required
                                            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            required
                                            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Work email"
                                        required
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company"
                                        required
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                    <select
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                    >
                                        <option value="">Use case of interest</option>
                                        <option value="claims">Claims Processing</option>
                                        <option value="prior-auth">Prior Authorization</option>
                                        <option value="compliance">Regulatory Compliance</option>
                                        <option value="kyc">KYC/AML</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <Button type="submit" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                                        Request Demo
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
