import { ArrowRight, Calendar, Clock, Users, Play, ExternalLink, CheckCircle } from 'lucide-react'
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

const upcomingWebinars = [
    {
        id: 'production-ai-2026',
        title: 'From Demo to Production: The 2026 Enterprise AI Playbook',
        description: 'Learn the methodology behind consistently achieving 95%+ production accuracy. Real case studies, practical frameworks, and lessons learned.',
        date: 'January 25, 2026',
        time: '2:00 PM EST',
        duration: '60 min',
        speakers: [
            { name: 'Sam Sweilem', role: 'Founder & CEO', initials: 'SS' },
            { name: 'Dr. Maya Krishnan', role: 'CTO', initials: 'MK' },
        ],
        topics: ['RLHF Implementation', 'Performance Guarantees', 'Enterprise Deployment'],
        registrationOpen: true,
    },
    {
        id: 'healthcare-ai-summit',
        title: 'Healthcare AI in 2026: What\'s Working and What\'s Not',
        description: 'A candid discussion on the state of AI in healthcare payers and providers. Which use cases are delivering ROI, and which are still stuck in pilot mode.',
        date: 'February 8, 2026',
        time: '1:00 PM EST',
        duration: '45 min',
        speakers: [
            { name: 'Sam Sweilem', role: 'Founder & CEO', initials: 'SS' },
        ],
        topics: ['Claims Automation', 'Prior Authorization', 'Provider Engagement'],
        registrationOpen: true,
    },
]

const onDemandWebinars = [
    {
        id: 'rlhf-enterprise',
        title: 'RLHF for Enterprise: A Practitioner\'s Masterclass',
        description: 'Deep technical dive into implementing human-in-the-loop reinforcement learning for enterprise applications.',
        duration: '75 min',
        views: '2.4K',
        date: 'December 2025',
        speakers: [{ name: 'Dr. Maya Krishnan', initials: 'MK' }],
    },
    {
        id: 'ai-governance',
        title: 'Building AI Governance That Enables Innovation',
        description: 'How to create oversight frameworks that manage risk without killing velocity.',
        duration: '45 min',
        views: '1.8K',
        date: 'November 2025',
        speakers: [{ name: 'James Richardson', initials: 'JR' }],
    },
    {
        id: 'financial-services-ai',
        title: 'Document Intelligence in Financial Services',
        description: 'Case study walkthrough of automating regulatory compliance at a top-20 global bank.',
        duration: '60 min',
        views: '3.1K',
        date: 'October 2025',
        speakers: [{ name: 'Sam Sweilem', initials: 'SS' }],
    },
    {
        id: 'ai-roi-framework',
        title: 'Quantifying AI ROI: A CFO\'s Framework',
        description: 'How to build business cases that get funded and measure outcomes that matter.',
        duration: '50 min',
        views: '2.9K',
        date: 'September 2025',
        speakers: [{ name: 'James Richardson', initials: 'JR' }],
    },
]

export default function Webinars() {
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
                        <p className="text-eyebrow mb-6">Events</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Webinars & Events
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Live sessions and on-demand content from our team of AI practitioners.
                            Deep dives into strategy, technology, and real-world implementation.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Upcoming Webinars */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Upcoming"
                        title="Live Webinars"
                        subtitle="Register for our upcoming live sessions with Q&A."
                    />
                </ScrollReveal>

                <div className="space-y-8">
                    {upcomingWebinars.map((webinar, index) => (
                        <ScrollReveal key={webinar.id} delay={index * 0.1}>
                            <Card className="p-8 lg:p-10">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="badge badge-gold">Live</span>
                                            <span className="text-xs text-[var(--color-muted)]">{webinar.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4">{webinar.title}</h3>
                                        <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                                            {webinar.description}
                                        </p>

                                        {/* Topics */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {webinar.topics.map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="px-3 py-1 text-xs bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-[var(--color-muted)]"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Speakers */}
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-[var(--color-subtle)]">Speakers:</span>
                                            <div className="flex -space-x-2">
                                                {webinar.speakers.map((speaker) => (
                                                    <div
                                                        key={speaker.initials}
                                                        className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 border-2 border-[var(--color-background)] flex items-center justify-center"
                                                        title={`${speaker.name}, ${speaker.role}`}
                                                    >
                                                        <span className="text-xs font-bold text-[var(--color-gold)]">{speaker.initials}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-sm text-[var(--color-muted)]">
                                                {webinar.speakers.map(s => s.name).join(' & ')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between">
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                                <Calendar className="w-4 h-4 text-[var(--color-gold)]" />
                                                <span>{webinar.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                                <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                                                <span>{webinar.time} • {webinar.duration}</span>
                                            </div>
                                        </div>
                                        <Button className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                                            Register Now
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* On-Demand Library */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="On-Demand"
                        title="Webinar Library"
                        subtitle="Watch past sessions at your convenience."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {onDemandWebinars.map((webinar) => (
                        <StaggerItem key={webinar.id}>
                            <Card className="p-6 group hover:border-[var(--color-gold)]/30 transition-all cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-[var(--color-card-elevated)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-gold)]/10 transition-colors">
                                        <Play className="w-6 h-6 text-[var(--color-muted)] group-hover:text-[var(--color-gold)] transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs text-[var(--color-subtle)]">{webinar.date}</span>
                                            <span className="text-xs text-[var(--color-subtle)]">•</span>
                                            <span className="text-xs text-[var(--color-subtle)]">{webinar.duration}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                                            {webinar.title}
                                        </h4>
                                        <p className="text-sm text-[var(--color-muted)] mb-3 line-clamp-2">
                                            {webinar.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {webinar.speakers.map((speaker) => (
                                                    <div
                                                        key={speaker.initials}
                                                        className="w-6 h-6 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center"
                                                    >
                                                        <span className="text-xs font-bold text-[var(--color-gold)]">{speaker.initials}</span>
                                                    </div>
                                                ))}
                                                <span className="text-xs text-[var(--color-subtle)]">{webinar.speakers[0].name}</span>
                                            </div>
                                            <span className="text-xs text-[var(--color-subtle)] flex items-center gap-1">
                                                <Users className="w-3 h-3" />
                                                {webinar.views} views
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Speaking Engagements */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge mb-4">Speaking</span>
                        <h2 className="text-3xl font-serif text-[var(--color-foreground)] mb-6">
                            Invite Our Experts to Speak
                        </h2>
                        <p className="text-lg text-[var(--color-muted)] mb-10">
                            Our leadership team regularly presents at industry conferences, executive
                            offsites, and corporate events on AI transformation, governance, and implementation.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                'Industry Conferences',
                                'Executive Retreats',
                                'Corporate Events',
                            ].map((type) => (
                                <Card key={type} className="p-4 text-center">
                                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mx-auto mb-2" />
                                    <span className="text-sm text-[var(--color-muted)]">{type}</span>
                                </Card>
                            ))}
                        </div>
                        <Button to="/contact" variant="secondary" icon={<ExternalLink className="w-4 h-4" />}>
                            Request a Speaker
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
