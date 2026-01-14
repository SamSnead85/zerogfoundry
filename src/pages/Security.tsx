import { Shield, Lock, FileCheck, CheckCircle, ArrowRight, Award, Building2, Globe } from 'lucide-react'
import {
    Section,
    SectionHeader,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const certifications = [
    { name: 'SOC 2 Type II', icon: Shield, desc: 'Annual security audits by independent assessors' },
    { name: 'ISO 27001', icon: Lock, desc: 'Information security management certification' },
    { name: 'HIPAA', icon: FileCheck, desc: 'Healthcare data protection compliance' },
    { name: 'HITRUST', icon: Award, desc: 'Comprehensive security framework certification' },
]

const securityPractices = [
    {
        title: 'Data Protection',
        items: [
            'AES-256 encryption at rest and in transit',
            'Data residency controls for regulatory compliance',
            'Automatic data retention and deletion policies',
            'Customer-managed encryption keys available',
        ],
    },
    {
        title: 'Access Control',
        items: [
            'Role-based access control (RBAC)',
            'Multi-factor authentication required',
            'Single sign-on (SSO) integration',
            'Audit logging for all access events',
        ],
    },
    {
        title: 'Infrastructure Security',
        items: [
            'Enterprise cloud infrastructure (AWS, Azure, GCP)',
            '99.9% uptime SLA with automatic failover',
            'DDoS protection and WAF',
            'Regular penetration testing',
        ],
    },
    {
        title: 'AI-Specific Security',
        items: [
            'Model isolation and containerization',
            'Input validation and output sanitization',
            'Adversarial attack detection',
            'Model versioning and rollback capabilities',
        ],
    },
]

const complianceFrameworks = [
    { name: 'GDPR', region: 'EU' },
    { name: 'CCPA', region: 'California' },
    { name: 'PIPEDA', region: 'Canada' },
    { name: 'SOX', region: 'Financial' },
    { name: 'GLBA', region: 'Financial' },
    { name: 'PCI DSS', region: 'Payments' },
]

export default function Security() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-16 pb-12 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Enterprise Security
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Trust & Compliance
                                <span className="italic text-[var(--color-champagne)]"> First</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                                Enterprise-grade security and compliance built into every layer
                                of our AI infrastructure and delivery methodology.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Certifications */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Certifications"
                        title="Industry-Recognized Standards"
                        subtitle="Our security practices are validated by leading certification bodies."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {certifications.map((cert) => (
                        <Card key={cert.name} className="p-6 text-center">
                            <cert.icon className="w-10 h-10 text-[var(--color-gold)] mx-auto mb-4" />
                            <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                            <p className="text-sm text-[var(--color-muted)]">{cert.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Security Practices */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Security Practices"
                        title="Comprehensive Protection"
                        subtitle="Multi-layered security approach for enterprise AI."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {securityPractices.map((practice) => (
                        <Card key={practice.title} className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">{practice.title}</h3>
                            <ul className="space-y-3">
                                {practice.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-[var(--color-muted)]">
                                        <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Compliance */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Compliance"
                        title="Regulatory Framework Support"
                        subtitle="Built to meet the requirements of regulated industries."
                    />
                </ScrollReveal>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {complianceFrameworks.map((framework) => (
                        <Card key={framework.name} className="px-6 py-4 flex items-center gap-3">
                            <Globe className="w-4 h-4 text-[var(--color-accent)]" />
                            <span className="text-white font-medium">{framework.name}</span>
                            <span className="text-xs text-[var(--color-subtle)]">{framework.region}</span>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-12 text-center">
                        <Building2 className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Security Review Request
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                            Request access to our security documentation, SOC 2 report,
                            or schedule a security review with our team.
                        </p>
                        <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                            Request Security Documentation
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
