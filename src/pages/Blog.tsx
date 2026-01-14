import { useState } from 'react'
import { Search, Clock, User, Tag, ChevronRight, TrendingUp, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Section,
    Card,
    Button,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const categories = [
    'All',
    'Strategy',
    'Technical',
    'Industry Insights',
    'Case Studies',
    'Thought Leadership',
]

const featuredArticle = {
    id: 'ai-last-mile-problem',
    title: 'Why Your AI Agent Gets Stuck at 60% Accuracy—And How to Fix It',
    excerpt: 'The hidden challenges of moving from demo to production, and why RLHF is the missing piece that most AI implementations overlook. A deep technical dive into production-grade AI.',
    author: 'Sam Sweilem',
    authorRole: 'Founder & CEO',
    date: 'January 10, 2026',
    readTime: '12 min read',
    category: 'Technical',
    image: null,
}

const articles = [
    {
        id: 'gainsharing-contracts',
        title: 'The Case Against Gainsharing in AI Contracts',
        excerpt: 'Why pure percentage-of-savings models fail, and how to structure value-based pricing that protects both parties.',
        author: 'James Richardson',
        date: 'January 8, 2026',
        readTime: '8 min read',
        category: 'Strategy',
    },
    {
        id: 'healthcare-ai-2026',
        title: 'Healthcare AI in 2026: From Pilot to Production',
        excerpt: 'The trends, technologies, and organizational patterns that separate successful healthcare AI from expensive experiments.',
        author: 'Dr. Maya Krishnan',
        date: 'January 5, 2026',
        readTime: '10 min read',
        category: 'Industry Insights',
    },
    {
        id: 'rlhf-enterprise',
        title: 'RLHF for Enterprise: A Practitioner\'s Guide',
        excerpt: 'How to implement human-in-the-loop reinforcement learning in enterprise settings with domain experts.',
        author: 'Dr. Maya Krishnan',
        date: 'January 2, 2026',
        readTime: '15 min read',
        category: 'Technical',
    },
    {
        id: 'ai-governance-framework',
        title: 'Building an AI Governance Framework That Actually Works',
        excerpt: 'Practical steps for establishing AI oversight that enables innovation while managing risk.',
        author: 'James Richardson',
        date: 'December 28, 2025',
        readTime: '9 min read',
        category: 'Strategy',
    },
    {
        id: 'financial-services-automation',
        title: 'Document Intelligence in Financial Services: Lessons Learned',
        excerpt: 'Key insights from automating regulatory compliance workflows at a global financial institution.',
        author: 'Sam Sweilem',
        date: 'December 22, 2025',
        readTime: '11 min read',
        category: 'Case Studies',
    },
    {
        id: 'ai-trust-deficit',
        title: 'The AI Trust Deficit: Why Employees Resist AI Tools',
        excerpt: 'Understanding and addressing the psychological barriers to AI adoption in enterprise environments.',
        author: 'Sam Sweilem',
        date: 'December 18, 2025',
        readTime: '7 min read',
        category: 'Thought Leadership',
    },
]

const trendingTopics = [
    'Production AI',
    'RLHF',
    'Healthcare AI',
    'AI Governance',
    'Document Intelligence',
    'Enterprise Automation',
]

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-16 pb-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Insights</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            The Zero G Foundry Blog
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Deep dives into AI strategy, technical implementation, and enterprise
                            transformation from our team of practitioners.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Featured Article */}
            <Section background="alt" className="py-12">
                <ScrollReveal>
                    <Link to={`/blog/${featuredArticle.id}`}>
                        <Card className="p-8 lg:p-12 group hover:border-[var(--color-gold)]/30 transition-all cursor-pointer">
                            <div className="grid lg:grid-cols-2 gap-10 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="badge badge-gold">Featured</span>
                                        <span className="text-xs text-[var(--color-muted)]">{featuredArticle.category}</span>
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-serif text-white mb-4 group-hover:text-[var(--color-gold)] transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] text-xs font-bold">
                                                SS
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-medium">{featuredArticle.author}</p>
                                                <p className="text-[var(--color-subtle)] text-xs">{featuredArticle.authorRole}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                                            <span>{featuredArticle.date}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {featuredArticle.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="aspect-video bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-accent)]/10 rounded-xl flex items-center justify-center">
                                        <BookOpen className="w-16 h-16 text-[var(--color-gold)]/50" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </ScrollReveal>
            </Section>

            {/* Search & Filters */}
            <Section>
                <div className="flex flex-col lg:flex-row gap-6 mb-10">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors"
                        />
                    </div>
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
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

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Articles Grid */}
                    <div className="lg:col-span-2">
                        <StaggerContainer className="grid md:grid-cols-2 gap-6">
                            {filteredArticles.map((article) => (
                                <StaggerItem key={article.id}>
                                    <Link to={`/blog/${article.id}`}>
                                        <Card className="p-6 h-full group hover:border-[var(--color-gold)]/30 transition-all cursor-pointer">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Tag className="w-3 h-3 text-[var(--color-accent)]" />
                                                <span className="text-xs text-[var(--color-muted)]">{article.category}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-muted)] mb-4 line-clamp-3">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <User className="w-3 h-3 text-[var(--color-subtle)]" />
                                                    <span className="text-xs text-[var(--color-subtle)]">{article.author}</span>
                                                </div>
                                                <span className="text-xs text-[var(--color-subtle)] flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {article.readTime}
                                                </span>
                                            </div>
                                        </Card>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {filteredArticles.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-[var(--color-muted)]">No articles found matching your criteria.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Newsletter */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                            <p className="text-sm text-[var(--color-muted)] mb-4">
                                Get the latest insights on enterprise AI delivered to your inbox.
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white text-sm placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                />
                                <Button className="w-full" size="sm">
                                    Subscribe
                                </Button>
                            </form>
                        </Card>

                        {/* Trending Topics */}
                        <Card className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp className="w-4 h-4 text-[var(--color-gold)]" />
                                <h3 className="text-lg font-semibold text-white">Trending Topics</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {trendingTopics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-3 py-1 text-xs bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-[var(--color-muted)] hover:text-white hover:border-[var(--color-gold)]/30 transition-all cursor-pointer"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </Card>

                        {/* CTA */}
                        <Card className="p-6 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent">
                            <h3 className="text-lg font-semibold text-white mb-3">Ready to Transform?</h3>
                            <p className="text-sm text-[var(--color-muted)] mb-4">
                                See how these insights apply to your organization.
                            </p>
                            <Button to="/assessment" variant="secondary" size="sm" className="w-full" icon={<ChevronRight className="w-4 h-4" />}>
                                Start Assessment
                            </Button>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    )
}
