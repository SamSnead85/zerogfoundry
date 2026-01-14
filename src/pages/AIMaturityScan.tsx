import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Target, Zap, Brain, Clock, Users, Shield, TrendingUp, BarChart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

interface Question {
    id: number
    category: string
    question: string
    options: { label: string; value: number; description: string }[]
}

const questions: Question[] = [
    {
        id: 1,
        category: 'Strategy',
        question: 'Does your organization have a documented AI strategy aligned with business objectives?',
        options: [
            { label: 'No formal strategy', value: 1, description: 'AI initiatives are ad-hoc' },
            { label: 'Initial planning', value: 2, description: 'Strategy is being developed' },
            { label: 'Documented strategy', value: 3, description: 'Clear strategy exists' },
            { label: 'Mature & evolving', value: 4, description: 'Strategy is regularly updated' },
        ],
    },
    {
        id: 2,
        category: 'Data',
        question: 'How would you rate your organization\'s data quality and accessibility?',
        options: [
            { label: 'Siloed & inconsistent', value: 1, description: 'Data is fragmented across systems' },
            { label: 'Partially integrated', value: 2, description: 'Some data consolidation efforts' },
            { label: 'Well-organized', value: 3, description: 'Central data platform exists' },
            { label: 'Enterprise-grade', value: 4, description: 'Real-time, high-quality data infrastructure' },
        ],
    },
    {
        id: 3,
        category: 'Talent',
        question: 'What is the current state of AI/ML talent in your organization?',
        options: [
            { label: 'No dedicated talent', value: 1, description: 'Relying on external vendors' },
            { label: 'Small team forming', value: 2, description: 'Hiring data scientists' },
            { label: 'Established team', value: 3, description: 'Cross-functional AI team' },
            { label: 'Center of Excellence', value: 4, description: 'AI CoE with embedded specialists' },
        ],
    },
    {
        id: 4,
        category: 'Technology',
        question: 'What is your current AI/ML infrastructure maturity?',
        options: [
            { label: 'Experimentation only', value: 1, description: 'Local notebooks and scripts' },
            { label: 'Development platform', value: 2, description: 'Cloud ML services in use' },
            { label: 'Production pipeline', value: 3, description: 'MLOps practices established' },
            { label: 'Enterprise scale', value: 4, description: 'Full ML lifecycle automation' },
        ],
    },
    {
        id: 5,
        category: 'Governance',
        question: 'How mature is your AI governance and ethics framework?',
        options: [
            { label: 'Not addressed', value: 1, description: 'No formal governance' },
            { label: 'Awareness stage', value: 2, description: 'Discussing AI ethics' },
            { label: 'Framework in place', value: 3, description: 'Policies documented' },
            { label: 'Operationalized', value: 4, description: 'Active governance board' },
        ],
    },
    {
        id: 6,
        category: 'Deployment',
        question: 'How many AI models are currently in production?',
        options: [
            { label: 'None', value: 1, description: 'Still in pilot/POC phase' },
            { label: '1-5 models', value: 2, description: 'Initial production deployments' },
            { label: '6-20 models', value: 3, description: 'Multiple production use cases' },
            { label: '20+ models', value: 4, description: 'Scaled AI deployment' },
        ],
    },
    {
        id: 7,
        category: 'Culture',
        question: 'How would you describe AI adoption across your organization?',
        options: [
            { label: 'Skepticism', value: 1, description: 'Resistance to AI initiatives' },
            { label: 'Curiosity', value: 2, description: 'Interest but limited action' },
            { label: 'Adoption', value: 3, description: 'Active usage in workflows' },
            { label: 'AI-native', value: 4, description: 'AI embedded in culture' },
        ],
    },
    {
        id: 8,
        category: 'Budget',
        question: 'What is your annual AI investment as a percentage of IT budget?',
        options: [
            { label: 'Less than 5%', value: 1, description: 'Minimal AI investment' },
            { label: '5-15%', value: 2, description: 'Growing investment' },
            { label: '15-25%', value: 3, description: 'Significant commitment' },
            { label: '25%+', value: 4, description: 'Strategic priority' },
        ],
    },
]

