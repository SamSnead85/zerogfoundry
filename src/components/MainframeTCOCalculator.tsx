import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, DollarSign, Server, Users, Clock, TrendingUp, Download, ChevronRight, Building2, CheckCircle } from 'lucide-react'

interface TCOInputs {
    currentMipsCost: number
    mipsConsumption: number
    maintenanceStaff: number
    avgSalary: number
    annualLicensing: number
    projectTimeline: number
}

interface TCOResults {
    yearlyCurrentCost: number
    yearlyFutureCost: number
    annualSavings: number
    fiveYearSavings: number
    roiPercentage: number
    paybackMonths: number
}

const defaultInputs: TCOInputs = {
    currentMipsCost: 1500,
    mipsConsumption: 10000,
    maintenanceStaff: 25,
    avgSalary: 150000,
    annualLicensing: 2500000,
    projectTimeline: 18
}

function calculateTCO(inputs: TCOInputs): TCOResults {
    // Current yearly costs
    const yearlyMipsCost = inputs.currentMipsCost * inputs.mipsConsumption * 12
    const yearlyStaffCost = inputs.maintenanceStaff * inputs.avgSalary
    const yearlyCurrentCost = yearlyMipsCost + yearlyStaffCost + inputs.annualLicensing

    // Future yearly costs (post-modernization)
    const mipsReduction = 0.70 // 70% reduction
    const staffReduction = 0.40 // 40% reduction in legacy staff
    const licensingReduction = 0.85 // 85% reduction in licensing
    const cloudCosts = 2000000 // New cloud infrastructure

    const yearlyFutureMips = yearlyMipsCost * (1 - mipsReduction)
    const yearlyFutureStaff = yearlyStaffCost * (1 - staffReduction)
    const yearlyFutureLicensing = inputs.annualLicensing * (1 - licensingReduction)
    const yearlyFutureCost = yearlyFutureMips + yearlyFutureStaff + yearlyFutureLicensing + cloudCosts

    const annualSavings = yearlyCurrentCost - yearlyFutureCost
    const fiveYearSavings = annualSavings * 5

    // Investment calculation
    const investmentCost = 8000000 + (inputs.projectTimeline * 200000) // Base + timeline factor
    const roiPercentage = ((fiveYearSavings - investmentCost) / investmentCost) * 100
    const paybackMonths = Math.ceil(investmentCost / (annualSavings / 12))

    return {
        yearlyCurrentCost,
        yearlyFutureCost,
        annualSavings,
        fiveYearSavings,
        roiPercentage,
        paybackMonths
    }
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(value)
}

function formatNumber(value: number): string {
    return new Intl.NumberFormat('en-US').format(value)
}

interface InputSliderProps {
    label: string
    value: number
    min: number
    max: number
    step: number
    unit?: string
    prefix?: string
    onChange: (value: number) => void
    icon: React.ReactNode
}

function InputSlider({ label, value, min, max, step, unit = '', prefix = '', onChange, icon }: InputSliderProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-white/50">{icon}</span>
                    <span className="text-sm text-white/70">{label}</span>
                </div>
                <span className="text-sm font-medium text-white">
                    {prefix}{formatNumber(value)}{unit}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-4 
                    [&::-webkit-slider-thumb]:h-4 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-[var(--color-gold)]
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-white/30">
                <span>{prefix}{formatNumber(min)}{unit}</span>
                <span>{prefix}{formatNumber(max)}{unit}</span>
            </div>
        </div>
    )
}

interface MainframeTCOCalculatorProps {
    className?: string
    variant?: 'full' | 'compact'
}

