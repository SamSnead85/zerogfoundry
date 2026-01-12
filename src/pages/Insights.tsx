import { useState, useMemo } from 'react'
import { ArrowRight, Clock, BookOpen, TrendingUp, Lightbulb, Building2, Heart, Search } from 'lucide-react'
import { motion } from 'framer-motion'

import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

// Category configuration
const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Industry Analysis', label: 'Industry Analysis' },
    { id: 'Technical Deep Dive', label: 'Technical' },
    { id: 'Strategy', label: 'Strategy' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'Financial Services', label: 'Financial Services' },
    { id: 'Market Analysis', label: 'Market Analysis' },
]

// Author profiles with credentials
const authors = {
    samSweilem: {
        name: 'Sam Sweilem',
        title: 'Founder & CEO',
        credentials: 'Ex-Accenture VP | 20+ yrs Enterprise AI',
        initials: 'SS',
        color: 'var(--color-gold)',
    },
    mayaKrishnan: {
        name: 'Dr. Maya Krishnan',
        title: 'Chief Technology Officer',
        credentials: 'Ex-Google AI | Stanford PhD',
        initials: 'MK',
        color: 'var(--color-accent)',
    },
    jamesRichardson: {
        name: 'James Richardson',
        title: 'Chief Strategy Officer',
        credentials: 'Ex-McKinsey Partner | FinServ Focus',
        initials: 'JR',
        color: 'var(--color-success)',
    },
    researchTeam: {
        name: 'Research Team',
        title: 'Zero G Foundry',
        credentials: 'Enterprise AI Specialists',
        initials: 'ZG',
        color: 'var(--color-champagne)',
    },
}

