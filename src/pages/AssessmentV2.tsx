import { useState } from 'react'
import { FileQuestion, ArrowRight, CheckCircle, Clock, BarChart3, Target, Users, Zap, Building2, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const pillars = [
    { id: 'strategy', name: 'AI Strategy', icon: Target, color: 'var(--color-gold)' },
    { id: 'data', name: 'Data Readiness', icon: BarChart3, color: 'var(--color-accent)' },
    { id: 'technology', name: 'Technology Infrastructure', icon: Zap, color: 'var(--color-success)' },
    { id: 'talent', name: 'Talent & Culture', icon: Users, color: 'var(--color-champagne)' },
    { id: 'governance', name: 'AI Governance', icon: Shield, color: 'var(--color-gold)' },
    { id: 'operations', name: 'Operational Readiness', icon: Building2, color: 'var(--color-accent)' },
]

const questions: Record<string, { question: string; options: { label: string; score: number }[] }[]> = {
    strategy: [
        {
            question: 'Does your organization have a documented AI strategy aligned with business objectives?',
            options: [
                { label: 'No AI strategy exists', score: 1 },
                { label: 'Informal discussions only', score: 2 },
                { label: 'Strategy in development', score: 3 },
                { label: 'Documented but not implemented', score: 4 },
                { label: 'Fully documented and actively executed', score: 5 },
            ],
        },
        {
            question: 'How are AI initiatives prioritized in your organization?',
            options: [
                { label: 'Ad-hoc / no process', score: 1 },
                { label: 'Based on individual requests', score: 2 },
                { label: 'Informal prioritization', score: 3 },
                { label: 'Formal process with some criteria', score: 4 },
                { label: 'Rigorous ROI-based prioritization', score: 5 },
            ],
        },
    ],
    data: [
        {
            question: 'How would you describe your organization\'s data quality for AI applications?',
            options: [
                { label: 'Poor - significant quality issues', score: 1 },
                { label: 'Inconsistent across systems', score: 2 },
                { label: 'Adequate for some use cases', score: 3 },
                { label: 'Good with minor gaps', score: 4 },
                { label: 'Excellent - well-governed and clean', score: 5 },
            ],
        },
        {
            question: 'Is your data infrastructure capable of supporting AI/ML workloads?',
            options: [
                { label: 'No - legacy systems only', score: 1 },
                { label: 'Limited cloud/modern infrastructure', score: 2 },
                { label: 'Mixed environment', score: 3 },
                { label: 'Modern infrastructure with some gaps', score: 4 },
                { label: 'Fully cloud-native and ML-ready', score: 5 },
            ],
        },
    ],
    technology: [
        {
            question: 'What is your current AI/ML technology stack maturity?',
            options: [
                { label: 'No AI/ML tools in place', score: 1 },
                { label: 'Basic tools (spreadsheets, BI)', score: 2 },
                { label: 'Some ML platforms piloted', score: 3 },
                { label: 'Production ML infrastructure', score: 4 },
                { label: 'Enterprise MLOps platform', score: 5 },
            ],
        },
        {
            question: 'How integrated is AI into your existing technology ecosystem?',
            options: [
                { label: 'Not integrated at all', score: 1 },
                { label: 'Standalone experiments only', score: 2 },
                { label: 'Some integration in progress', score: 3 },
                { label: 'Integrated with key systems', score: 4 },
                { label: 'Seamlessly integrated enterprise-wide', score: 5 },
            ],
        },
    ],
    talent: [
        {
            question: 'Does your organization have dedicated AI/ML talent?',
            options: [
                { label: 'No dedicated AI talent', score: 1 },
                { label: 'Relying on external vendors only', score: 2 },
                { label: 'Small team or individual contributors', score: 3 },
                { label: 'Established data science team', score: 4 },
                { label: 'Full AI Center of Excellence', score: 5 },
            ],
        },
        {
            question: 'How would you rate AI literacy across your organization?',
            options: [
                { label: 'Very low understanding', score: 1 },
                { label: 'Limited to IT only', score: 2 },
                { label: 'Growing awareness', score: 3 },
                { label: 'Good understanding in key areas', score: 4 },
                { label: 'High literacy across organization', score: 5 },
            ],
        },
    ],
    governance: [
        {
            question: 'Does your organization have AI governance policies?',
            options: [
                { label: 'No policies exist', score: 1 },
                { label: 'Informal guidelines only', score: 2 },
                { label: 'Policies in development', score: 3 },
                { label: 'Documented policies', score: 4 },
                { label: 'Comprehensive governance framework', score: 5 },
            ],
        },
        {
            question: 'How do you address AI ethics and bias in your organization?',
            options: [
                { label: 'Not addressed', score: 1 },
                { label: 'Awareness but no action', score: 2 },
                { label: 'Ad-hoc reviews', score: 3 },
                { label: 'Formal review process', score: 4 },
                { label: 'Ethics board and testing protocols', score: 5 },
            ],
        },
    ],
    operations: [
        {
            question: 'Do you have processes for deploying AI models to production?',
            options: [
                { label: 'No deployment capability', score: 1 },
                { label: 'Manual, ad-hoc deployments', score: 2 },
                { label: 'Some automation in place', score: 3 },
                { label: 'Standardized CI/CD for ML', score: 4 },
                { label: 'Full MLOps with monitoring', score: 5 },
            ],
        },
        {
            question: 'How do you measure and monitor AI performance in production?',
            options: [
                { label: 'No monitoring', score: 1 },
                { label: 'Manual periodic reviews', score: 2 },
                { label: 'Basic metrics tracking', score: 3 },
                { label: 'Automated monitoring dashboards', score: 4 },
                { label: 'Full observability with drift detection', score: 5 },
            ],
        },
    ],
}

export default function AssessmentV2() {
    const [currentPillar, setCurrentPillar] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<string, number[]>>({})
    const [showResults, setShowResults] = useState(false)
    const [started, setStarted] = useState(false)

    const pillar = pillars[currentPillar]
    const pillarQuestions = questions[pillar.id]
    const question = pillarQuestions[currentQuestion]
    const totalQuestions = pillars.reduce((acc, p) => acc + questions[p.id].length, 0)
    const answeredCount = Object.values(answers).flat().length

    const handleAnswer = (score: number) => {
        const pillarAnswers = answers[pillar.id] || []
        pillarAnswers[currentQuestion] = score
        setAnswers({ ...answers, [pillar.id]: pillarAnswers })

        if (currentQuestion < pillarQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else if (currentPillar < pillars.length - 1) {
            setCurrentPillar(currentPillar + 1)
            setCurrentQuestion(0)
        } else {
            setShowResults(true)
        }
    }

    const getOverallScore = () => {
        const allScores = Object.values(answers).flat()
        return Math.round((allScores.reduce((a, b) => a + b, 0) / (allScores.length * 5)) * 100)
    }

    const getPillarScore = (pillarId: string) => {
        const scores = answers[pillarId] || []
        if (scores.length === 0) return 0
        return Math.round((scores.reduce((a, b) => a + b, 0) / (scores.length * 5)) * 100)
    }

    const getMaturityLevel = (score: number) => {
        if (score >= 80) return { level: 'Leader', color: 'var(--color-success)' }
        if (score >= 60) return { level: 'Advanced', color: 'var(--color-gold)' }
        if (score >= 40) return { level: 'Developing', color: 'var(--color-accent)' }
        if (score >= 20) return { level: 'Emerging', color: 'var(--color-champagne)' }
        return { level: 'Beginning', color: 'var(--color-muted)' }
    }

    if (!started) {
        return (
            <Section className="pt-32 pb-20">
                <ScrollReveal>
                    <Card className="max-w-3xl mx-auto p-12 text-center">
                        <FileQuestion className="w-16 h-16 text-[var(--color-gold)] mx-auto mb-6" />
                        <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
                            AI Readiness Assessment 2.0
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] mb-8">
                            Evaluate your organization's AI maturity across 6 critical pillars.
                            Get a personalized report with actionable recommendations.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            {[
                                { icon: Clock, label: '8 minutes' },
                                { icon: BarChart3, label: '6 pillars' },
                                { icon: Target, label: '12 questions' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-center gap-2 text-[var(--color-subtle)]">
                                    <item.icon className="w-4 h-4" />
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <Button onClick={() => setStarted(true)} icon={<ArrowRight className="w-4 h-4" />}>
                            Start Assessment
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>
        )
    }

    if (showResults) {
        const overallScore = getOverallScore()
        const maturity = getMaturityLevel(overallScore)

        return (
            <Section className="pt-32 pb-20">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-12 text-center mb-8">
                            <h1 className="text-3xl font-serif text-white mb-2">Your AI Readiness Score</h1>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: 'spring' }}
                                className="my-8"
                            >
                                <div
                                    className="w-32 h-32 rounded-full mx-auto flex items-center justify-center text-4xl font-bold"
                                    style={{ backgroundColor: `${maturity.color}20`, color: maturity.color }}
                                >
                                    {overallScore}%
                                </div>
                            </motion.div>
                            <p className="text-2xl font-semibold mb-2" style={{ color: maturity.color }}>
                                {maturity.level}
                            </p>
                            <p className="text-[var(--color-muted)]">AI Maturity Level</p>
                        </Card>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {pillars.map((p) => {
                                const score = getPillarScore(p.id)
                                const level = getMaturityLevel(score)
                                return (
                                    <Card key={p.id} className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <p.icon className="w-5 h-5" style={{ color: p.color }} />
                                            <span className="text-white font-medium">{p.name}</span>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <span className="text-2xl font-bold" style={{ color: level.color }}>{score}%</span>
                                            <span className="text-xs text-[var(--color-subtle)]">{level.level}</span>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>

                        <Card className="p-8 text-center">
                            <h2 className="text-xl font-semibold text-white mb-4">Get Your Full Report</h2>
                            <p className="text-[var(--color-muted)] mb-6">
                                Schedule a consultation to receive a detailed analysis with personalized recommendations.
                            </p>
                            <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                Schedule Consultation
                            </Button>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>
        )
    }

    return (
        <Section className="pt-32 pb-20">
            <div className="max-w-3xl mx-auto">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-[var(--color-muted)] mb-2">
                        <span>{pillar.name}</span>
                        <span>{answeredCount}/{totalQuestions}</span>
                    </div>
                    <div className="h-2 bg-[var(--color-card)] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-accent)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Pillar Indicators */}
                <div className="flex justify-center gap-2 mb-8">
                    {pillars.map((p, i) => (
                        <div
                            key={p.id}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${i === currentPillar ? 'bg-[var(--color-gold)]' :
                                    i < currentPillar ? 'bg-[var(--color-success)]' : 'bg-[var(--color-card)]'
                                }`}
                        >
                            {i < currentPillar ? (
                                <CheckCircle className="w-4 h-4 text-white" />
                            ) : (
                                <p.icon className={`w-4 h-4 ${i === currentPillar ? 'text-[#050505]' : 'text-[var(--color-muted)]'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${pillar.id}-${currentQuestion}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Card className="p-8">
                            <h2 className="text-xl font-semibold text-white mb-6">
                                {question.question}
                            </h2>
                            <div className="space-y-3">
                                {question.options.map((option) => (
                                    <button
                                        key={option.label}
                                        onClick={() => handleAnswer(option.score)}
                                        className="w-full p-4 text-left bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-gold)]/50 transition-colors"
                                    >
                                        <span className="text-white">{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    )
}