const maturityLevels = [
    {
        level: 'Exploring',
        range: [8, 14],
        description: 'Your organization is in the early stages of AI exploration. Focus on building foundational capabilities.',
        recommendations: [
            'Develop AI strategy aligned with business goals',
            'Assess and improve data infrastructure',
            'Identify 2-3 high-impact pilot use cases',
            'Build AI literacy across leadership',
        ],
        color: 'var(--color-muted)',
    },
    {
        level: 'Developing',
        range: [15, 21],
        description: 'You have initial AI capabilities but need to scale and systematize your approach.',
        recommendations: [
            'Establish MLOps practices for production deployments',
            'Create cross-functional AI teams',
            'Implement AI governance framework',
            'Expand successful pilots to production',
        ],
        color: 'var(--color-accent)',
    },
    {
        level: 'Advancing',
        range: [22, 28],
        description: 'Strong AI foundations are in place. Focus on scaling impact and operational excellence.',
        recommendations: [
            'Scale AI across additional business units',
            'Optimize model performance with RLHF',
            'Establish AI Center of Excellence',
            'Measure and communicate AI ROI',
        ],
        color: 'var(--color-gold)',
    },
    {
        level: 'Leading',
        range: [29, 32],
        description: 'You are among the most mature organizations. Focus on innovation and competitive advantage.',
        recommendations: [
            'Explore cutting-edge AI techniques',
            'Consider AI as a product/service',
            'Lead industry AI standards',
            'Continuous optimization and innovation',
        ],
        color: 'var(--color-success)',
    },
]

const categoryIcons: Record<string, typeof Target> = {
    Strategy: Target,
    Data: BarChart,
    Talent: Users,
    Technology: Zap,
    Governance: Shield,
    Deployment: TrendingUp,
    Culture: Brain,
    Budget: Clock,
}

