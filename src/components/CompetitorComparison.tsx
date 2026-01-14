import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Minus, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

interface FeatureCategory {
    name: string
    features: Feature[]
}

interface Feature {
    name: string
    description?: string
    zeroFoundry: 'yes' | 'partial' | 'no' | string
    competitors: Record<string, 'yes' | 'partial' | 'no' | string>
}

interface Competitor {
    id: string
    name: string
    color: string
}

const competitors: Competitor[] = [
    { id: 'legacy-vendor', name: 'Legacy Vendors', color: 'var(--color-muted)' },
    { id: 'hyperscaler', name: 'Hyperscalers', color: 'var(--color-aurora-teal)' },
    { id: 'boutique', name: 'Boutique Firms', color: 'var(--color-holographic-violet)' },
]

const mainframeFeatures: FeatureCategory[] = [
    {
        name: 'AI Capabilities',
        features: [
            {
                name: 'AI-Powered Code Analysis',
                description: 'Automated understanding of legacy code semantics',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'no', 'hyperscaler': 'partial', 'boutique': 'partial' }
            },
            {
                name: '95%+ Accuracy Guarantee',
                description: 'Production SLA on code conversion accuracy',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'no', 'hyperscaler': 'no', 'boutique': 'no' }
            },
            {
                name: 'RLHF Training',
                description: 'Reinforcement learning from human feedback',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'no', 'hyperscaler': 'yes', 'boutique': 'no' }
            },
        ]
    },
    {
        name: 'Migration Approach',
        features: [
            {
                name: 'Parallel Running',
                description: 'Zero-downtime migration with live validation',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'partial', 'hyperscaler': 'yes', 'boutique': 'partial' }
            },
            {
                name: 'Automated Testing Suite',
                description: 'AI-generated test cases from legacy code',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'no', 'hyperscaler': 'partial', 'boutique': 'no' }
            },
            {
                name: 'Business Logic Preservation',
                description: 'Semantic equivalence verification',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'partial', 'hyperscaler': 'partial', 'boutique': 'no' }
            },
        ]
    },
    {
        name: 'Enterprise Features',
        features: [
            {
                name: 'Fortune 500 Client Base',
                description: 'Proven at enterprise scale',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'yes', 'hyperscaler': 'yes', 'boutique': 'no' }
            },
            {
                name: 'Compliance Ready',
                description: 'SOC 2, HIPAA, PCI-DSS compliance',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'yes', 'hyperscaler': 'yes', 'boutique': 'partial' }
            },
            {
                name: 'Dedicated Success Team',
                description: 'Named account managers and engineers',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'partial', 'hyperscaler': 'partial', 'boutique': 'yes' }
            },
        ]
    },
]

const contactCenterFeatures: FeatureCategory[] = [
    {
        name: 'AI Features',
        features: [
            {
                name: 'Real-Time Accent Neutralization',
                description: 'Instant speech clarity enhancement',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'no', 'hyperscaler': 'no', 'boutique': 'partial' }
            },
            {
                name: 'AI Copilot for Agents',
                description: 'Live response suggestions',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'partial', 'hyperscaler': 'yes', 'boutique': 'partial' }
            },
            {
                name: 'Sentiment Analysis',
                description: 'Real-time customer emotion detection',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'yes', 'hyperscaler': 'yes', 'boutique': 'yes' }
            },
        ]
    },
    {
        name: 'Integration',
        features: [
            {
                name: 'CRM Integration',
                description: 'Salesforce, HubSpot, Zendesk',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'yes', 'hyperscaler': 'yes', 'boutique': 'partial' }
            },
            {
                name: 'Omnichannel Support',
                description: 'Voice, chat, email, social unified',
                zeroFoundry: 'yes',
                competitors: { 'legacy-vendor': 'partial', 'hyperscaler': 'yes', 'boutique': 'no' }
            },
        ]
    },
]

interface CompetitorComparisonProps {
    variant?: 'mainframe' | 'contact-center'
    className?: string
}

