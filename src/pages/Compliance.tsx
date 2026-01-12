import { Shield, CheckCircle, FileText, Lock, Building2, Heart, ExternalLink, Download } from 'lucide-react'
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

const certifications = [
    {
        name: 'SOC 2 Type II',
        category: 'Security',
        status: 'Certified',
        description: 'Annual audit verifying security, availability, processing integrity, confidentiality, and privacy controls.',
        lastAudit: 'November 2025',
        icon: Shield,
    },
    {
        name: 'ISO 27001',
        category: 'Security',
        status: 'Certified',
        description: 'International standard for information security management systems (ISMS).',
        lastAudit: 'October 2025',
        icon: Lock,
    },
    {
        name: 'HIPAA',
        category: 'Healthcare',
        status: 'Compliant',
        description: 'Full compliance with Health Insurance Portability and Accountability Act requirements for PHI handling.',
        lastAudit: 'December 2025',
        icon: Heart,
    },
    {
        name: 'SOX Compliance',
        category: 'Financial',
        status: 'Compliant',
        description: 'Controls and processes aligned with Sarbanes-Oxley requirements for financial services clients.',
        lastAudit: 'November 2025',
        icon: Building2,
    },
]

const regulatoryFrameworks = [
    {
        region: 'United States',
        frameworks: [
            { name: 'HIPAA', description: 'Healthcare privacy and security' },
            { name: 'GLBA', description: 'Financial services data protection' },
            { name: 'CCPA/CPRA', description: 'California consumer privacy' },
            { name: 'State Privacy Laws', description: 'Multi-state compliance' },
        ],
    },
    {
        region: 'European Union',
        frameworks: [
            { name: 'GDPR', description: 'General Data Protection Regulation' },
            { name: 'AI Act', description: 'EU AI regulation compliance' },
            { name: 'Digital Services Act', description: 'Platform requirements' },
        ],
    },
    {
        region: 'Industry-Specific',
        frameworks: [
            { name: 'PCI DSS', description: 'Payment card data security' },
            { name: 'NIST AI RMF', description: 'AI risk management framework' },
            { name: 'ISO 42001', description: 'AI management systems' },
        ],
    },
]

const trustPrinciples = [
    {
        title: 'Data Minimization',
        description: 'We only access and process the minimum data necessary to deliver our services.',
    },
    {
        title: 'Purpose Limitation',
        description: 'Client data is used exclusively for the contracted engagement purposes.',
    },
    {
        title: 'Security by Design',
        description: 'Security controls are built into every phase of our delivery methodology.',
    },
    {
        title: 'Transparency',
        description: 'Clear documentation of data flows, processing activities, and AI model decisions.',
    },
    {
        title: 'Client Control',
        description: 'Clients maintain ownership and control of their data throughout and after engagements.',
    },
    {
        title: 'Continuous Improvement',
        description: 'Regular security assessments and updates to address emerging threats.',
    },
]

const downloadableResources = [
    { name: 'SOC 2 Type II Report Executive Summary', format: 'PDF' },
    { name: 'Security Questionnaire (SIG Lite)', format: 'XLSX' },
    { name: 'Data Processing Agreement (DPA) Template', format: 'DOCX' },
    { name: 'Business Associate Agreement (BAA) Template', format: 'DOCX' },
    { name: 'GDPR Data Protection Impact Assessment', format: 'PDF' },
]

export default function Compliance() {
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
                        <p className="text-eyebrow mb-6">Trust & Compliance</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Enterprise-Grade Compliance
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Zero G Foundry maintains the highest standards of security and regulatory
                            compliance to serve enterprise clients in healthcare and financial services.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Certifications */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Certifications"
                        title="Industry Certifications"
                        subtitle="Third-party validated controls and compliance frameworks."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <StaggerItem key={cert.name}>
                            <Card className="p-6 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center flex-shrink-0">
                                        <cert.icon className="w-6 h-6 text-[var(--color-success)]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                                            <span className="px-2 py-1 text-xs bg-[var(--color-success)]/20 text-[var(--color-success)] rounded-full font-medium">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[var(--color-muted)] mb-3">{cert.description}</p>
                                        <div className="flex items-center justify-between text-xs text-[var(--color-subtle)]">
                                            <span>{cert.category}</span>
                                            <span>Last audit: {cert.lastAudit}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Regulatory Frameworks */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Regulatory Coverage"
                        title="Compliance Frameworks"
                        subtitle="Deep expertise in regulated industry requirements."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {regulatoryFrameworks.map((region, index) => (
                        <ScrollReveal key={region.region} delay={index * 0.1}>
                            <Card className="p-6 h-full">
                                <h3 className="text-lg font-semibold text-white mb-4 pb-4 border-b border-[var(--color-border)]">
                                    {region.region}
                                </h3>
                                <ul className="space-y-4">
                                    {region.frameworks.map((framework) => (
                                        <li key={framework.name} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-[var(--color-success)] mt-1 flex-shrink-0" />
                                            <div>
                                                <span className="text-white font-medium text-sm">{framework.name}</span>
                                                <p className="text-xs text-[var(--color-muted)]">{framework.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Trust Principles */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Philosophy"
                        title="Our Trust Principles"
                        subtitle="The foundation of how we handle client data and deliver services."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trustPrinciples.map((principle, index) => (
                        <ScrollReveal key={principle.title} delay={index * 0.05}>
                            <Card className="p-6 h-full">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-4 h-4 text-[var(--color-gold)]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-2">{principle.title}</h4>
                                        <p className="text-sm text-[var(--color-muted)]">{principle.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Downloadable Resources */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Documentation"
                        title="Compliance Resources"
                        subtitle="Request access to our compliance documentation."
                    />
                </ScrollReveal>

                <div className="max-w-3xl mx-auto">
                    <Card className="p-8">
                        <ul className="space-y-4">
                            {downloadableResources.map((resource) => (
                                <li
                                    key={resource.name}
                                    className="flex items-center justify-between p-4 bg-[var(--color-background)]/50 rounded-xl hover:bg-[var(--color-background)] transition-colors cursor-pointer group"
                                >
                                    <div className="flex items-center gap-4">
                                        <FileText className="w-5 h-5 text-[var(--color-gold)]" />
                                        <div>
                                            <span className="text-white font-medium group-hover:text-[var(--color-gold)] transition-colors">
                                                {resource.name}
                                            </span>
                                            <span className="text-xs text-[var(--color-subtle)] ml-2">{resource.format}</span>
                                        </div>
                                    </div>
                                    <Download className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-gold)] transition-colors" />
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-[var(--color-border)] text-center">
                            <p className="text-sm text-[var(--color-muted)] mb-4">
                                For access to full audit reports and detailed compliance documentation,
                                please contact our security team.
                            </p>
                            <Button to="/contact" variant="secondary" icon={<ExternalLink className="w-4 h-4" />}>
                                Request Documentation
                            </Button>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Security Contact */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-[var(--color-success)]" />
                        </div>
                        <h2 className="text-3xl font-serif text-[var(--color-foreground)] mb-4">Security Inquiries</h2>
                        <p className="text-lg text-[var(--color-muted)] mb-8">
                            For security assessments, vendor questionnaires, or compliance inquiries,
                            please contact our security team directly.
                        </p>
                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                            <Lock className="w-5 h-5 text-[var(--color-gold)]" />
                            <a
                                href="mailto:security@zerogfoundry.com"
                                className="text-[var(--color-gold)] font-medium hover:underline"
                            >
                                security@zerogfoundry.com
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