const articles = [
    {
        slug: 'the-200b-last-mile-problem',
        title: 'The $200B Last Mile Problem: Why 95% of AI Projects Fail',
        summary: 'Enterprise AI has a dirty secret: the vast majority of projects never deliver meaningful ROI. We analyze the systemic causes and what it takes to break through.',
        content: `The AI industry has achieved remarkable technical breakthroughs. Models can now generate human-quality text, recognize images with superhuman accuracy, and solve complex reasoning problems. Yet despite these advances, a troubling pattern persists: **95% of enterprise AI projects fail to deliver meaningful ROI**.\n\nThis isn't a technology problem—it's a deployment problem. We call it the \"Last Mile Problem,\" and it represents a $200 billion gap between AI's potential and its reality.\n\n**The Demo Deception**\n\nEvery AI vendor can produce an impressive demo. In controlled conditions, with curated data, models achieve accuracy rates that seem transformational. But production environments are messy. Edge cases multiply. Data quality varies. User behavior defies predictions.\n\nA model that works 60% of the time in a demo is a 100% failure in production. If your claims processing AI incorrectly adjudicates 4 out of 10 claims, you haven't automated anything—you've created a new quality control problem.\n\n**Why Traditional Approaches Fail**\n\nThe typical enterprise AI project follows a predictable pattern:\n1. Exciting proof of concept with demo data\n2. Extended pilot with disappointing results\n3. Scope reduction and timeline extension\n4. Quiet sunsetting after millions spent\n\nThis happens because most approaches underestimate three critical challenges:\n- **Data scarcity**: Production-quality training data is expensive and rare\n- **Domain complexity**: Business logic can't be learned from general datasets\n- **Trust gaps**: Users won't adopt AI they can't trust\n\n**The Path Forward**\n\nBreaking through the last mile requires a fundamentally different approach—one that combines high-performance infrastructure, synthetic data generation, and human-in-the-loop reinforcement learning. It's not enough to build smart models; you must build trustworthy ones.`,
        category: 'Industry Analysis',
        readTime: '12 min read',
        author: authors.samSweilem,
        featured: true,
        icon: TrendingUp,
    },
    {
        slug: 'why-ai-agents-stuck-at-60-percent',
        title: 'Why Your AI Agent Gets Stuck at 60% Accuracy (And How to Fix It)',
        summary: 'The hidden challenges of moving from demo to production, and why RLHF is the missing piece that most AI implementations overlook.',
        content: `If you've deployed an AI agent in production, you've likely hit the same wall: performance that plateaus around 60% accuracy. It's frustrating because the technology clearly works—just not consistently enough to trust.

**The 60% Ceiling**

This ceiling exists because foundation models are trained on general web data. They know a lot about everything, but not enough about your specific domain. Fine-tuning helps, but without sufficient high-quality examples, improvements quickly plateau.

**The RLHF Difference**

Reinforcement Learning from Human Feedback (RLHF) breaks through this ceiling by teaching models not just what answers look like, but what good judgment looks like in your context.

When a claims adjuster reviews 1,000 edge cases and provides feedback on the AI's decisions, that expertise becomes embedded in the model. The AI learns the unwritten rules—the judgment calls that separate a 60% accurate system from a 95% accurate one.

**Implementation Keys**
- Start with your hardest cases, not your easiest
- Use domain experts, not general annotators
- Create feedback loops, not one-time training
- Measure trust, not just accuracy`,
        category: 'Technical Deep Dive',
        readTime: '8 min read',
        author: authors.mayaKrishnan,
        featured: true,
        icon: Lightbulb,
    },
    {
        slug: 'gainsharing-is-a-trap',
        title: 'The Case Against Gainsharing: Structuring AI Contracts That Work',
        summary: 'Why pure percentage-of-savings models fail, and how to structure value-based pricing that protects both parties.',
        content: `Gainsharing sounds attractive: the vendor only gets paid when you realize savings. What could go wrong?

Plenty.

**Why Gainsharing Fails**

Pure gainsharing creates perverse incentives:
- Vendors cherry-pick easy wins rather than tackling hard problems
- Measurement disputes consume relationship capital
- Long payback periods reduce vendor commitment
- Success depends on factors outside vendor control

**A Better Model**

Value-based pricing aligns incentives without the pitfalls:

1. **Paid Assessment**: Client invests in quantifying the opportunity. This filters non-serious buyers and establishes baseline metrics.

2. **Fixed-Fee Implementation**: Vendor takes execution risk with fees tied to quantified value (typically 15-25% of year-one savings).

3. **Performance Guarantees**: Contracts include performance floors with meaningful consequences.

4. **Success Kickers**: Modest bonuses for exceeding targets maintain vendor investment in optimization.

This model gives clients cost certainty while keeping vendors focused on outcomes.`,
        category: 'Strategy',
        readTime: '6 min read',
        author: authors.jamesRichardson,
        featured: false,
        icon: BookOpen,
    },
    {
        slug: 'beyond-the-demo',
        title: 'Beyond the Demo: What Production-Grade AI Really Means',
        summary: 'The technical and operational requirements for enterprise AI that you can trust in mission-critical workflows.',
        content: `"Production-grade" has become a meaningless marketing term. Every vendor claims it. Few deliver it.

Here's what production-grade actually requires:

**Reliability at Scale**
- 99.9%+ uptime SLAs
- Graceful degradation under load
- Automatic failover and recovery
- Performance monitoring and alerting

**Accuracy Guarantees**
- Documented accuracy metrics by use case
- Performance floors in contracts
- Continuous monitoring against baselines
- Automated drift detection

**Auditability**
- Complete decision trails
- Explainable outputs
- Compliance-ready documentation
- Version control for models

**Operational Integration**
- API-first architecture
- Enterprise SSO support
- Role-based access control
- Existing system integration

If your vendor can't document performance against these criteria, you don't have production-grade AI—you have an expensive experiment.`,
        category: 'Technical Deep Dive',
        readTime: '10 min read',
        author: authors.mayaKrishnan,
        featured: false,
        icon: Lightbulb,
    },
    {
        slug: 'agentic-ai-2025',
        title: '2025: The Year of Agentic AI',
        summary: 'Market analysis and strategic insights on the agentic AI revolution and what it means for enterprise transformation.',
        content: `The next wave of AI isn't about smarter models—it's about autonomous agents that can execute multi-step workflows without human intervention.

**What's Changing**

Traditional AI assists humans with discrete tasks. Agentic AI completes entire workflows:
- Researching, drafting, and filing regulatory responses
- Processing claims from intake to payment
- Managing patient prior authorizations end-to-end

**Market Implications**

The enterprises that master agentic AI will achieve step-function improvements in operational efficiency. Those that wait will face:
- Competitive disadvantage as peers automate
- Talent gaps as AI-native workers expect advanced tools
- Technical debt as point solutions proliferate

**Getting Started**

The path to agentic AI starts with production-grade AI for individual tasks. You can't automate a workflow if you can't trust the underlying models. Focus on:
1. Achieving 95%+ accuracy on core decisions
2. Building trust with human operators
3. Designing workflows for progressive autonomy`,
        category: 'Market Analysis',
        readTime: '7 min read',
        author: authors.samSweilem,
        featured: false,
        icon: TrendingUp,
    },
    {
        slug: 'healthcare-ai-compliance',
        title: 'Building HIPAA-Compliant AI: A Technical Guide',
        summary: 'How to architect AI systems that meet healthcare regulatory requirements without sacrificing performance.',
        content: `Healthcare AI faces a unique challenge: the data that makes models most accurate is also the most regulated.

**HIPAA Requirements for AI**

- **PHI Handling**: All training data must be de-identified or processed under Business Associate Agreements
- **Access Controls**: Role-based access to model inputs and outputs
- **Audit Trails**: Complete logging of all AI decisions involving patient data
- **Encryption**: At-rest and in-transit encryption for all PHI

**Architecture Patterns**

Successful healthcare AI implementations typically use:
- **Synthetic data**: Train on generated data that preserves statistical properties without exposing real PHI
- **Federated learning**: Train models across institutions without centralizing data
- **Edge deployment**: Process sensitive data on-premises while using cloud for non-PHI workloads

**Compliance as Competitive Advantage**

Organizations that build compliant AI infrastructure gain sustainable advantages:
- Faster deployment of new use cases
- Reduced legal and regulatory risk
- Greater clinician trust and adoption`,
        category: 'Healthcare',
        readTime: '9 min read',
        author: authors.researchTeam,
        featured: false,
        icon: Heart,
    },
    {
        slug: 'financial-services-ai-maturity',
        title: 'Financial Services AI: From Pilots to Production',
        summary: 'Lessons from financial institutions that have successfully scaled AI beyond proof-of-concept.',
        content: `Financial services firms have invested heavily in AI, but most remain stuck in "pilot purgatory"—endless proofs of concept that never reach production scale.

**What Separates Winners from Also-Rans**

The institutions seeing real ROI from AI share common characteristics:
- **Executive sponsorship** with P&L accountability
- **Use case prioritization** based on value, not novelty
- **Centralized AI infrastructure** that enables rapid deployment
- **Performance guarantees** that create accountability

**High-Impact Use Cases**

The highest-ROI applications in financial services:
1. Document processing and extraction (95% automation achievable)
2. Regulatory compliance monitoring (70% reduction in review time)
3. Customer service automation (60% reduction in handle time)
4. Fraud detection enhancement (25% improvement in detection, 40% reduction in false positives)

**The Path Forward**

Stop running pilots. Start building production. The technology is ready—the question is whether your organization is.`,
        category: 'Financial Services',
        readTime: '8 min read',
        author: authors.jamesRichardson,
        featured: false,
        icon: Building2,
    },
]

