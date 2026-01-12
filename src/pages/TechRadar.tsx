import { motion } from 'framer-motion'
import { TrendingUp, AlertCircle, Clock, Check, ArrowRight } from 'lucide-react'
import {
    Section,
    Button,
    Card,
    ScrollReveal,
} from '../components'

type TechStatus = 'adopt' | 'trial' | 'assess' | 'hold'

interface Technology {
    name: string
    category: string
    status: TechStatus
    description: string
    useCase: string
    maturityLevel: number // 1-5
}

const technologies: Technology[] = [
    // Adopt
    {
        name: 'GPT-4 / Claude 3',
        category: 'Foundation Models',
        status: 'adopt',
        description: 'Production-ready LLMs for enterprise text generation, analysis, and automation.',
        useCase: 'Document processing, customer service, content generation',
        maturityLevel: 5,
    },
    {
        name: 'RAG Architecture',
        category: 'AI Infrastructure',
        status: 'adopt',
        description: 'Retrieval-augmented generation for grounded, accurate AI responses.',
        useCase: 'Knowledge bases, Q&A systems, documentation search',
        maturityLevel: 5,
    },
    {
        name: 'Vector Databases',
        category: 'Data Infrastructure',
        status: 'adopt',
        description: 'Pinecone, Weaviate, and similar for semantic search and embeddings.',
        useCase: 'Similarity search, recommendation systems, semantic retrieval',
        maturityLevel: 4,
    },
    // Trial
    {
        name: 'Agentic AI Frameworks',
        category: 'AI Architecture',
        status: 'trial',
        description: 'Multi-step autonomous workflows with tool use (LangChain Agents, AutoGPT patterns).',
        useCase: 'Complex workflow automation, research tasks, multi-system orchestration',
        maturityLevel: 3,
    },
    {
        name: 'Fine-tuned Domain Models',
        category: 'Foundation Models',
        status: 'trial',
        description: 'Custom fine-tuned models for industry-specific language and terminology.',
        useCase: 'Healthcare claims, legal documents, financial analysis',
        maturityLevel: 4,
    },
    {
        name: 'Multimodal AI',
        category: 'Foundation Models',
        status: 'trial',
        description: 'Combined vision-language models for image/document understanding.',
        useCase: 'Medical imaging, document OCR, visual inspection',
        maturityLevel: 3,
    },
    // Assess
    {
        name: 'Open-Source LLMs',
        category: 'Foundation Models',
        status: 'assess',
        description: 'Llama 3, Mistral, and similar for on-premise deployment.',
        useCase: 'Data-sensitive applications, air-gapped environments',
        maturityLevel: 3,
    },
    {
        name: 'AI Code Generation',
        category: 'Developer Tools',
        status: 'assess',
        description: 'GitHub Copilot, Cursor, and similar for development acceleration.',
        useCase: 'Internal development productivity, code review automation',
        maturityLevel: 4,
    },
    // Hold
    {
        name: 'Fully Autonomous AI',
        category: 'AI Architecture',
        status: 'hold',
        description: 'Completely unsupervised AI decision-making without human oversight.',
        useCase: 'High-stakes decisions require human-in-the-loop',
        maturityLevel: 2,
    },
    {
        name: 'Unvetted AI Vendors',
        category: 'Vendor Ecosystem',
        status: 'hold',
        description: 'AI solutions without SOC 2, clear data policies, or enterprise SLAs.',
        useCase: 'Enterprise compliance and risk management',
        maturityLevel: 1,
    },
]

const statusConfig: Record<TechStatus, { label: string; color: string; bg: string; icon: typeof Check }> = {
    adopt: { label: 'Adopt', color: 'text-[var(--color-success)]', bg: 'bg-[var(--color-success)]/10', icon: Check },
    trial: { label: 'Trial', color: 'text-[var(--color-accent)]', bg: 'bg-[var(--color-accent)]/10', icon: TrendingUp },
    assess: { label: 'Assess', color: 'text-[var(--color-gold)]', bg: 'bg-[var(--color-gold)]/10', icon: Clock },
    hold: { label: 'Hold', color: 'text-red-400', bg: 'bg-red-500/10', icon: AlertCircle },
}

