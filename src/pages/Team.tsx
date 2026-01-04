import { Users, ArrowRight } from 'lucide-react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const executives = [
    {
        name: 'Sam Sweilem',
        role: 'Founder & CEO',
        bio: 'Former VP at Accenture leading AI transformation practice. 20+ years in enterprise technology.',
        background: ['Accenture', 'IBM', 'Stanford MBA'],
        initials: 'SS',
        color: 'var(--color-gold)',
    },
    {
        name: 'Dr. Maya Krishnan',
        role: 'Chief Technology Officer',
        bio: 'Former Google AI research lead. PhD in Machine Learning from Stanford. Published 50+ papers.',
        background: ['Google AI', 'Stanford PhD', 'MIT PostDoc'],
        initials: 'MK',
        color: 'var(--color-accent)',
    },
    {
        name: 'James Richardson',
        role: 'Chief Strategy Officer',
        bio: 'Former McKinsey Partner specializing in digital transformation. Led $500M+ in AI programs.',
        background: ['McKinsey', 'BCG', 'Harvard MBA'],
        initials: 'JR',
        color: 'var(--color-success)',
    },
]

const advisors = [
    { name: 'Dr. Andrew Chen', title: 'AI Ethics Board Chair', org: 'MIT AI Lab', initials: 'AC' },
    { name: 'Patricia Williams', title: 'Healthcare Advisor', org: 'Ex-UnitedHealth CIO', initials: 'PW' },
    { name: 'Michael Torres', title: 'FinServ Advisor', org: 'Ex-JPMorgan MD', initials: 'MT' },
    { name: 'Jennifer Okonkwo', title: 'Enterprise Advisor', org: 'Fortune 50 CTO', initials: 'JO' },
]

const values = [
    { title: 'Production First', desc: 'We measure success by production deployment, not POC completion.' },
    { title: 'Domain Expertise', desc: 'Deep industry knowledge is essential for AI that works.' },
    { title: 'Performance Guarantees', desc: 'We stand behind our work with meaningful commitments.' },
    { title: 'Transparent Partnership', desc: 'Clear communication and honest assessment of progress.' },
]

export default function Team() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Our Team
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Enterprise AI
                                <span className="italic text-[var(--color-champagne)]"> Leadership</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                A team of industry veterans from the world's leading technology
                                and consulting firms, dedicated to enterprise AI transformation.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Executive Team */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Leadership"
                        title="Executive Team"
                        subtitle="Decades of combined experience in AI and enterprise transformation."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {executives.map((exec) => (
                        <Card key={exec.name} className="p-8 text-center">
                            <div
                                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold"
                                style={{ backgroundColor: `${exec.color}20`, color: exec.color }}
                            >
                                {exec.initials}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-1">{exec.name}</h3>
                            <p className="text-[var(--color-champagne)] text-sm mb-4">{exec.role}</p>
                            <p className="text-[var(--color-muted)] text-sm mb-6">{exec.bio}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {exec.background.map((bg) => (
                                    <span key={bg} className="badge text-xs">{bg}</span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Advisory Board */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Advisors"
                        title="Advisory Board"
                        subtitle="Industry luminaries guiding our strategic direction."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-6">
                    {advisors.map((advisor) => (
                        <Card key={advisor.name} className="p-6 text-center">
                            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-bold">
                                {advisor.initials}
                            </div>
                            <h3 className="text-white font-semibold mb-1">{advisor.name}</h3>
                            <p className="text-[var(--color-champagne)] text-xs mb-1">{advisor.title}</p>
                            <p className="text-[var(--color-subtle)] text-xs">{advisor.org}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Values */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Our Values"
                        title="What We Stand For"
                        subtitle="Principles that guide every engagement."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-6">
                    {values.map((value) => (
                        <Card key={value.title} className="p-6">
                            <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                            <p className="text-sm text-[var(--color-muted)]">{value.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-12 text-center">
                        <Users className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Want to Join Our Team?
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                            We're always looking for exceptional AI practitioners
                            and enterprise transformation experts.
                        </p>
                        <Button to="/careers" icon={<ArrowRight className="w-4 h-4" />}>
                            View Open Positions
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
