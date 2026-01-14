import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles, Check } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

interface TourStep {
    id: string
    title: string
    description: string
    targetSelector?: string
    route?: string
    position?: 'top' | 'bottom' | 'left' | 'right' | 'center'
    highlight?: boolean
}

const tourSteps: TourStep[] = [
    {
        id: 'welcome',
        title: 'Welcome to Zero Foundry',
        description: "Let me show you around our AI transformation platform. We'll explore our two flagship solutions and how they work together.",
        position: 'center'
    },
    {
        id: 'hero',
        title: 'From Core to Customer',
        description: "Zero Foundry transforms enterprises end-to-end—from modernizing legacy mainframes to revolutionizing customer experience. It's all powered by our Agentic AI Engine.",
        route: '/',
        position: 'center'
    },
    {
        id: 'solutions',
        title: 'Two Flagship Solutions',
        description: 'Explore our Mainframe Modernization and AI Contact Center solutions. Both achieve 95%+ accuracy with production guarantees.',
        targetSelector: '#solution',
        route: '/',
        position: 'top'
    },
    {
        id: 'mainframe',
        title: 'Mainframe Modernization',
        description: 'AI-powered legacy transformation that converts COBOL and DB2 systems to modern cloud-native architectures. Clients save $8-15M annually.',
        route: '/solutions/mainframe',
        position: 'center'
    },
    {
        id: 'contact-center',
        title: 'AI Contact Center',
        description: 'Real-time AI copilots, accent neutralization, and omnichannel intelligence. Turn your contact center into a revenue engine.',
        route: '/solutions/contact-center',
        position: 'center'
    },
    {
        id: 'demo',
        title: 'Try the Demo',
        description: 'Toggle the switch to experience our real-time accent neutralization. This is actual AI technology in action.',
        targetSelector: '#contact-center-demo',
        route: '/solutions/contact-center',
        position: 'top'
    },
    {
        id: 'platform',
        title: 'The Agentic Engine',
        description: 'Our unified AI foundation powers both solutions. Built on NVIDIA DGX infrastructure with RLHF training for production-grade accuracy.',
        route: '/platform/agentic-engine',
        position: 'center'
    },
    {
        id: 'assessment',
        title: 'Start Your Assessment',
        description: "Ready to see what's possible? Our free assessment quantifies your AI transformation opportunity in just 4-6 weeks.",
        route: '/assessment',
        position: 'center'
    },
    {
        id: 'complete',
        title: 'Tour Complete!',
        description: "You've seen the highlights. Ready to explore more or schedule a personalized demo with our team?",
        position: 'center'
    }
]

const STORAGE_KEY = 'zerofoundry-tour-completed'

interface ProductTourProps {
    forceStart?: boolean
    onComplete?: () => void
}

export default function ProductTour({ forceStart = false, onComplete }: ProductTourProps) {
    const [isActive, setIsActive] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [hasCompleted, setHasCompleted] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    // Check if tour was already completed
    useEffect(() => {
        const completed = localStorage.getItem(STORAGE_KEY)
        if (completed) {
            setHasCompleted(true)
        }
    }, [])

    // Start tour if forced
    useEffect(() => {
        if (forceStart && !isActive) {
            setIsActive(true)
            setCurrentStep(0)
        }
    }, [forceStart, isActive])

    const step = tourSteps[currentStep]

    const handleNext = () => {
        if (currentStep < tourSteps.length - 1) {
            const nextStep = tourSteps[currentStep + 1]
            if (nextStep.route && nextStep.route !== location.pathname) {
                navigate(nextStep.route)
            }
            setCurrentStep(prev => prev + 1)
        } else {
            handleComplete()
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            const prevStep = tourSteps[currentStep - 1]
            if (prevStep.route && prevStep.route !== location.pathname) {
                navigate(prevStep.route)
            }
            setCurrentStep(prev => prev - 1)
        }
    }

    const handleSkip = () => {
        localStorage.setItem(STORAGE_KEY, 'true')
        setIsActive(false)
        setHasCompleted(true)
    }

    const handleComplete = () => {
        localStorage.setItem(STORAGE_KEY, 'true')
        setIsActive(false)
        setHasCompleted(true)
        onComplete?.()
    }

    const handleRestart = () => {
        setCurrentStep(0)
        setIsActive(true)
        navigate('/')
    }

    // Don't render if tour isn't active
    if (!isActive) {
        // Show floating restart button if tour was completed
        return hasCompleted ? (
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={handleRestart}
                className="fixed bottom-24 right-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm hover:bg-white/10 hover:text-white transition-all z-30 flex items-center gap-2"
            >
                <Sparkles className="w-4 h-4" />
                Take a Tour
            </motion.button>
        ) : null
    }

    return (
        <AnimatePresence>
            {isActive && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Tour Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`fixed z-[70] ${step.position === 'center' ? 'inset-0 flex items-center justify-center p-4' : ''
                            }`}
                    >
                        <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-[var(--color-gold)]/5 to-[var(--color-aurora-teal)]/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-[var(--color-gold)]" />
                                    </div>
                                    <span className="text-sm text-white/60">
                                        Step {currentStep + 1} of {tourSteps.length}
                                    </span>
                                </div>
                                <button
                                    onClick={handleSkip}
                                    className="text-sm text-white/40 hover:text-white transition-colors"
                                >
                                    Skip Tour
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    {step.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="flex gap-1 mb-6">
                                    {tourSteps.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex-1 h-1 rounded-full transition-colors ${idx < currentStep ? 'bg-[var(--color-success)]' :
                                                idx === currentStep ? 'bg-[var(--color-gold)]' :
                                                    'bg-white/10'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentStep === 0}
                                        className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back
                                    </button>

                                    {currentStep === tourSteps.length - 1 ? (
                                        <button
                                            onClick={handleComplete}
                                            className="px-5 py-2 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                                        >
                                            <Check className="w-4 h-4" />
                                            Complete Tour
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleNext}
                                            className="px-5 py-2 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                                        >
                                            Next
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
