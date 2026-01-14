import { Building2, TrendingUp, Users, CheckCircle, ArrowRight, Cpu, Target, BarChart3, Shield } from 'lucide-react'
import {
    Section,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const industries = [
    {
        id: 'healthcare',
        name: 'Healthcare & Insurance',
        icon: Building2,
        description: 'AI solutions for payers, providers, and life sciences organizations.',
        useCases: [
            'Claims processing automation',
            'Prior authorization AI',
            'Clinical documentation',
            'Member engagement',
            'Fraud detection',
        ],
        stats: [
            { metric: '95%', label: 'Claims automation achievable' },
            { metric: '48hr', label: 'Faster processing time' },
            { metric: '$3.8M', label: 'Average annual savings' },
        ],
        compliance: ['HIPAA', 'HITRUST', 'SOC 2 Type II'],
    },
    {
        id: 'finserv',
        name: 'Financial Services',
        icon: TrendingUp,
        description: 'AI implementation for banks, insurers, and investment firms.',
        useCases: [
            'Regulatory compliance',
            'Document processing',
            'Risk assessment',
            'Customer service AI',
            'Fraud prevention',
        ],
        stats: [
            { metric: '92%', label: 'Time reduction in reviews' },
            { metric: '99.7%', label: 'Accuracy on classifications' },
            { metric: '$5.2M', label: 'Annual compliance savings' },
        ],
        compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'PCI DSS'],
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: Cpu,
        description: 'AI-driven optimization for production and supply chain.',
        useCases: [
            'Predictive maintenance',
            'Quality control',
            'Supply chain optimization',
            'Demand forecasting',
            'Process automation',
        ],
        stats: [
            { metric: '35%', label: 'Reduction in downtime' },
            { metric: '28%', label: 'Quality improvement' },
            { metric: '22%', label: 'Cost reduction' },
        ],
        compliance: ['ISO 9001', 'ISO 27001'],
    },
]

const capabilities = [
    { icon: Target, title: 'Strategic Assessment', desc: 'Industry-specific AI opportunity analysis' },
    { icon: BarChart3, title: 'Data Readiness', desc: 'Evaluate data quality and infrastructure' },
    { icon: Shield, title: 'Compliance Focus', desc: 'Regulatory requirements built-in' },
    { icon: Users, title: 'Change Management', desc: 'Adoption and training strategies' },
]

export default function Industries() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-16 pb-12 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Industry Solutions
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Sector-Specific
                                <span className="italic text-[var(--color-champagne)]"> AI Expertise</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                Deep domain knowledge combined with production-grade AI implementation
                                across regulated industries.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Capabilities */}
            <Section>
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {capabilities.map((cap) => (
                        <Card key={cap.title} className="p-6 text-center">
                            <cap.icon className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                            <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
                            <p className="text-sm text-[var(--color-muted)]">{cap.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Industries */}
            {industries.map((industry, index) => (
                <Section key={industry.id} background={index % 2 === 0 ? 'alt' : 'default'}>
                    <ScrollReveal>
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                                        <industry.icon className="w-7 h-7 text-[var(--color-gold)]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif text-white">
                                        {industry.name}
                                    </h2>
                                </div>
                                <p className="text-lg text-[var(--color-muted)] mb-8">
                                    {industry.description}
                                </p>

                                <h3 className="text-white font-semibold mb-4">Key Use Cases</h3>
                                <ul className="space-y-3 mb-8">
                                    {industry.useCases.map((uc) => (
                                        <li key={uc} className="flex items-center gap-3 text-[var(--color-muted)]">
                                            <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                                            {uc}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {industry.compliance.map((cert) => (
                                        <span key={cert} className="badge">{cert}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <Card className="p-8">
                                    <h3 className="text-white font-semibold mb-6">Proven Results</h3>
                                    <div className="space-y-6">
                                        {industry.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <p className="text-3xl font-bold text-[var(--color-gold)]">{stat.metric}</p>
                                                <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                                        <Button to="/case-studies" variant="secondary" className="w-full">
                                            View Case Studies
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </ScrollReveal>
                </Section>
            ))}

            {/* CTA */}
            <Section>
                <ScrollReveal>
                    <Card className="p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Ready to Explore AI for Your Industry?
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                            Schedule a discovery call to discuss your specific use cases
                            and learn how we can help you achieve production-grade AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                                Schedule Discovery Call
                            </Button>
                            <Button to="/assessment" variant="secondary">
                                Take AI Assessment
                            </Button>
                        </div>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