export default function TechRadar() {
    const groupedTech = technologies.reduce((acc, tech) => {
        if (!acc[tech.status]) acc[tech.status] = []
        acc[tech.status].push(tech)
        return acc
    }, {} as Record<TechStatus, Technology[]>)

    const statusOrder: TechStatus[] = ['adopt', 'trial', 'assess', 'hold']

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-32 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Technology Radar</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Enterprise AI Technology Evaluation
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Our continuously updated assessment of AI technologies for enterprise adoption.
                            Based on real-world deployments and production experience.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Legend */}
            <Section>
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {statusOrder.map(status => {
                        const config = statusConfig[status]
                        return (
                            <div key={status} className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-lg ${config.bg} ${config.color} flex items-center justify-center`}>
                                    <config.icon className="w-4 h-4" />
                                </div>
                                <span className="text-[var(--color-foreground)] font-medium">{config.label}</span>
                            </div>
                        )
                    })}
                </div>

                {/* Radar Visualization */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    {/* Concentric circles */}
                    <div className="aspect-square relative">
                        {[1, 2, 3, 4].map((ring) => (
                            <div
                                key={ring}
                                className="absolute rounded-full border border-[var(--color-border)]"
                                style={{
                                    width: `${ring * 25}%`,
                                    height: `${ring * 25}%`,
                                    left: `${50 - ring * 12.5}%`,
                                    top: `${50 - ring * 12.5}%`,
                                }}
                            />
                        ))}
                        {/* Center dot */}
                        <div className="absolute w-4 h-4 bg-[var(--color-accent)] rounded-full" style={{ left: 'calc(50% - 8px)', top: 'calc(50% - 8px)' }} />

                        {/* Quadrant labels */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-medium text-[var(--color-success)]">ADOPT</div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-red-400">HOLD</div>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[var(--color-gold)]">ASSESS</div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[var(--color-accent)]">TRIAL</div>
                    </div>
                </div>
            </Section>

            {/* Technology List by Status */}
            <Section background="alt">
                <div className="space-y-12">
                    {statusOrder.map(status => {
                        const techs = groupedTech[status] || []
                        const config = statusConfig[status]

                        return (
                            <div key={status}>
                                <ScrollReveal>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-10 h-10 rounded-lg ${config.bg} ${config.color} flex items-center justify-center`}>
                                            <config.icon className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">{config.label}</h2>
                                        <span className="text-[var(--color-muted)]">({techs.length} technologies)</span>
                                    </div>
                                </ScrollReveal>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {techs.map((tech, index) => (
                                        <ScrollReveal key={tech.name} delay={index * 0.05}>
                                            <Card padding="md" className="h-full">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                                                    <span className="text-xs px-2 py-1 bg-[var(--color-background)] rounded text-[var(--color-muted)]">
                                                        {tech.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-[var(--color-muted)] mb-3">{tech.description}</p>
                                                <p className="text-xs text-[var(--color-subtle)]">
                                                    <strong>Use Case:</strong> {tech.useCase}
                                                </p>
                                                {/* Maturity bar */}
                                                <div className="mt-3 flex items-center gap-2">
                                                    <span className="text-xs text-[var(--color-subtle)]">Maturity:</span>
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3, 4, 5].map(level => (
                                                            <div
                                                                key={level}
                                                                className={`w-3 h-3 rounded-full ${level <= tech.maturityLevel
                                                                    ? config.bg.replace('/10', '')
                                                                    : 'bg-[var(--color-border)]'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </Card>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Need Technology Guidance?</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Our team can help you evaluate AI technologies for your specific use cases
                            and build a roadmap for adoption.
                        </p>
                        <Button to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Technology Assessment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