export default function AIMaturityScan() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [showResults, setShowResults] = useState(false)
    const [showLeadCapture, setShowLeadCapture] = useState(false)
    const [_leadCaptured, setLeadCaptured] = useState(false)

    const progress = ((Object.keys(answers).length) / questions.length) * 100

    const handleAnswer = (value: number) => {
        setAnswers({ ...answers, [questions[currentQuestion].id]: value })
        if (currentQuestion < questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
        } else {
            setShowLeadCapture(true)
        }
    }

    const calculateScore = () => {
        return Object.values(answers).reduce((sum, val) => sum + val, 0)
    }

    const getMaturityLevel = () => {
        const score = calculateScore()
        return maturityLevels.find(level => score >= level.range[0] && score <= level.range[1]) || maturityLevels[0]
    }

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLeadCaptured(true)
        setShowLeadCapture(false)
        setShowResults(true)
    }

    const resetAssessment = () => {
        setCurrentQuestion(0)
        setAnswers({})
        setShowResults(false)
        setShowLeadCapture(false)
        setLeadCaptured(false)
    }

    const question = questions[currentQuestion]
    const CategoryIcon = categoryIcons[question?.category] || Target

    return (
        <>
            {/* Hero */}
            <Section className="pt-16 pb-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Self-Assessment</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            AI Maturity Scan
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Evaluate your organization's AI readiness across 8 critical dimensions.
                            Get personalized recommendations in under 5 minutes.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Assessment Area */}
            <Section background="alt">
                <div className="max-w-3xl mx-auto">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-[var(--color-muted)]">
                                Question {Math.min(currentQuestion + 1, questions.length)} of {questions.length}
                            </span>
                            <span className="text-sm text-[var(--color-gold)]">{Math.round(progress)}% complete</span>
                        </div>
                        <div className="h-2 bg-[var(--color-card)] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-accent)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {/* Questions */}
                        {!showResults && !showLeadCapture && (
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="p-8 lg:p-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center">
                                            <CategoryIcon className="w-5 h-5 text-[var(--color-gold)]" />
                                        </div>
                                        <span className="text-sm font-medium text-[var(--color-gold)]">{question.category}</span>
                                    </div>

                                    <h2 className="text-2xl font-serif text-white mb-8">{question.question}</h2>

                                    <div className="space-y-4">
                                        {question.options.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => handleAnswer(option.value)}
                                                className={`w-full p-4 text-left rounded-xl border transition-all ${answers[question.id] === option.value
                                                    ? 'bg-[var(--color-gold)]/10 border-[var(--color-gold)]'
                                                    : 'bg-[var(--color-background)] border-[var(--color-border)] hover:border-[var(--color-gold)]/50'
                                                    }`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${answers[question.id] === option.value
                                                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)]'
                                                        : 'border-[var(--color-muted)]'
                                                        }`}>
                                                        {answers[question.id] === option.value && (
                                                            <CheckCircle className="w-3 h-3 text-[#050505]" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <span className="text-white font-medium">{option.label}</span>
                                                        <p className="text-sm text-[var(--color-muted)] mt-1">{option.description}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Navigation */}
                                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
                                        <button
                                            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                                            disabled={currentQuestion === 0}
                                            className="flex items-center gap-2 text-[var(--color-muted)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Previous
                                        </button>
                                        <div className="flex gap-1">
                                            {questions.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full transition-colors ${i === currentQuestion
                                                        ? 'bg-[var(--color-gold)]'
                                                        : answers[questions[i].id]
                                                            ? 'bg-[var(--color-success)]'
                                                            : 'bg-[var(--color-border)]'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="w-20" />
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* Lead Capture */}
                        {showLeadCapture && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <Card className="p-8 lg:p-10">
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                                            <Brain className="w-8 h-8 text-[var(--color-gold)]" />
                                        </div>
                                        <h2 className="text-2xl font-serif text-white mb-2">Your Assessment is Ready!</h2>
                                        <p className="text-[var(--color-muted)]">
                                            Enter your details to view your personalized AI maturity report.
                                        </p>
                                    </div>
                                    <form onSubmit={handleLeadSubmit} className="space-y-4">
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
                                            required
                                            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                        >
                                            <option value="">Select your role</option>
                                            <option value="c-level">C-Level Executive</option>
                                            <option value="vp">VP / Director</option>
                                            <option value="manager">Manager</option>
                                            <option value="individual">Individual Contributor</option>
                                        </select>
                                        <Button type="submit" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                                            View My Results
                                        </Button>
                                    </form>
                                </Card>
                            </motion.div>
                        )}

                        {/* Results */}
                        {showResults && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {(() => {
                                    const maturity = getMaturityLevel()
                                    const score = calculateScore()
                                    return (
                                        <Card className="p-8 lg:p-10">
                                            <div className="text-center mb-10">
                                                <p className="text-sm text-[var(--color-muted)] mb-2">Your AI Maturity Level</p>
                                                <h2 className="text-4xl font-serif mb-2" style={{ color: maturity.color }}>
                                                    {maturity.level}
                                                </h2>
                                                <p className="text-5xl font-bold text-white mb-4">{score}/32</p>
                                                <p className="text-[var(--color-muted)] max-w-lg mx-auto">
                                                    {maturity.description}
                                                </p>
                                            </div>

                                            {/* Score Breakdown */}
                                            <div className="grid grid-cols-4 gap-4 mb-10">
                                                {maturityLevels.map((level) => (
                                                    <div
                                                        key={level.level}
                                                        className={`p-3 rounded-lg text-center ${level.level === maturity.level
                                                            ? 'bg-[var(--color-gold)]/10 border border-[var(--color-gold)]'
                                                            : 'bg-[var(--color-background)]'
                                                            }`}
                                                    >
                                                        <p className="text-xs text-[var(--color-muted)]">{level.range[0]}-{level.range[1]}</p>
                                                        <p className="text-sm font-medium" style={{ color: level.color }}>{level.level}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Recommendations */}
                                            <div className="mb-10">
                                                <h3 className="text-lg font-semibold text-white mb-4">Recommended Next Steps</h3>
                                                <div className="space-y-3">
                                                    {maturity.recommendations.map((rec, i) => (
                                                        <div key={i} className="flex items-start gap-3 p-4 bg-[var(--color-background)] rounded-lg">
                                                            <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                                                            <span className="text-[var(--color-muted)]">{rec}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTAs */}
                                            <div className="flex flex-wrap gap-4 justify-center">
                                                <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                                    Schedule Expert Consultation
                                                </Button>
                                                <Button variant="secondary" onClick={resetAssessment}>
                                                    Retake Assessment
                                                </Button>
                                            </div>
                                        </Card>
                                    )
                                })()}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Trust Section */}
            {!showResults && (
                <Section>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h3 className="text-xl font-serif text-white mb-6">Trusted by Enterprise Leaders</h3>
                            <div className="flex flex-wrap justify-center gap-8 text-[var(--color-muted)]">
                                {['Fortune 500 Healthcare', 'Top-20 Banks', 'Leading Insurers'].map((item) => (
                                    <span key={item} className="text-sm">{item}</span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </Section>
            )}
        </>
    )
}
