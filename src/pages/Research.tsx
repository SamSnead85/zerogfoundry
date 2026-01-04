import { FileText, Download, Clock, Users, TrendingUp, Building2, Heart, DollarSign, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const researchReports = [
    {
        id: 'ai-adoption-2026',
        title: 'State of Enterprise AI Adoption 2026',
        subtitle: 'Comprehensive analysis of AI implementation across Fortune 500',
        category: 'Industry Benchmark',
        icon: TrendingUp,
        pages: 42,
        readTime: '25 min',
        downloads: '2.4k',
        featured: true,
        topics: ['AI Strategy', 'Digital Transformation', 'ROI Analysis'],
        excerpt: 'Our annual report analyzing AI adoption patterns, investment trends, and outcome metrics across 500+ enterprise organizations.',
    },
    {
        id: 'healthcare-ai-playbook',
        title: 'The Healthcare AI Implementation Playbook',
        subtitle: 'From pilot to production in regulated environments',
        category: 'Implementation Guide',
        icon: Heart,
        pages: 38,
        readTime: '22 min',
        downloads: '1.8k',
        featured: true,
        topics: ['Healthcare', 'Compliance', 'HIPAA'],
        excerpt: 'Step-by-step methodology for deploying AI in healthcare settings while maintaining regulatory compliance and clinical trust.',
    },
    {
        id: 'finserv-ai-risk',
        title: 'AI Risk Management in Financial Services',
        subtitle: 'Balancing innovation with regulatory requirements',
        category: 'Compliance Framework',
        icon: DollarSign,
        pages: 35,
        readTime: '20 min',
        downloads: '1.5k',
        featured: false,
        topics: ['Financial Services', 'Risk Management', 'Regulatory'],
        excerpt: 'Framework for implementing AI in financial services while meeting OCC, CFPB, and SEC requirements.',
    },
    {
        id: 'rlhf-enterprise',
        title: 'RLHF for Enterprise: The Last Mile Problem',
        subtitle: 'Why human feedback is critical for production AI',
        category: 'Technical Whitepaper',
        icon: Users,
        pages: 28,
        readTime: '15 min',
        downloads: '3.2k',
        featured: true,
        topics: ['RLHF', 'Machine Learning', 'Production AI'],
        excerpt: 'Deep dive into Reinforcement Learning from Human Feedback and its critical role in bridging the demo-to-production gap.',
    },
    {
        id: 'ai-governance',
        title: 'Enterprise AI Governance Framework',
        subtitle: 'Building responsible AI at scale',
        category: 'Governance',
        icon: Building2,
        pages: 32,
        readTime: '18 min',
        downloads: '1.2k',
        featured: false,
        topics: ['Governance', 'Ethics', 'Compliance'],
        excerpt: 'Comprehensive framework for establishing AI governance, ethics boards, and responsible AI practices.',
    },
    {
        id: 'cost-optimization',
        title: 'AI Infrastructure Cost Optimization',
        subtitle: 'Maximizing ROI on AI investments',
        category: 'Technical Guide',
        icon: TrendingUp,
        pages: 24,
        readTime: '12 min',
        downloads: '980',
        featured: false,
        topics: ['Infrastructure', 'Cost', 'Cloud'],
        excerpt: 'Strategies for optimizing AI infrastructure costs while maintaining performance and scalability.',
    },
]

const industryBenchmarks = [
    { label: 'Avg AI ROI', value: '340%', description: 'Return on AI investment (3yr)' },
    { label: 'Implementation Time', value: '8.2mo', description: 'Avg demo-to-production' },
    { label: 'Adoption Rate', value: '67%', description: 'Enterprise AI adoption 2026' },
    { label: 'Success Rate', value: '23%', description: 'Pilot-to-production success' },
]

export default function Research() {
    const featuredReports = researchReports.filter(r => r.featured)
    const otherReports = researchReports.filter(r => !r.featured)

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Research & Publications
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Enterprise AI
                                <span className="italic text-[var(--color-champagne)]"> Intelligence</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                Proprietary research, industry benchmarks, and implementation frameworks
                                from our work with leading enterprise organizations.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Industry Benchmarks */}
            <Section>
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="badge mb-4">2026 Industry Data</span>
                        <h2 className="text-2xl md:text-3xl font-serif text-[var(--color-foreground)]">
                            Enterprise AI Benchmarks
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {industryBenchmarks.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 text-center">
                                <p className="text-3xl md:text-4xl font-bold text-[var(--color-gold)] mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-white font-medium mb-1">{stat.label}</p>
                                <p className="text-xs text-[var(--color-subtle)]">{stat.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Featured Reports */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Featured Research"
                        title="Latest Publications"
                        subtitle="Our most impactful research and thought leadership."
                    />
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {featuredReports.map((report) => (
                        <ScrollReveal key={report.id}>
                            <Card className="h-full flex flex-col p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                                        <report.icon className="w-6 h-6 text-[var(--color-gold)]" />
                                    </div>
                                    <span className="badge">{report.category}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {report.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] mb-4">
                                    {report.subtitle}
                                </p>

                                <p className="text-[var(--color-subtle)] text-sm mb-6 flex-grow">
                                    {report.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {report.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-2 py-1 text-xs bg-[var(--color-card-elevated)] text-[var(--color-muted)] rounded"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-xs text-[var(--color-subtle)] mb-4">
                                    <span className="flex items-center gap-1">
                                        <FileText className="w-3 h-3" /> {report.pages} pages
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {report.readTime}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Download className="w-3 h-3" /> {report.downloads}
                                    </span>
                                </div>

                                <Button variant="secondary" className="w-full">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Report
                                </Button>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* All Reports */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Research Library"
                        title="All Publications"
                        subtitle="Browse our complete collection of research and guides."
                    />
                </ScrollReveal>

                <div className="space-y-6">
                    {otherReports.map((report) => (
                        <ScrollReveal key={report.id}>
                            <Card className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--color-card-elevated)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                                        <report.icon className="w-7 h-7 text-[var(--color-muted)]" />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-semibold text-white">
                                                {report.title}
                                            </h3>
                                            <span className="badge text-xs">{report.category}</span>
                                        </div>
                                        <p className="text-sm text-[var(--color-muted)] mb-3">
                                            {report.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-[var(--color-subtle)]">
                                            <span>{report.pages} pages</span>
                                            <span>{report.readTime} read</span>
                                            <span>{report.downloads} downloads</span>
                                        </div>
                                    </div>

                                    <Button variant="tertiary" size="sm" className="flex-shrink-0">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-12 text-center">
                        <BookOpen className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Request Custom Research
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                            Need industry-specific analysis or proprietary research for your organization?
                            Our research team can develop custom insights tailored to your strategic needs.
                        </p>
                        <Button to="/contact" icon={<FileText className="w-4 h-4" />}>
                            Discuss Research Needs
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
