import { useState } from 'react'
import { Download, FileText, Lock, ArrowRight, Filter, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Card,
    Button,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const categories = ['All', 'Strategy', 'Technical', 'Industry', 'Implementation']

const whitepapers = [
    {
        id: 'production-ai-playbook',
        title: 'The Production AI Playbook: From 60% Demo to 95% Reality',
        description: 'A comprehensive guide to bridging the gap between AI demonstrations and production-grade implementations. Includes frameworks, case studies, and implementation checklists.',
        category: 'Strategy',
        pages: 42,
        readTime: '25 min',
        gated: true,
        featured: true,
        topics: ['RLHF', 'Production AI', 'Enterprise Deployment'],
    },
    {
        id: 'healthcare-ai-2026',
        title: 'State of Healthcare AI 2026: What\'s Working',
        description: 'Analysis of healthcare AI adoption patterns, successful use cases, and lessons learned from implementations across payers and providers.',
        category: 'Industry',
        pages: 36,
        readTime: '20 min',
        gated: true,
        featured: true,
        topics: ['Healthcare', 'Claims Processing', 'Prior Authorization'],
    },
    {
        id: 'ai-roi-framework',
        title: 'The CFO\'s Guide to AI ROI: Quantifying Enterprise Value',
        description: 'A practical framework for building AI business cases that get funded and measuring outcomes that matter to the C-suite.',
        category: 'Strategy',
        pages: 28,
        readTime: '15 min',
        gated: true,
        featured: false,
        topics: ['ROI', 'Business Case', 'Financial Metrics'],
    },
    {
        id: 'rlhf-technical-guide',
        title: 'RLHF for Enterprise: Technical Implementation Guide',
        description: 'Deep technical dive into implementing human-in-the-loop reinforcement learning for enterprise applications with domain experts.',
        category: 'Technical',
        pages: 54,
        readTime: '35 min',
        gated: true,
        featured: false,
        topics: ['RLHF', 'Machine Learning', 'Model Training'],
    },
    {
        id: 'ai-governance-framework',
        title: 'AI Governance That Works: A Practical Framework',
        description: 'How to create oversight frameworks that manage risk without killing innovation velocity.',
        category: 'Strategy',
        pages: 32,
        readTime: '18 min',
        gated: true,
        featured: false,
        topics: ['Governance', 'Risk Management', 'Compliance'],
    },
    {
        id: 'financial-services-ai',
        title: 'Document Intelligence in Financial Services',
        description: 'Implementation patterns and lessons learned from automating regulatory compliance workflows at global financial institutions.',
        category: 'Industry',
        pages: 38,
        readTime: '22 min',
        gated: true,
        featured: false,
        topics: ['Financial Services', 'Document Intelligence', 'Compliance'],
    },
    {
        id: 'ai-change-management',
        title: 'Leading AI Adoption: Change Management for Transformation',
        description: 'Strategies for driving AI adoption at scale, overcoming resistance, and building organizational capacity.',
        category: 'Implementation',
        pages: 26,
        readTime: '14 min',
        gated: true,
        featured: false,
        topics: ['Change Management', 'Adoption', 'Organizational Design'],
    },
    {
        id: 'vendor-selection-guide',
        title: 'AI Vendor Selection: An Enterprise Buyer\'s Guide',
        description: 'Evaluation criteria, red flags, and negotiation strategies for enterprise AI vendor selection.',
        category: 'Implementation',
        pages: 24,
        readTime: '12 min',
        gated: false,
        featured: false,
        topics: ['Vendor Selection', 'Procurement', 'Due Diligence'],
    },
]

export default function Whitepapers() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [showDownloadModal, setShowDownloadModal] = useState(false)
    const [selectedPaper, setSelectedPaper] = useState<typeof whitepapers[0] | null>(null)

    const filteredPapers = selectedCategory === 'All'
        ? whitepapers
        : whitepapers.filter(paper => paper.category === selectedCategory)

    const featuredPapers = whitepapers.filter(paper => paper.featured)

    const handleDownload = (paper: typeof whitepapers[0]) => {
        if (paper.gated) {
            setSelectedPaper(paper)
            setShowDownloadModal(true)
        } else {
            // Direct download for ungated content
            alert('Download started!')
        }
    }

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
                        <p className="text-eyebrow mb-6">Resources</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Whitepapers & Guides
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            In-depth research, frameworks, and practical guides for enterprise AI
                            transformation. Written by practitioners, for practitioners.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Featured Papers */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Featured"
                        title="Essential Reading"
                        subtitle="Our most impactful research and frameworks."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {featuredPapers.map((paper, index) => (
                        <ScrollReveal key={paper.id} delay={index * 0.1}>
                            <Card className="p-8 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="badge badge-gold">Featured</span>
                                    <span className="text-xs text-[var(--color-muted)]">{paper.category}</span>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-4">{paper.title}</h3>
                                <p className="text-[var(--color-muted)] leading-relaxed mb-6 flex-1">
                                    {paper.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {paper.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 text-xs bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-[var(--color-muted)]"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-[var(--color-subtle)]">
                                        <span className="flex items-center gap-1">
                                            <FileText className="w-3 h-3" />
                                            {paper.pages} pages
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {paper.readTime}
                                        </span>
                                    </div>
                                    <Button
                                        size="sm"
                                        onClick={() => handleDownload(paper)}
                                        icon={paper.gated ? <Lock className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                                    >
                                        Download
                                    </Button>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* All Papers */}
            <Section>
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-serif text-[var(--color-foreground)]">All Resources</h2>
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-[var(--color-muted)]" />
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 text-sm rounded-lg transition-all ${selectedCategory === category
                                        ? 'bg-[var(--color-foreground)] text-[#050505] font-medium'
                                        : 'bg-[var(--color-card)] text-[var(--color-muted)] hover:text-white border border-[var(--color-border)]'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPapers.map((paper) => (
                                <StaggerItem key={paper.id}>
                                    <Card className="p-6 h-full flex flex-col group hover:border-[var(--color-gold)]/30 transition-all">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-[var(--color-accent)]">{paper.category}</span>
                                            {paper.gated && <Lock className="w-3 h-3 text-[var(--color-subtle)]" />}
                                        </div>
                                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors line-clamp-2">
                                            {paper.title}
                                        </h4>
                                        <p className="text-sm text-[var(--color-muted)] mb-4 line-clamp-3 flex-1">
                                            {paper.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
                                            <div className="flex items-center gap-3 text-xs text-[var(--color-subtle)]">
                                                <span>{paper.pages} pages</span>
                                                <span>•</span>
                                                <span>{paper.readTime}</span>
                                            </div>
                                            <button
                                                onClick={() => handleDownload(paper)}
                                                className="text-[var(--color-gold)] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                            >
                                                Get PDF <ArrowRight className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                </AnimatePresence>
            </Section>

            {/* Download Modal */}
            <AnimatePresence>
                {showDownloadModal && selectedPaper && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowDownloadModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card className="p-8">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-8 h-8 text-[var(--color-gold)]" />
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-2">Download: {selectedPaper.title}</h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        Enter your details to access this resource.
                                    </p>
                                </div>
                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowDownloadModal(false); }}>
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
                                    <Button type="submit" className="w-full" icon={<Download className="w-4 h-4" />}>
                                        Download PDF
                                    </Button>
                                </form>
                                <p className="text-xs text-[var(--color-subtle)] text-center mt-4">
                                    By downloading, you agree to receive occasional updates from Zero G Foundry.
                                </p>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif text-[var(--color-foreground)] mb-6">
                            Ready to Apply These Insights?
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-10">
                            Schedule a complimentary executive briefing to discuss how these
                            frameworks apply to your organization's specific challenges.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule Briefing
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
