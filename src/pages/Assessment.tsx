import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Clock, FileText, CheckCircle, Target, Users, Database, Cpu, Shield, TrendingUp, BarChart3 } from 'lucide-react'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
} from '../components'

// Define the 6 AI Transformation Pillars
const pillars = [
    { id: 'data', name: 'Data Readiness', icon: Database, color: 'var(--color-accent)' },
    { id: 'infrastructure', name: 'AI Infrastructure', icon: Cpu, color: 'var(--color-success)' },
    { id: 'talent', name: 'Talent & Skills', icon: Users, color: 'var(--color-warning)' },
    { id: 'governance', name: 'AI Governance', icon: Shield, color: 'var(--color-error)' },
    { id: 'strategy', name: 'Strategic Alignment', icon: Target, color: '#9b87f5' },
    { id: 'culture', name: 'Innovation Culture', icon: TrendingUp, color: '#f59e0b' },
]

const questions = [
    // Data Readiness (Q1-Q2)
    {
        id: 1,
        pillar: 'data',
        question: 'How would you describe the quality and accessibility of your operational data?',
        options: [
            { text: 'Data is fragmented across systems with inconsistent quality', score: 1 },
            { text: 'Data exists but requires significant cleaning and integration', score: 2 },
            { text: 'Data is centralized with documented quality standards', score: 3 },
            { text: 'Data is optimized, accessible via APIs, and continuously monitored', score: 4 },
        ],
    },
    {
        id: 2,
        pillar: 'data',
        question: 'Do you have labeled datasets suitable for training AI models in your key workflows?',
        options: [
            { text: 'No labeled data exists', score: 1 },
            { text: 'Some labeled data exists but coverage is limited', score: 2 },
            { text: 'Labeled datasets exist for most key workflows', score: 3 },
            { text: 'Comprehensive labeled data with ongoing annotation processes', score: 4 },
        ],
    },
    // AI Infrastructure (Q3-Q4)
    {
        id: 3,
        pillar: 'infrastructure',
        question: 'What AI/ML infrastructure does your organization currently have in place?',
        options: [
            { text: 'No dedicated AI infrastructure', score: 1 },
            { text: 'Basic cloud compute with manual deployments', score: 2 },
            { text: 'MLOps platform with automated training pipelines', score: 3 },
            { text: 'Enterprise AI platform with GPU clusters and production monitoring', score: 4 },
        ],
    },
    {
        id: 4,
        pillar: 'infrastructure',
        question: 'How do you currently deploy and monitor AI models in production?',
        options: [
            { text: 'We have not deployed any AI models to production', score: 1 },
            { text: 'Manual deployment with limited monitoring', score: 2 },
            { text: 'Automated CI/CD with basic performance tracking', score: 3 },
            { text: 'Full MLOps with drift detection, A/B testing, and automated retraining', score: 4 },
        ],
    },
    // Talent & Skills (Q5-Q6)
    {
        id: 5,
        pillar: 'talent',
        question: 'What AI/ML expertise exists within your organization?',
        options: [
            { text: 'No dedicated AI/ML talent', score: 1 },
            { text: 'A few data scientists exploring opportunities', score: 2 },
            { text: 'Established AI team with production experience', score: 3 },
            { text: 'Center of Excellence with deep domain + AI expertise', score: 4 },
        ],
    },
    {
        id: 6,
        pillar: 'talent',
        question: 'How AI-literate are your business stakeholders and operational teams?',
        options: [
            { text: 'Limited understanding of AI capabilities', score: 1 },
            { text: 'Basic awareness but unclear on practical applications', score: 2 },
            { text: 'Good understanding with ability to identify use cases', score: 3 },
            { text: 'High literacy with active participation in AI initiatives', score: 4 },
        ],
    },
    // AI Governance (Q7-Q8)
    {
        id: 7,
        pillar: 'governance',
        question: 'What AI governance policies and frameworks do you have in place?',
        options: [
            { text: 'No formal AI governance', score: 1 },
            { text: 'Ad-hoc policies created per project', score: 2 },
            { text: 'Documented governance framework with review processes', score: 3 },
            { text: 'Comprehensive governance with ethics board and continuous auditing', score: 4 },
        ],
    },
    {
        id: 8,
        pillar: 'governance',
        question: 'How do you ensure compliance (HIPAA, SOC 2, etc.) in your AI systems?',
        options: [
            { text: 'Compliance is not formally addressed for AI', score: 1 },
            { text: 'Basic compliance awareness but no formal processes', score: 2 },
            { text: 'Compliance integrated into AI development lifecycle', score: 3 },
            { text: 'Automated compliance monitoring with audit trails for all AI decisions', score: 4 },
        ],
    },
    // Strategic Alignment (Q9-Q10)
    {
        id: 9,
        pillar: 'strategy',
        question: 'How aligned is AI investment with your core business strategy?',
        options: [
            { text: 'AI is explored opportunistically without strategic alignment', score: 1 },
            { text: 'Some AI initiatives tied to business goals', score: 2 },
            { text: 'AI roadmap aligned with strategic priorities', score: 3 },
            { text: 'AI is central to competitive strategy with executive sponsorship', score: 4 },
        ],
    },
    {
        id: 10,
        pillar: 'strategy',
        question: 'How do you measure ROI from AI investments?',
        options: [
            { text: 'We do not currently measure AI ROI', score: 1 },
            { text: 'Anecdotal success stories but no formal measurement', score: 2 },
            { text: 'KPIs defined per project with periodic reviews', score: 3 },
            { text: 'Comprehensive value framework with continuous tracking', score: 4 },
        ],
    },
    // Innovation Culture (Q11-Q12)
    {
        id: 11,
        pillar: 'culture',
        question: 'How does your organization approach AI experimentation?',
        options: [
            { text: 'Risk-averse with minimal experimentation', score: 1 },
            { text: 'Some pilots but slow to move to production', score: 2 },
            { text: 'Structured innovation process with defined success criteria', score: 3 },
            { text: 'Culture of rapid experimentation with fast fail/scale decisions', score: 4 },
        ],
    },
    {
        id: 12,
        pillar: 'culture',
        question: 'How receptive are your operational teams to AI-driven workflow changes?',
        options: [
            { text: 'Significant resistance to AI adoption', score: 1 },
            { text: 'Cautious acceptance with concerns about job impact', score: 2 },
            { text: 'Generally positive with some change management needed', score: 3 },
            { text: 'Enthusiastic adoption with teams actively requesting AI tools', score: 4 },
        ],
    },
]

