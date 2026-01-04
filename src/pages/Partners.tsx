import { Handshake, Building2, ArrowRight, CheckCircle, Award, Globe, Zap, Shield } from 'lucide-react'
import {
    Section,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const partnerTypes = [
    {
        type: 'Technology Partners',
        icon: Zap,
        description: 'Leading AI/ML and cloud platforms we integrate with.',
        partners: [
            { name: 'NVIDIA', tier: 'Elite Partner' },
            { name: 'Microsoft Azure', tier: 'Gold Partner' },
            { name: 'AWS', tier: 'Advanced Partner' },
            { name: 'Google Cloud', tier: 'Partner' },
            { name: 'Snowflake', tier: 'Select Partner' },
            { name: 'Databricks', tier: 'Partner' },
        ],
    },
    {
        type: 'System Integrators',
        icon: Building2,
        description: 'Global consulting firms we collaborate with.',
        partners: [
            { name: 'Accenture', tier: 'Alliance Partner' },
            { name: 'Deloitte', tier: 'Consulting Partner' },
            { name: 'Wipro', tier: 'Delivery Partner' },
            { name: 'Infosys', tier: 'Delivery Partner' },
        ],
    },
    {
        type: 'Research Institutions',
        icon: Award,
        description: 'Academic and research partnerships.',
        partners: [
            { name: 'Stanford HAI', tier: 'Research Partner' },
            { name: 'MIT AI Lab', tier: 'Research Partner' },
            { name: 'Berkeley AI Research', tier: 'Collaboration' },
        ],
    },
]

const benefits = [
    { icon: Globe, title: 'Market Access', desc: 'Access enterprise clients across industries' },
    { icon: Zap, title: 'Technical Expertise', desc: 'Deep AI/ML implementation capabilities' },
    { icon: Shield, title: 'Compliance Ready', desc: 'Pre-certified for regulated industries' },
    { icon: Award, title: 'Proven Methodology', desc: 'RLHF-based approach with results' },
]

const partnerProgram = [
    'Joint go-to-market opportunities',
    'Co-development of AI solutions',
    'Shared client success resources',
    'Partner certification program',
    'Marketing and event collaboration',
    'Technical enablement training',
]

export default function Partners() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Partner Ecosystem
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Strategic
                                <span className="italic text-[var(--color-champagne)]"> Partnerships</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                We collaborate with leading technology platforms, consulting firms,
                                and research institutions to deliver enterprise AI transformation.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Partner Benefits */}
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

            {/* Partner Categories */}
            {partnerTypes.map((category, index) => (
                <Section key={category.type} background={index % 2 === 0 ? 'alt' : 'default'}>
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                                <category.icon className="w-6 h-6 text-[var(--color-gold)]" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif text-white">{category.type}</h2>
                                <p className="text-[var(--color-muted)]">{category.description}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {category.partners.map((partner) => (
                                <Card key={partner.name} className="p-6 flex items-center justify-between">
                                    <span className="text-white font-medium">{partner.name}</span>
                                    <span className="badge text-xs">{partner.tier}</span>
                                </Card>
                            ))}
                        </div>
                    </ScrollReveal>
                </Section>
            ))}

            {/* Become a Partner */}
            <Section>
                <ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="badge mb-4">Partner Program</p>
                            <h2 className="text-3xl font-serif text-white mb-6">
                                Become a Partner
                            </h2>
                            <p className="text-[var(--color-muted)] mb-8">
                                Join our partner ecosystem to deliver production-grade AI
                                solutions to enterprise clients. We offer comprehensive
                                enablement and go-to-market support.
                            </p>
                            <ul className="grid grid-cols-2 gap-3 mb-8">
                                {partnerProgram.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card className="p-8 text-center">
                            <Handshake className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                            <h3 className="text-xl font-semibold text-white mb-4">Interested in Partnering?</h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                Let's discuss how we can work together to deliver
                                AI transformation for enterprise clients.
                            </p>
                            <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                Contact Partnerships
                            </Button>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
