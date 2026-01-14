import { useState } from 'react'
import { Calculator, DollarSign, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const industries = [
    { id: 'healthcare', name: 'Healthcare / Insurance', avgSavings: 3800000, avgTimeline: 18 },
    { id: 'finserv', name: 'Financial Services', avgSavings: 5200000, avgTimeline: 14 },
    { id: 'manufacturing', name: 'Manufacturing', avgSavings: 2900000, avgTimeline: 12 },
    { id: 'retail', name: 'Retail / E-Commerce', avgSavings: 2100000, avgTimeline: 10 },
    { id: 'other', name: 'Other Enterprise', avgSavings: 2500000, avgTimeline: 14 },
]

const useCases = [
    { id: 'document', name: 'Document Processing', multiplier: 1.2 },
    { id: 'claims', name: 'Claims Automation', multiplier: 1.4 },
    { id: 'compliance', name: 'Regulatory Compliance', multiplier: 1.3 },
    { id: 'customerService', name: 'Customer Service AI', multiplier: 1.1 },
    { id: 'fraud', name: 'Fraud Detection', multiplier: 1.25 },
]

export default function ROICalculator() {
    const [industry, setIndustry] = useState('')
    const [useCase, setUseCase] = useState('')
    const [currentCost, setCurrentCost] = useState('')
    const [showResults, setShowResults] = useState(false)

    const selectedIndustry = industries.find(i => i.id === industry)
    const selectedUseCase = useCases.find(u => u.id === useCase)

    const calculateROI = () => {
        if (selectedIndustry && selectedUseCase && currentCost) {
            setShowResults(true)
        }
    }

    const parsedCost = parseFloat(currentCost.replace(/[^0-9.]/g, '')) || 0
    const estimatedSavings = Math.round(parsedCost * 0.65 * (selectedUseCase?.multiplier || 1))
    const implementationCost = Math.round(estimatedSavings * 0.2)
    const firstYearROI = Math.round(((estimatedSavings - implementationCost) / implementationCost) * 100)
    const threeYearSavings = estimatedSavings * 3

    return (
        <>
            {/* Hero */}
            <section className="relative pt-16 pb-12 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Investment Analysis
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                AI Transformation
                                <span className="italic text-[var(--color-champagne)]"> ROI Calculator</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                Estimate the financial impact of production-grade AI for your organization
                                based on industry benchmarks and our implementation experience.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Calculator */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 lg:p-12">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Industry Selection */}
                            <div>
                                <label className="block text-white font-medium mb-3">
                                    Select Your Industry
                                </label>
                                <select
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                                >
                                    <option value="">Choose industry...</option>
                                    {industries.map((ind) => (
                                        <option key={ind.id} value={ind.id}>{ind.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Use Case Selection */}
                            <div>
                                <label className="block text-white font-medium mb-3">
                                    Primary AI Use Case
                                </label>
                                <select
                                    value={useCase}
                                    onChange={(e) => setUseCase(e.target.value)}
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                                >
                                    <option value="">Choose use case...</option>
                                    {useCases.map((uc) => (
                                        <option key={uc.id} value={uc.id}>{uc.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Current Cost Input */}
                        <div className="mb-8">
                            <label className="block text-white font-medium mb-3">
                                Current Annual Cost for This Process
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
                                <input
                                    type="text"
                                    value={currentCost}
                                    onChange={(e) => setCurrentCost(e.target.value)}
                                    placeholder="e.g., 5,000,000"
                                    className="w-full pl-12 pr-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                                />
                            </div>
                            <p className="text-xs text-[var(--color-subtle)] mt-2">
                                Include labor, technology, and overhead costs
                            </p>
                        </div>

                        <Button
                            onClick={calculateROI}
                            className="w-full"
                            icon={<Calculator className="w-4 h-4" />}
                        >
                            Calculate Potential ROI
                        </Button>
                    </Card>

                    {/* Results */}
                    {showResults && parsedCost > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8"
                        >
                            <Card className="p-8 lg:p-12 border-2 border-[var(--color-gold)]/30">
                                <div className="text-center mb-10">
                                    <p className="text-[var(--color-champagne)] text-sm font-medium mb-2 uppercase tracking-wider">
                                        Estimated Results
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                                        Your AI Transformation ROI
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-4 gap-6 mb-10">
                                    <div className="text-center p-6 bg-[var(--color-background)]/50 rounded-xl">
                                        <TrendingUp className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
                                        <p className="text-3xl font-bold text-[var(--color-gold)]">{firstYearROI}%</p>
                                        <p className="text-sm text-[var(--color-muted)]">First Year ROI</p>
                                    </div>
                                    <div className="text-center p-6 bg-[var(--color-background)]/50 rounded-xl">
                                        <DollarSign className="w-8 h-8 text-[var(--color-success)] mx-auto mb-3" />
                                        <p className="text-3xl font-bold text-[var(--color-success)]">${(estimatedSavings / 1000000).toFixed(1)}M</p>
                                        <p className="text-sm text-[var(--color-muted)]">Annual Savings</p>
                                    </div>
                                    <div className="text-center p-6 bg-[var(--color-background)]/50 rounded-xl">
                                        <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                                        <p className="text-3xl font-bold text-[var(--color-accent)]">{selectedIndustry?.avgTimeline || 12}mo</p>
                                        <p className="text-sm text-[var(--color-muted)]">Time to Value</p>
                                    </div>
                                    <div className="text-center p-6 bg-[var(--color-background)]/50 rounded-xl">
                                        <Users className="w-8 h-8 text-[var(--color-champagne)] mx-auto mb-3" />
                                        <p className="text-3xl font-bold text-[var(--color-champagne)]">${(threeYearSavings / 1000000).toFixed(1)}M</p>
                                        <p className="text-sm text-[var(--color-muted)]">3-Year Savings</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-[var(--color-muted)] mb-6">
                                        These estimates are based on our enterprise AI benchmarks and typical implementation outcomes.
                                        Actual results vary based on data quality, organizational readiness, and use case complexity.
                                    </p>
                                    <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                        Discuss Your Specific Opportunity
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                </div>
            </Section>

            {/* Benchmarks */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Industry Benchmarks"
                        title="What Others Have Achieved"
                        subtitle="Based on our implementation experience across industries."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { metric: '65%', label: 'Average Cost Reduction', desc: 'In targeted processes' },
                        { metric: '18mo', label: 'Payback Period', desc: 'Typical time to full ROI' },
                        { metric: '340%', label: 'Three-Year ROI', desc: 'Average return on investment' },
                    ].map((item) => (
                        <Card key={item.label} className="p-6 text-center">
                            <p className="text-4xl font-bold text-[var(--color-gold)] mb-2">{item.metric}</p>
                            <p className="text-white font-medium mb-1">{item.label}</p>
                            <p className="text-sm text-[var(--color-subtle)]">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    )
}