type Answers = Record<number, number>

function getMaturityLevel(score: number): { level: string; description: string; color: string } {
    if (score <= 1.5) return { level: 'Nascent', description: 'Early exploration stage', color: 'var(--color-error)' }
    if (score <= 2.5) return { level: 'Developing', description: 'Building foundations', color: 'var(--color-warning)' }
    if (score <= 3.5) return { level: 'Advancing', description: 'Strong capabilities emerging', color: 'var(--color-accent)' }
    return { level: 'Leading', description: 'Industry-leading maturity', color: 'var(--color-success)' }
}

function getPillarScore(pillarId: string, answers: Answers): number {
    const pillarQuestions = questions.filter(q => q.pillar === pillarId)
    const scores = pillarQuestions.map(q => answers[q.id] || 0).filter(s => s > 0)
    if (scores.length === 0) return 0
    return scores.reduce((a, b) => a + b, 0) / scores.length
}

function getOverallScore(answers: Answers): number {
    const allScores = Object.values(answers).filter(s => s > 0)
    if (allScores.length === 0) return 0
    return allScores.reduce((a, b) => a + b, 0) / allScores.length
}

function getRecommendations(pillarId: string, score: number): string[] {
    const recommendations: Record<string, Record<string, string[]>> = {
        data: {
            low: [
                'Conduct a data audit to map existing data sources and quality issues',
                'Establish data governance standards and ownership',
                'Begin building labeled datasets for top priority use cases',
            ],
            medium: [
                'Implement data quality monitoring and automated validation',
                'Create unified data platform with API access',
                'Scale labeling operations with expert annotation programs',
            ],
            high: [
                'Explore synthetic data generation for edge cases',
                'Implement real-time data pipelines for model training',
                'Optimize data infrastructure for continuous learning',
            ],
        },
        infrastructure: {
            low: [
                'Evaluate cloud AI platforms (AWS SageMaker, Azure ML, GCP Vertex)',
                'Start with managed services to reduce infrastructure complexity',
                'Define deployment standards for future AI workloads',
            ],
            medium: [
                'Implement MLOps practices for reproducible training',
                'Add model monitoring and performance tracking',
                'Consider GPU infrastructure for faster iteration',
            ],
            high: [
                'Optimize for high-throughput production inference',
                'Implement advanced deployment patterns (A/B, shadow, canary)',
                'Explore dedicated AI infrastructure (DGX, TPU clusters)',
            ],
        },
        talent: {
            low: [
                'Partner with AI consultancy for initial capability building',
                'Upskill existing data teams on ML fundamentals',
                'Hire 2-3 senior ML engineers to seed internal capability',
            ],
            medium: [
                'Establish AI Center of Excellence with clear mandate',
                'Create AI literacy program for business stakeholders',
                'Build specialized teams per domain (healthcare, finserv)',
            ],
            high: [
                'Develop advanced specializations (RLHF, production ML)',
                'Create thought leadership and external brand presence',
                'Build partnerships with research institutions',
            ],
        },
        governance: {
            low: [
                'Establish basic AI ethics guidelines and review processes',
                'Document compliance requirements for AI in your industry',
                'Create AI risk assessment framework',
            ],
            medium: [
                'Implement model cards and documentation standards',
                'Build audit trails for AI decision-making',
                'Establish AI ethics committee with diverse perspectives',
            ],
            high: [
                'Implement automated bias detection and fairness monitoring',
                'Create proactive regulatory engagement strategy',
                'Build explainable AI capabilities for high-stakes decisions',
            ],
        },
        strategy: {
            low: [
                'Align AI initiatives with top 3 strategic priorities',
                'Secure executive sponsor for AI transformation program',
                'Define success metrics before launching projects',
            ],
            medium: [
                'Build multi-year AI roadmap with portfolio approach',
                'Create AI investment committee with business representation',
                'Implement stage-gate funding based on value delivery',
            ],
            high: [
                'Position AI as core competitive differentiator',
                'Integrate AI considerations into all strategic planning',
                'Explore AI-native business model opportunities',
            ],
        },
        culture: {
            low: [
                'Address concerns about AI impact on jobs transparently',
                'Start with AI pilots that augment rather than replace workers',
                'Celebrate early wins to build momentum',
            ],
            medium: [
                'Create innovation time/budget for AI experimentation',
                'Build feedback loops with operational users throughout development',
                'Recognize and reward AI adoption champions',
            ],
            high: [
                'Embed AI-first thinking in all process improvement initiatives',
                'Create mechanisms for bottom-up AI innovation',
                'Build external reputation as AI-forward organization',
            ],
        },
    }

    const level = score <= 2 ? 'low' : score <= 3 ? 'medium' : 'high'
    return recommendations[pillarId]?.[level] || []
}

