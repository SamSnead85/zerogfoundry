import { ArrowRight, Clock, User } from 'lucide-react'
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

const articles = [
    {
        slug: 'why-ai-agents-stuck-at-60-percent',
        title: 'Why Your AI Agent Gets Stuck at 60% Accuracy (And How to Fix It)',
        summary: 'The hidden challenges of moving from demo to production, and why RLHF is the missing piece that most AI implementations overlook.',
        category: 'Technical Deep Dive',
        readTime: '8 min read',
        author: 'Zero G Foundry',
        featured: true,
    },
    {
        slug: 'gainsharing-is-a-trap',
        title: 'Gainsharing is a Trap: The Right Way to Structure Outcome-Based AI Contracts',
        summary: 'Why pure percentage-of-savings models fail, and how to structure value-based pricing that protects both parties.',
        category: 'Strategy',
        readTime: '6 min read',
        author: 'Zero G Foundry',
        featured: true,
    },
    {
        slug: 'beyond-the-demo',
        title: 'Beyond the Demo: What Production-Grade AI Really Looks Like',
        summary: 'The technical and operational requirements for enterprise AI that you can trust in mission-critical workflows.',
        category: 'Technical Deep Dive',
        readTime: '10 min read',
        author: 'Zero G Foundry',
        featured: false,
    },
    {
        slug: 'agentic-ai-opportunity',
        title: 'The $200B Opportunity: Why Agentic AI is the Next Frontier',
        summary: 'Market analysis and strategic insights on the agentic AI revolution and what it means for enterprise transformation.',
        category: 'Market Analysis',
        readTime: '7 min read',
        author: 'Zero G Foundry',
        featured: false,
    },
    {
        slug: 'rlhf-explained',
        title: 'RLHF Explained: How Human Feedback Transforms AI Accuracy',
        summary: "A practical guide to reinforcement learning from human feedback and why it's essential for enterprise AI.",
        category: 'Technical Deep Dive',
        readTime: '12 min read',
        author: 'Zero G Foundry',
        featured: false,
    },
    {
        slug: 'healthcare-ai-compliance',
        title: 'Building HIPAA-Compliant AI: A Technical Guide',
        summary: 'How to architect AI systems that meet healthcare regulatory requirements without sacrificing performance.',
        category: 'Healthcare',
        readTime: '9 min read',
        author: 'Zero G Foundry',
        featured: false,
    },
]

export default function Insights() {
    const featuredArticles = articles.filter(a => a.featured)
    const regularArticles = articles.filter(a => !a.featured)

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
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Deep dives into AI transformation strategy, technical implementation,
                            and market trends from our team of experts.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Featured Articles */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Featured"
                        title="Essential Reading"
                        subtitle="Our most popular insights on AI transformation."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredArticles.map((article, index) => (
                        <ScrollReveal key={article.slug} delay={index * 0.1}>
                            <Card className="h-full flex flex-col" padding="lg">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="badge">{article.category}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-[var(--color-muted)] mb-6 flex-grow">
                                    {article.summary}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                                    <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {article.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <button className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                                        Read Article
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
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
                        title="Latest Insights"
                        subtitle="Explore our complete library of AI transformation resources."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularArticles.map((article) => (
                        <StaggerItem key={article.slug}>
                            <Card className="h-full flex flex-col" padding="md">
                                <span className="badge mb-3 w-fit">{article.category}</span>
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
                            Schedule an Assessment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
