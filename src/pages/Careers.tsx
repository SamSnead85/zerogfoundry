import { Briefcase, MapPin, ArrowRight, Clock, Users, Zap, Heart, Building2, CheckCircle } from 'lucide-react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const openings = [
    {
        title: 'Senior AI/ML Engineer',
        location: 'Remote / New York',
        type: 'Full-time',
        department: 'Engineering',
        description: 'Build production-grade AI systems for Fortune 500 clients.',
        requirements: [
            '5+ years ML engineering experience',
            'Production MLOps deployment experience',
            'Strong Python and cloud platform skills',
            'Experience with LLMs and RLHF preferred',
        ],
    },
    {
        title: 'AI Strategy Consultant',
        location: 'Remote / Chicago',
        type: 'Full-time',
        department: 'Consulting',
        description: 'Lead AI transformation engagements for enterprise clients.',
        requirements: [
            '7+ years consulting experience (Big 4/MBB preferred)',
            'Deep understanding of AI/ML technologies',
            'Strong executive communication skills',
            'Healthcare or Financial Services expertise',
        ],
    },
    {
        title: 'Healthcare AI Specialist',
        location: 'Remote',
        type: 'Full-time',
        department: 'Solutions',
        description: 'Specialize in AI solutions for payers and providers.',
        requirements: [
            '5+ years healthcare industry experience',
            'Understanding of HIPAA and regulatory requirements',
            'Experience with claims or clinical workflows',
            'Technical aptitude for AI/ML concepts',
        ],
    },
]

const benefits = [
    { icon: Zap, title: 'Cutting-Edge Work', desc: 'Work on production AI for the world\'s largest enterprises' },
    { icon: Users, title: 'Expert Team', desc: 'Collaborate with industry veterans and AI pioneers' },
    { icon: Heart, title: 'Comprehensive Benefits', desc: 'Health, dental, vision, and generous PTO' },
    { icon: Building2, title: 'Remote-First', desc: 'Work from anywhere with flexible hours' },
]

const culture = [
    'Learning & development budget',
    'Conference attendance',
    'Publishing and speaking opportunities',
    'Equity participation',
    'Performance bonuses',
    'Parental leave',
]

export default function Careers() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-16 pb-12 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Join Us
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Build the Future of
                                <span className="italic text-[var(--color-champagne)]"> Enterprise AI</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                Join a team of AI practitioners and enterprise transformation
                                experts making production-grade AI a reality.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Benefits */}
            <Section>
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit) => (
                        <Card key={benefit.title} className="p-6 text-center">
                            <benefit.icon className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                            <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-sm text-[var(--color-muted)]">{benefit.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Open Positions */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Open Positions"
                        title="Current Opportunities"
                        subtitle="Join us in transforming how enterprises deploy AI."
                    />
                </ScrollReveal>

                <div className="space-y-6">
                    {openings.map((job) => (
                        <Card key={job.title} className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" />
                                            {job.department}
                                        </span>
                                    </div>
                                </div>
                                <Button to="/contact" variant="secondary" className="flex-shrink-0">
                                    Apply Now
                                </Button>
                            </div>
                            <p className="text-[var(--color-muted)] mb-4">{job.description}</p>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {job.requirements.map((req) => (
                                    <li key={req} className="flex items-start gap-2 text-sm text-[var(--color-subtle)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Culture */}
            <Section>
                <ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="badge mb-4">Culture & Perks</p>
                            <h2 className="text-3xl font-serif text-white mb-6">
                                More Than Just a Job
                            </h2>
                            <p className="text-[var(--color-muted)] mb-8">
                                We invest in our team's growth and well-being.
                                Whether it's publishing research, speaking at conferences,
                                or building the next generation of AI tools, we support your aspirations.
                            </p>
                            <ul className="grid grid-cols-2 gap-3">
                                {culture.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card className="p-8 text-center">
                            <h3 className="text-xl font-semibold text-white mb-4">Don't See Your Role?</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                We're always looking for exceptional talent.
                                Send us your resume and tell us how you can contribute.
                            </p>
                            <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                Get in Touch
                            </Button>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