export default function CompetitorComparison({ variant = 'mainframe', className = '' }: CompetitorComparisonProps) {
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['AI Capabilities', 'AI Features'])
    const [showTooltip, setShowTooltip] = useState<string | null>(null)

    const features = variant === 'mainframe' ? mainframeFeatures : contactCenterFeatures

    const toggleCategory = (name: string) => {
        setExpandedCategories(prev =>
            prev.includes(name)
                ? prev.filter(c => c !== name)
                : [...prev, name]
        )
    }

    const renderValue = (value: 'yes' | 'partial' | 'no' | string, isPrimary = false) => {
        if (value === 'yes') {
            return (
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${isPrimary ? 'bg-[var(--color-success)]/20' : 'bg-white/5'}`}>
                    <Check className={`w-4 h-4 ${isPrimary ? 'text-[var(--color-success)]' : 'text-[var(--color-success)]'}`} />
                </div>
            )
        }
        if (value === 'partial') {
            return (
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5">
                    <Minus className="w-4 h-4 text-[var(--color-warning)]" />
                </div>
            )
        }
        if (value === 'no') {
            return (
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5">
                    <X className="w-4 h-4 text-white/30" />
                </div>
            )
        }
        return <span className="text-sm text-white/60">{value}</span>
    }

    return (
        <div className={`rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden ${className}`}>
            {/* Header */}
            <div className="p-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">How We Compare</h3>
                <p className="text-sm text-white/50 mt-1">
                    See how Zero Foundry stacks up against the competition
                </p>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/10">
                <div className="col-span-2 text-sm font-medium text-white/40">Feature</div>
                <div className="text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs font-medium">
                        Zero Foundry
                    </div>
                </div>
                {competitors.slice(0, 2).map(comp => (
                    <div key={comp.id} className="text-center">
                        <span className="text-xs text-white/40">{comp.name}</span>
                    </div>
                ))}
            </div>

            {/* Feature Categories */}
            <div>
                {features.map((category) => (
                    <div key={category.name}>
                        {/* Category Header */}
                        <button
                            onClick={() => toggleCategory(category.name)}
                            className="w-full flex items-center justify-between px-6 py-3 bg-white/[0.01] hover:bg-white/[0.03] transition-colors border-b border-white/5"
                        >
                            <span className="text-sm font-medium text-white">{category.name}</span>
                            {expandedCategories.includes(category.name)
                                ? <ChevronUp className="w-4 h-4 text-white/40" />
                                : <ChevronDown className="w-4 h-4 text-white/40" />
                            }
                        </button>

                        {/* Features */}
                        {expandedCategories.includes(category.name) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                {category.features.map((feature, idx) => (
                                    <div
                                        key={feature.name}
                                        className={`grid grid-cols-5 gap-4 px-6 py-4 items-center ${idx !== category.features.length - 1 ? 'border-b border-white/5' : ''
                                            }`}
                                    >
                                        {/* Feature Name & Description */}
                                        <div className="col-span-2 flex items-center gap-2">
                                            <div>
                                                <p className="text-sm text-white">{feature.name}</p>
                                                {feature.description && (
                                                    <p className="text-xs text-white/40 mt-0.5">{feature.description}</p>
                                                )}
                                            </div>
                                            {feature.description && (
                                                <div
                                                    className="relative"
                                                    onMouseEnter={() => setShowTooltip(feature.name)}
                                                    onMouseLeave={() => setShowTooltip(null)}
                                                >
                                                    <HelpCircle className="w-3.5 h-3.5 text-white/20 cursor-help" />
                                                    {showTooltip === feature.name && (
                                                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg text-xs text-white/70 w-48 z-10">
                                                            {feature.description}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Zero Foundry */}
                                        <div className="flex justify-center">
                                            {renderValue(feature.zeroFoundry, true)}
                                        </div>

                                        {/* Competitors */}
                                        {competitors.slice(0, 2).map(comp => (
                                            <div key={comp.id} className="flex justify-center">
                                                {renderValue(feature.competitors[comp.id])}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 px-6 py-4 bg-white/[0.02] border-t border-white/10">
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--color-success)]" />
                    <span className="text-xs text-white/50">Fully Supported</span>
                </div>
                <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 text-[var(--color-warning)]" />
                    <span className="text-xs text-white/50">Partial Support</span>
                </div>
                <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-white/30" />
                    <span className="text-xs text-white/50">Not Available</span>
                </div>
            </div>
        </div>
    )
}