export default function MainframeTCOCalculator({ className = '', variant = 'full' }: MainframeTCOCalculatorProps) {
    const [inputs, setInputs] = useState<TCOInputs>(defaultInputs)
    const [showResults, setShowResults] = useState(false)
    const [savedScenarios, setSavedScenarios] = useState<{ name: string; inputs: TCOInputs }[]>([])

    const results = calculateTCO(inputs)

    const updateInput = useCallback((key: keyof TCOInputs, value: number) => {
        setInputs(prev => ({ ...prev, [key]: value }))
    }, [])

    const saveScenario = () => {
        const name = `Scenario ${savedScenarios.length + 1}`
        setSavedScenarios(prev => [...prev, { name, inputs: { ...inputs } }])
    }

    const loadScenario = (scenario: { name: string; inputs: TCOInputs }) => {
        setInputs(scenario.inputs)
    }

    const exportResults = () => {
        const data = {
            inputs,
            results,
            generatedAt: new Date().toISOString()
        }
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'zero-foundry-tco-analysis.json'
        a.click()
        URL.revokeObjectURL(url)
    }

    if (variant === 'compact') {
        return (
            <div className={`p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 ${className}`}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Quick TCO Calculator</h3>
                        <p className="text-xs text-white/50">Estimate your savings</p>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <InputSlider
                        label="Monthly MIPS Consumption"
                        value={inputs.mipsConsumption}
                        min={1000}
                        max={100000}
                        step={1000}
                        onChange={(v) => updateInput('mipsConsumption', v)}
                        icon={<Server className="w-4 h-4" />}
                    />
                    <InputSlider
                        label="Annual Licensing Cost"
                        value={inputs.annualLicensing}
                        min={500000}
                        max={20000000}
                        step={100000}
                        prefix="$"
                        onChange={(v) => updateInput('annualLicensing', v)}
                        icon={<DollarSign className="w-4 h-4" />}
                    />
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-success)]/10 border border-[var(--color-success)]/20">
                    <p className="text-sm text-white/60 mb-1">Estimated Annual Savings</p>
                    <p className="text-2xl font-semibold text-[var(--color-success)]">
                        {formatCurrency(results.annualSavings)}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className={`grid lg:grid-cols-2 gap-8 ${className}`}>
            {/* Input Panel */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                            <Calculator className="w-5 h-5 text-[var(--color-gold)]" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Mainframe TCO Calculator</h3>
                            <p className="text-xs text-white/50">Enter your current infrastructure details</p>
                        </div>
                    </div>

                    {savedScenarios.length > 0 && (
                        <div className="relative group">
                            <button className="text-xs text-white/50 hover:text-white">
                                Load Scenario
                            </button>
                            <div className="absolute right-0 top-full mt-2 w-40 bg-[#0a0a0a] border border-white/10 rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                {savedScenarios.map((scenario, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => loadScenario(scenario)}
                                        className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 rounded"
                                    >
                                        {scenario.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <InputSlider
                        label="Monthly MIPS Cost"
                        value={inputs.currentMipsCost}
                        min={500}
                        max={5000}
                        step={100}
                        prefix="$"
                        onChange={(v) => updateInput('currentMipsCost', v)}
                        icon={<DollarSign className="w-4 h-4" />}
                    />

                    <InputSlider
                        label="Monthly MIPS Consumption"
                        value={inputs.mipsConsumption}
                        min={1000}
                        max={100000}
                        step={1000}
                        onChange={(v) => updateInput('mipsConsumption', v)}
                        icon={<Server className="w-4 h-4" />}
                    />

                    <InputSlider
                        label="Mainframe Staff"
                        value={inputs.maintenanceStaff}
                        min={5}
                        max={100}
                        step={1}
                        unit=" people"
                        onChange={(v) => updateInput('maintenanceStaff', v)}
                        icon={<Users className="w-4 h-4" />}
                    />

                    <InputSlider
                        label="Average Staff Salary"
                        value={inputs.avgSalary}
                        min={80000}
                        max={250000}
                        step={10000}
                        prefix="$"
                        onChange={(v) => updateInput('avgSalary', v)}
                        icon={<Building2 className="w-4 h-4" />}
                    />

                    <InputSlider
                        label="Annual Licensing Cost"
                        value={inputs.annualLicensing}
                        min={500000}
                        max={20000000}
                        step={100000}
                        prefix="$"
                        onChange={(v) => updateInput('annualLicensing', v)}
                        icon={<DollarSign className="w-4 h-4" />}
                    />

                    <InputSlider
                        label="Project Timeline"
                        value={inputs.projectTimeline}
                        min={12}
                        max={36}
                        step={3}
                        unit=" months"
                        onChange={(v) => updateInput('projectTimeline', v)}
                        icon={<Clock className="w-4 h-4" />}
                    />
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                    <button
                        onClick={saveScenario}
                        className="flex-1 px-4 py-2.5 bg-white/5 text-white/70 rounded-xl hover:bg-white/10 transition-colors text-sm"
                    >
                        Save Scenario
                    </button>
                    <button
                        onClick={() => setShowResults(!showResults)}
                        className="flex-1 px-4 py-2.5 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
                    >
                        {showResults ? 'Hide' : 'Calculate'} Results
                        <ChevronRight className={`w-4 h-4 transition-transform ${showResults ? 'rotate-90' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Results Panel */}
            <AnimatePresence mode="wait">
                {showResults && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-semibold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[var(--color-success)]" />
                                Your TCO Analysis
                            </h3>
                            <button
                                onClick={exportResults}
                                className="flex items-center gap-1 text-sm text-white/50 hover:text-white"
                            >
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <p className="text-xs text-white/40 mb-1">Current Annual Cost</p>
                                <p className="text-xl font-semibold text-white">
                                    {formatCurrency(results.yearlyCurrentCost)}
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <p className="text-xs text-white/40 mb-1">Future Annual Cost</p>
                                <p className="text-xl font-semibold text-[var(--color-aurora-teal)]">
                                    {formatCurrency(results.yearlyFutureCost)}
                                </p>
                            </div>
                        </div>

                        {/* Savings Highlight */}
                        <div className="p-6 rounded-xl bg-gradient-to-r from-[var(--color-success)]/10 to-[var(--color-success)]/5 border border-[var(--color-success)]/20 mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                                <span className="text-sm text-white/60">Annual Savings</span>
                            </div>
                            <p className="text-4xl font-bold text-[var(--color-success)]">
                                {formatCurrency(results.annualSavings)}
                            </p>
                        </div>

                        {/* Additional Metrics */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-3 border-b border-white/5">
                                <span className="text-sm text-white/60">5-Year Total Savings</span>
                                <span className="font-semibold text-white">{formatCurrency(results.fiveYearSavings)}</span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-white/5">
                                <span className="text-sm text-white/60">ROI</span>
                                <span className="font-semibold text-[var(--color-gold)]">{results.roiPercentage.toFixed(0)}%</span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <span className="text-sm text-white/60">Payback Period</span>
                                <span className="font-semibold text-white">{results.paybackMonths} months</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-sm text-white/50 mb-3">
                                Ready to validate these projections with our experts?
                            </p>
                            <a
                                href="/contact"
                                className="block w-full py-3 text-center bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Schedule Free Assessment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