export default function Assessment() {
    const [stage, setStage] = useState<'intro' | 'questions' | 'results'>('intro')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Answers>({})
    const [isTransitioning, setIsTransitioning] = useState(false)

    const handleStart = () => {
        setStage('questions')
        setCurrentQuestion(0)
        setAnswers({})
    }

    const handleAnswer = (score: number) => {
        const newAnswers = { ...answers, [questions[currentQuestion].id]: score }
        setAnswers(newAnswers)

        if (currentQuestion < questions.length - 1) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentQuestion(prev => prev + 1)
                setIsTransitioning(false)
            }, 300)
        } else {
            setStage('results')
        }
    }

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1)
        } else {
            setStage('intro')
        }
    }

    const overallScore = getOverallScore(answers)
    const maturity = getMaturityLevel(overallScore)
    const progress = ((currentQuestion + 1) / questions.length) * 100

    // Intro Stage
    if (stage === 'intro') {
        return (
            <>
                <Section className="pt-32 pb-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="text-eyebrow mb-6">Self-Assessment</p>
                                <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                    Where Does Your Organization Fall on the
                                    <span className="italic text-[var(--color-champagne)]"> AI Readiness Index?</span>
                                </h1>
                                <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
                                    Research shows only <strong className="text-white">1 in 10 organizations</strong> have reached production-grade AI maturity across six critical areas: data readiness, infrastructure, talent, governance, strategy, and culture.
                                </p>
                                <p className="text-[var(--color-muted)] mb-8">
                                    Take the 8-minute assessment to see where your organization stands and receive a personalized roadmap.
                                </p>

                                <div className="flex items-center gap-6 mb-8">
                                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <Clock className="w-4 h-4" />
                                        <span>8 Minutes</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <FileText className="w-4 h-4" />
                                        <span>12 Questions</span>
                                    </div>
                                </div>

                                <Button onClick={handleStart} size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                    Begin Assessment
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card className="p-8 bg-gradient-to-br from-[var(--color-card)] to-[#1a1a2e]">
                                    <BarChart3 className="w-12 h-12 text-[var(--color-champagne)] mb-6" />
                                    <h3 className="text-xl font-semibold text-white mb-4">Your Personalized Report Will:</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                                                <Target className="w-4 h-4 text-[var(--color-accent)]" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">Highlight drivers of success</p>
                                                <p className="text-sm text-[var(--color-muted)]">Across 6 critical AI transformation pillars</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0">
                                                <BarChart3 className="w-4 h-4 text-[var(--color-success)]" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">Benchmark your organization</p>
                                                <p className="text-sm text-[var(--color-muted)]">Compare against industry peers and leaders</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--color-warning)]/20 flex items-center justify-center flex-shrink-0">
                                                <TrendingUp className="w-4 h-4 text-[var(--color-warning)]" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">Identify opportunities</p>
                                                <p className="text-sm text-[var(--color-muted)]">With actionable guidance for improvement</p>
                                            </div>
                                        </li>
                                    </ul>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Pillars Overview */}
                <Section background="alt">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-serif text-[var(--color-foreground)] mb-4">The 6 AI Transformation Pillars</h2>
                            <p className="text-[var(--color-muted)]">We evaluate your organization across these critical dimensions</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((pillar, i) => (
                            <ScrollReveal key={pillar.id} delay={i * 0.1}>
                                <Card className="p-6 h-full">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${pillar.color}20` }}>
                                        <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                                    </div>
                                    <h3 className="text-white font-medium mb-2">{pillar.name}</h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        {pillar.id === 'data' && 'Quality, accessibility, and labeling of operational data'}
                                        {pillar.id === 'infrastructure' && 'MLOps, compute resources, and deployment capabilities'}
                                        {pillar.id === 'talent' && 'AI/ML expertise and organizational AI literacy'}
                                        {pillar.id === 'governance' && 'Ethics, compliance, and risk management frameworks'}
                                        {pillar.id === 'strategy' && 'Alignment with business goals and ROI measurement'}
                                        {pillar.id === 'culture' && 'Innovation mindset and change readiness'}
                                    </p>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </Section>
            </>
        )
    }

    // Questions Stage
    if (stage === 'questions') {
        const question = questions[currentQuestion]
        const currentPillar = pillars.find(p => p.id === question.pillar)!

        return (
            <Section className="pt-32 pb-16 min-h-screen">
                <div className="max-w-3xl mx-auto">
                    {/* Progress Bar */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-[var(--color-muted)]">
                                Question {currentQuestion + 1} of {questions.length}
                            </span>
                            <span className="text-sm text-[var(--color-muted)]">{Math.round(progress)}% Complete</span>
                        </div>
                        <div className="h-2 rounded-full bg-[var(--color-card)] overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-[var(--color-accent)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Question Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isTransitioning ? 0 : 1, x: isTransitioning ? -50 : 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="p-8 lg:p-12">
                                {/* Pillar Badge */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${currentPillar.color}20` }}
                                    >
                                        <currentPillar.icon className="w-4 h-4" style={{ color: currentPillar.color }} />
                                    </div>
                                    <span className="text-sm text-[var(--color-muted)]">{currentPillar.name}</span>
                                </div>

                                {/* Question */}
                                <h2 className="text-2xl font-semibold text-white mb-8 leading-relaxed">
                                    {question.question}
                                </h2>

                                {/* Options */}
                                <div className="space-y-4">
                                    {question.options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(option.score)}
                                            className={`w-full text-left p-5 rounded-xl border transition-all ${answers[question.id] === option.score
                                                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                                : 'border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-card-hover)]'
                                                }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${answers[question.id] === option.score
                                                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                                                    : 'border-[var(--color-border)]'
                                                    }`}>
                                                    {answers[question.id] === option.score && (
                                                        <CheckCircle className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                                <span className="text-white">{option.text}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-[var(--color-muted)] hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {currentQuestion === 0 ? 'Exit Assessment' : 'Previous Question'}
                        </button>

                        {answers[question.id] && currentQuestion < questions.length - 1 && (
                            <button
                                onClick={() => setCurrentQuestion(prev => prev + 1)}
                                className="flex items-center gap-2 text-[var(--color-accent)] hover:text-white transition-colors"
                            >
                                Next Question
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </Section>
        )
    }

    // Results Stage
    return (
        <>
            <Section className="pt-32 pb-16">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <p className="text-eyebrow mb-4">Assessment Complete</p>
                        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                            Your AI Readiness Score
                        </h1>
                    </motion.div>

                    {/* Overall Score Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-8 lg:p-12 text-center mb-12">
                            <div className="mb-6">
                                <div
                                    className="text-7xl font-serif font-bold mb-2"
                                    style={{ color: maturity.color }}
                                >
                                    {overallScore.toFixed(1)}
                                </div>
                                <div className="text-[var(--color-muted)]">out of 4.0</div>
                            </div>
                            <div
                                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                                style={{ backgroundColor: `${maturity.color}20`, color: maturity.color }}
                            >
                                {maturity.level} Maturity
                            </div>
                            <p className="text-lg text-[var(--color-muted)]">{maturity.description}</p>
                        </Card>
                    </motion.div>

                    {/* Pillar Breakdown */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Pillar Breakdown</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pillars.map((pillar, i) => {
                                const score = getPillarScore(pillar.id, answers)
                                const pillarMaturity = getMaturityLevel(score)
                                return (
                                    <motion.div
                                        key={pillar.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <Card className="p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                    style={{ backgroundColor: `${pillar.color}20` }}
                                                >
                                                    <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-medium">{pillar.name}</h3>
                                                    <span
                                                        className="text-xs"
                                                        style={{ color: pillarMaturity.color }}
                                                    >
                                                        {pillarMaturity.level}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-[var(--color-muted)]">Score</span>
                                                    <span className="text-white font-medium">{score.toFixed(1)} / 4.0</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-[var(--color-background)]">
                                                    <div
                                                        className="h-full rounded-full transition-all"
                                                        style={{
                                                            width: `${(score / 4) * 100}%`,
                                                            backgroundColor: pillarMaturity.color
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Recommendations */}
            <Section background="alt">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold text-white mb-8 text-center">Personalized Recommendations</h2>

                    <div className="space-y-6">
                        {pillars.map((pillar) => {
                            const score = getPillarScore(pillar.id, answers)
                            const recommendations = getRecommendations(pillar.id, score)

                            return (
                                <Card key={pillar.id} className="p-6 lg:p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                                            style={{ backgroundColor: `${pillar.color}20` }}
                                        >
                                            <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">{pillar.name}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {recommendations.map((rec, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                                                <span className="text-[var(--color-muted)]">{rec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white mb-6">Ready to Accelerate Your AI Transformation?</h2>
                    <p className="text-lg text-[var(--color-muted)] mb-8">
                        Let's discuss your assessment results and create a customized roadmap to production-grade AI.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Executive Briefing
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => {
                                setStage('intro')
                                setAnswers({})
                                setCurrentQuestion(0)
                            }}
                        >
                            Retake Assessment
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    )
}
