import { ArrowRight, Download, Mail, Newspaper, ExternalLink, Image, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Card,
    Button,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const mediaFeatures = [
    {
        publication: 'TechCrunch',
        title: 'Zero G Foundry Tackles AI\'s Last Mile Problem',
        date: 'January 2026',
        type: 'Feature',
        url: '#',
    },
    {
        publication: 'Forbes',
        title: 'The Consultancy Guaranteeing AI Actually Works',
        date: 'December 2025',
        type: 'Profile',
        url: '#',
    },
    {
        publication: 'Harvard Business Review',
        title: 'Why 85% of AI Projects Fail—And How to Beat the Odds',
        date: 'November 2025',
        type: 'Op-Ed',
        url: '#',
    },
    {
        publication: 'Wall Street Journal',
        title: 'Enterprise AI: From Hype to Production Reality',
        date: 'October 2025',
        type: 'Quote',
        url: '#',
    },
]

const pressReleases = [
    {
        title: 'Zero G Foundry Launches AI Readiness Assessment for Healthcare Enterprises',
        date: 'January 8, 2026',
        summary: 'New diagnostic tool helps healthcare organizations identify high-impact AI opportunities with guaranteed ROI frameworks.',
    },
    {
        title: 'Zero G Foundry Expands NVIDIA Partnership for Enterprise AI Deployments',
        date: 'December 15, 2025',
        summary: 'Strategic alliance brings DGX-powered AI infrastructure to Fortune 500 healthcare and financial services clients.',
    },
    {
        title: 'Zero G Foundry Achieves SOC 2 Type II Certification',
        date: 'November 20, 2025',
        summary: 'Certification validates enterprise-grade security controls for sensitive AI implementations.',
    },
]

const pressKitAssets = [
    {
        icon: Image,
        title: 'Logo Package',
        description: 'Primary, secondary, and monochrome logos in SVG and PNG formats',
        format: 'ZIP, 2.4 MB',
    },
    {
        icon: FileText,
        title: 'Company Fact Sheet',
        description: 'Key company facts, statistics, and executive bios',
        format: 'PDF, 1.2 MB',
    },
    {
        icon: Image,
        title: 'Executive Headshots',
        description: 'High-resolution photos of leadership team',
        format: 'ZIP, 8.5 MB',
    },
    {
        icon: FileText,
        title: 'Brand Guidelines',
        description: 'Official brand usage guidelines and assets',
        format: 'PDF, 4.8 MB',
    },
]

const featuredInLogos = [
    'TechCrunch',
    'Forbes',
    'Wall Street Journal',
    'Harvard Business Review',
    'Bloomberg',
    'VentureBeat',
]

export default function Press() {
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
                        <p className="text-eyebrow mb-6">Press & Media</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">Newsroom</h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            The latest news, press releases, and media resources from Zero G Foundry.
                            For press inquiries, contact our media team.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Featured In */}
            <Section background="alt" className="py-12">
                <div className="text-center mb-8">
                    <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-subtle)] font-medium">
                        Featured In
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {featuredInLogos.map((name) => (
                        <div
                            key={name}
                            className="text-[var(--color-muted)] hover:text-white transition-colors font-medium tracking-wide"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Media Coverage */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Media Coverage"
                        title="In the News"
                        subtitle="Recent coverage and features from leading publications."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
                    {mediaFeatures.map((feature) => (
                        <StaggerItem key={feature.title}>
                            <Card className="p-6 h-full group hover:border-[var(--color-gold)]/30 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-sm font-bold text-[var(--color-gold)]">{feature.publication}</span>
                                    <span className="text-xs text-[var(--color-subtle)]">•</span>
                                    <span className="text-xs text-[var(--color-subtle)]">{feature.type}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                                    {feature.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--color-muted)]">{feature.date}</span>
                                    <a
                                        href={feature.url}
                                        className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Read <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Press Releases */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Press Releases"
                        title="Official Announcements"
                        subtitle="The latest news and updates from Zero G Foundry."
                    />
                </ScrollReveal>

                <div className="max-w-4xl mx-auto space-y-6">
                    {pressReleases.map((release, index) => (
                        <ScrollReveal key={release.title} delay={index * 0.1}>
                            <Card className="p-6 hover:border-[var(--color-border-strong)] transition-all">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Newspaper className="w-4 h-4 text-[var(--color-gold)]" />
                                            <span className="text-xs text-[var(--color-muted)]">{release.date}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{release.title}</h3>
                                        <p className="text-[var(--color-muted)] text-sm">{release.summary}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-[var(--color-muted)] flex-shrink-0 mt-2" />
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Press Kit */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Press Kit"
                        title="Media Resources"
                        subtitle="Download official assets for media coverage and publications."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {pressKitAssets.map((asset, index) => (
                        <ScrollReveal key={asset.title} delay={index * 0.1}>
                            <Card className="p-6 text-center group cursor-pointer hover:border-[var(--color-gold)]/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                                    <asset.icon className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <h4 className="text-white font-medium mb-2">{asset.title}</h4>
                                <p className="text-sm text-[var(--color-muted)] mb-3">{asset.description}</p>
                                <span className="text-xs text-[var(--color-subtle)]">{asset.format}</span>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="secondary" icon={<Download className="w-5 h-5" />}>
                        Download Complete Press Kit
                    </Button>
                </div>
            </Section>

            {/* Media Contact */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-[var(--color-gold)]" />
                        </div>
                        <h2 className="text-3xl font-serif text-[var(--color-foreground)] mb-4">Media Inquiries</h2>
                        <p className="text-lg text-[var(--color-muted)] mb-8">
                            For press inquiries, interview requests, or additional information,
                            please contact our communications team.
                        </p>
                        <Card className="p-8">
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                <div>
                                    <h4 className="text-white font-medium mb-2">Media Contact</h4>
                                    <p className="text-[var(--color-muted)] text-sm mb-4">
                                        For interview requests, quotes, and media inquiries
                                    </p>
                                    <a
                                        href="mailto:press@zerogfoundry.com"
                                        className="text-[var(--color-gold)] font-medium hover:underline"
                                    >
                                        press@zerogfoundry.com
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">Speaking Requests</h4>
                                    <p className="text-[var(--color-muted)] text-sm mb-4">
                                        For conference speaking and thought leadership
                                    </p>
                                    <a
                                        href="mailto:speaking@zerogfoundry.com"
                                        className="text-[var(--color-gold)] font-medium hover:underline"
                                    >
                                        speaking@zerogfoundry.com
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