export default function Insights() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    // Filter articles based on search and category
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = searchQuery === '' ||
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.summary.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
            return matchesSearch && matchesCategory
        })
    }, [searchQuery, selectedCategory])

    const featuredArticles = filteredArticles.filter(a => a.featured)
    const regularArticles = filteredArticles.filter(a => !a.featured)

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-32 pb-16">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Insights</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Thought Leadership & Analysis</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                            Deep dives into AI transformation strategy, technical implementation,
                            and market trends from our team of practitioners.
                        </p>

                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mt-8"
                >
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category.id
                                ? 'bg-[var(--color-accent)] text-white'
                                : 'bg-[var(--color-card)] text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-card-elevated)]'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Results count */}
                {(searchQuery || selectedCategory !== 'all') && (
                    <p className="text-center text-sm text-[var(--color-muted)] mt-4">
                        Showing {filteredArticles.length} of {articles.length} articles
                    </p>
                )}
            </Section>

            {/* Featured Articles */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Featured"
                        title="Essential Reading"
                        subtitle="Our most impactful insights on AI transformation."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredArticles.map((article, index) => (
                        <ScrollReveal key={article.slug} delay={index * 0.1}>
                            <Card className="h-full flex flex-col" padding="lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                                        <article.icon className="w-5 h-5" />
                                    </div>
                                    <span className="badge">{article.category}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-[var(--color-muted)] mb-6 flex-grow">
                                    {article.summary}
                                </p>

                                {/* Article Preview */}
                                <div className="mb-6 p-4 bg-[var(--color-background)]/50 rounded-lg">
                                    <p className="text-sm text-[var(--color-muted)] line-clamp-3">
                                        {article.content.substring(0, 200)}...
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{ backgroundColor: `${article.author.color}20`, color: article.author.color }}
                                        >
                                            {article.author.initials}
                                        </div>
                                        <div>
                                            <p className="text-sm text-white font-medium">{article.author.name}</p>
                                            <p className="text-xs text-[var(--color-subtle)]">{article.author.credentials}</p>
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </span>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* All Articles */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="All Articles"
                        title="Full Library"
                        subtitle="Explore our complete collection of AI transformation resources."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularArticles.map((article) => (
                        <StaggerItem key={article.slug}>
                            <Card className="h-full flex flex-col" padding="md">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-[var(--color-card-elevated)] flex items-center justify-center text-[var(--color-muted)]">
                                        <article.icon className="w-4 h-4" />
                                    </div>
                                    <span className="badge">{article.category}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] mb-4 flex-grow">
                                    {article.summary}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </span>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Newsletter CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-8 lg:p-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Stay Informed</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Get our latest insights on AI transformation delivered to your inbox.
                            No spam, just valuable content for enterprise leaders.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-input flex-grow"
                            />
                            <Button type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </Card>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-white mb-6">Want to Discuss How This Applies to Your Business?</h2>
                        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                            Schedule a conversation to explore how these insights can drive
                            transformation in your organization.
                        </p>
                        <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Schedule a Consultation
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
