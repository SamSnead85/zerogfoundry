import { useState } from 'react'
import { ArrowRight, Download, Building2, Heart, DollarSign, Clock, Users, TrendingUp, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

interface BenchmarkData {
    industry: string
    avgCostReduction: number
    avgTimeToValue: number
    avgAccuracy: number
}

const industryBenchmarks: BenchmarkData[] = [
    { industry: 'Healthcare Payers', avgCostReduction: 35, avgTimeToValue: 6, avgAccuracy: 94 },
    { industry: 'Healthcare Providers', avgCostReduction: 28, avgTimeToValue: 8, avgAccuracy: 92 },
    { industry: 'Financial Services', avgCostReduction: 42, avgTimeToValue: 5, avgAccuracy: 96 },
    { industry: 'Insurance', avgCostReduction: 38, avgTimeToValue: 7, avgAccuracy: 95 },
]

const presets = [
    {
        name: 'Claims Processing',
        icon: Heart,
        description: 'Automate claims adjudication',
        defaults: { processingTime: 5, volume: 50000, errorRate: 8, laborCost: 45 },
    },
    {
        name: 'Document Intelligence',
        icon: Building2,
        description: 'Extract data from documents',
        defaults: { processingTime: 10, volume: 25000, errorRate: 12, laborCost: 55 },
    },
    {
        name: 'Prior Authorization',
        icon: Clock,
        description: 'Streamline prior auth workflows',
        defaults: { processingTime: 8, volume: 30000, errorRate: 6, laborCost: 50 },
    },
    {
        name: 'Compliance Review',
        icon: DollarSign,
        description: 'Automate regulatory review',
        defaults: { processingTime: 15, volume: 10000, errorRate: 4, laborCost: 75 },
    },
]

export default function ROICalculatorV2() {
    const [selectedIndustry, setSelectedIndustry] = useState('Healthcare Payers')
    const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
    const [inputs, setInputs] = useState({
        processingTime: 5,      // minutes per item
        volume: 50000,          // items per year
        errorRate: 8,           // percent
        laborCost: 45,          // dollars per hour
        targetAutomation: 85,   // percent
        targetAccuracy: 95,     // percent
    })

    const handlePresetSelect = (preset: typeof presets[0]) => {
        setSelectedPreset(preset.name)
        setInputs({ ...inputs, ...preset.defaults })
    }

    const handleInputChange = (key: keyof typeof inputs, value: number) => {
        setInputs({ ...inputs, [key]: value })
    }

    // Calculations
    const currentAnnualHours = (inputs.processingTime * inputs.volume) / 60
    const currentAnnualCost = currentAnnualHours * inputs.laborCost
    const currentErrorCost = (inputs.errorRate / 100) * inputs.volume * 150 // $150 per error

    const automatedHours = currentAnnualHours * (1 - inputs.targetAutomation / 100)
    const newAnnualCost = automatedHours * inputs.laborCost
    const newErrorCost = ((100 - inputs.targetAccuracy) / 100) * inputs.volume * 150

    const laborSavings = currentAnnualCost - newAnnualCost
    const errorSavings = currentErrorCost - newErrorCost
    const totalSavings = laborSavings + errorSavings

    const implementationCost = 500000 // Placeholder
    const roi = ((totalSavings - implementationCost) / implementationCost) * 100
    const paybackMonths = (implementationCost / (totalSavings / 12))

    const benchmark = industryBenchmarks.find(b => b.industry === selectedIndustry) || industryBenchmarks[0]

    const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

    const handleExportPDF = () => {
        // In a real implementation, this would generate a PDF
        alert('PDF export would be generated with your ROI analysis. Contact us for a detailed assessment.')
    }

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
                        <p className="text-eyebrow mb-6">ROI Calculator</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Calculate Your AI ROI
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Estimate the potential return on investment for AI automation in your organization.
                            Includes industry benchmarks and exportable reports.
                        </p>
                    </motion.div>
                </div>
            </Section>

            <Section background="alt">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Industry & Presets */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Industry & Use Case</h3>
                            <div className="mb-6">
                                <label className="block text-sm text-[var(--color-muted)] mb-2">Select Industry</label>
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                >
                                    {industryBenchmarks.map((b) => (
                                        <option key={b.industry} value={b.industry}>{b.industry}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-[var(--color-muted)] mb-2">Quick Presets</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {presets.map((preset) => (
                                        <button
                                            key={preset.name}
                                            onClick={() => handlePresetSelect(preset)}
                                            className={`p-4 rounded-lg border text-left transition-all ${selectedPreset === preset.name
                                                ? 'bg-[var(--color-gold)]/10 border-[var(--color-gold)]'
                                                : 'bg-[var(--color-background)] border-[var(--color-border)] hover:border-[var(--color-gold)]/50'
                                                }`}
                                        >
                                            <preset.icon className={`w-5 h-5 mb-2 ${selectedPreset === preset.name ? 'text-[var(--color-gold)]' : 'text-[var(--color-muted)]'}`} />
                                            <p className="text-white font-medium text-sm">{preset.name}</p>
                                            <p className="text-xs text-[var(--color-muted)]">{preset.description}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Current State */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Current State</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-[var(--color-muted)] mb-2">
                                        Processing Time (min/item)
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.processingTime}
                                        onChange={(e) => handleInputChange('processingTime', Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[var(--color-muted)] mb-2">
                                        Annual Volume
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.volume}
                                        onChange={(e) => handleInputChange('volume', Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[var(--color-muted)] mb-2">
                                        Current Error Rate (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.errorRate}
                                        onChange={(e) => handleInputChange('errorRate', Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[var(--color-muted)] mb-2">
                                        Avg Labor Cost ($/hour)
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.laborCost}
                                        onChange={(e) => handleInputChange('laborCost', Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                </div>
                            </div>
                        </Card>

                        {/* Target State */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Target State</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-[var(--color-muted)] mb-2">
                                        Target Automation Rate (%)
                                    </label>
                                    <input
                                        type="range"
                                        min="50"
                                        max="99"
                                        value={inputs.targetAutomation}
                                        onChange={(e) => handleInputChange('targetAutomation', Number(e.target.value))}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-muted)]">50%</span>
                                        <span className="text-[var(--color-gold)] font-bold">{inputs.targetAutomation}%</span>
                                        <span className="text-[var(--color-muted)]">99%</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-[var(--color-muted)] mb-2">
                                        Target Accuracy (%)
                                    </label>
                                    <input
                                        type="range"
                                        min="90"
                                        max="99"
                                        value={inputs.targetAccuracy}
                                        onChange={(e) => handleInputChange('targetAccuracy', Number(e.target.value))}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-muted)]">90%</span>
                                        <span className="text-[var(--color-gold)] font-bold">{inputs.targetAccuracy}%</span>
                                        <span className="text-[var(--color-muted)]">99%</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right: Results */}
                    <div className="space-y-6">
                        <Card className="p-6 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent">
                            <h3 className="text-lg font-semibold text-white mb-6">Projected Results</h3>

                            <div className="space-y-6">
                                <div className="text-center p-6 bg-[var(--color-background)]/50 rounded-xl">
                                    <p className="text-sm text-[var(--color-muted)] mb-1">Total Annual Savings</p>
                                    <p className="text-4xl font-serif text-[var(--color-gold)]">{formatCurrency(totalSavings)}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-[var(--color-background)]/50 rounded-xl">
                                        <p className="text-xs text-[var(--color-muted)] mb-1">Labor Savings</p>
                                        <p className="text-xl font-bold text-white">{formatCurrency(laborSavings)}</p>
                                    </div>
                                    <div className="text-center p-4 bg-[var(--color-background)]/50 rounded-xl">
                                        <p className="text-xs text-[var(--color-muted)] mb-1">Error Reduction</p>
                                        <p className="text-xl font-bold text-white">{formatCurrency(errorSavings)}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-[var(--color-background)]/50 rounded-xl">
                                        <p className="text-xs text-[var(--color-muted)] mb-1">First Year ROI</p>
                                        <p className="text-xl font-bold text-[var(--color-success)]">{roi.toFixed(0)}%</p>
                                    </div>
                                    <div className="text-center p-4 bg-[var(--color-background)]/50 rounded-xl">
                                        <p className="text-xs text-[var(--color-muted)] mb-1">Payback Period</p>
                                        <p className="text-xl font-bold text-white">{paybackMonths.toFixed(0)} mo</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Benchmark Comparison */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Industry Benchmark</h3>
                            <p className="text-sm text-[var(--color-muted)] mb-4">{benchmark.industry}</p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--color-muted)]">Avg Cost Reduction</span>
                                    <span className="text-sm font-bold text-white">{benchmark.avgCostReduction}%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--color-muted)]">Time to Value</span>
                                    <span className="text-sm font-bold text-white">{benchmark.avgTimeToValue} months</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--color-muted)]">Avg Accuracy</span>
                                    <span className="text-sm font-bold text-white">{benchmark.avgAccuracy}%</span>
                                </div>
                            </div>
                        </Card>

                        {/* Actions */}
                        <div className="space-y-3">
                            <Button onClick={handleExportPDF} className="w-full" icon={<Download className="w-4 h-4" />}>
                                Export PDF Report
                            </Button>
                            <Button to="/contact" variant="secondary" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                                Get Detailed Assessment
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Methodology */}
            <Section>
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-serif text-white mb-4">How We Calculate ROI</h3>
                        <p className="text-[var(--color-muted)] mb-8">
                            Our ROI model is based on data from 50+ enterprise AI implementations.
                            It accounts for labor cost reduction, error rate improvement, and implementation costs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Users, title: 'Labor Efficiency', desc: 'Automation rate × current labor hours × hourly cost' },
                                { icon: TrendingUp, title: 'Quality Gains', desc: 'Error reduction × volume × cost per error' },
                                { icon: BarChart3, title: 'Net ROI', desc: '(Savings - Implementation) / Implementation × 100' },
                            ].map((item) => (
                                <Card key={item.title} className="p-6 text-center">
                                    <item.icon className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
                                    <h4 className="text-white font-medium mb-2">{item.title}</h4>
                                    <p className="text-xs text-[var(--color-muted)]">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
