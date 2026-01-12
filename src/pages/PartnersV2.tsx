import { useState } from 'react'
import { ArrowRight, Building2, Users, Zap, CheckCircle, ExternalLink, Award, Mail } from 'lucide-react'
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

interface Partner {
    name: string
    tier: 'strategic' | 'technology' | 'implementation' | 'channel'
    logo?: string
    description: string
    capabilities: string[]
    caseStudy?: string
}

const partnerTiers = [
    {
        id: 'strategic',
        name: 'Strategic Partners',
        description: 'Deep integrations and joint go-to-market initiatives',
        icon: Award,
        color: 'var(--color-gold)',
    },
    {
        id: 'technology',
        name: 'Technology Partners',
        description: 'Best-in-class AI infrastructure and tools',
        icon: Zap,
        color: 'var(--color-accent)',
    },
    {
        id: 'implementation',
        name: 'Implementation Partners',
        description: 'Certified delivery and scaling capabilities',
        icon: Users,
        color: 'var(--color-success)',
    },
    {
        id: 'channel',
        name: 'Channel Partners',
        description: 'Resellers and referral network',
        icon: Building2,
        color: 'var(--color-muted)',
    },
]

const partners: Partner[] = [
    {
        name: 'NVIDIA',
        tier: 'strategic',
        description: 'Enterprise AI infrastructure and DGX Cloud solutions',
        capabilities: ['DGX Cloud', 'Enterprise AI', 'GPU Computing', 'AI Training'],
        caseStudy: 'Deployed DGX-powered RLHF pipeline for Fortune 100 insurer',
    },
    {
        name: 'Microsoft Azure',
        tier: 'technology',
        description: 'Cloud AI services and enterprise infrastructure',
        capabilities: ['Azure OpenAI', 'Cognitive Services', 'Azure ML', 'Document Intelligence'],
    },
    {
        name: 'AWS',
        tier: 'technology',
        description: 'Cloud infrastructure and AI/ML services',
        capabilities: ['SageMaker', 'Bedrock', 'Textract', 'Comprehend Medical'],
    },
    {
        name: 'Snowflake',
        tier: 'technology',
        description: 'Data cloud and enterprise data platform',
        capabilities: ['Data Sharing', 'Snowpark', 'Cortex AI', 'Healthcare Data Cloud'],
    },
    {
        name: 'Accenture',
        tier: 'implementation',
        description: 'Global systems integration and delivery',
        capabilities: ['Enterprise Scale', 'Change Management', 'Industry Expertise'],
    },
    {
        name: 'Deloitte',
        tier: 'implementation',
        description: 'Enterprise advisory and implementation',
        capabilities: ['Strategy', 'Implementation', 'Regulatory Compliance'],
    },
]

const partnerBenefits = [
    {
        title: 'Revenue Share',
        description: 'Competitive commission structure for referrals and resold services',
    },
    {
        title: 'Co-Marketing',
        description: 'Joint case studies, webinars, and event sponsorships',
    },
    {
        title: 'Technical Enablement',
        description: 'Access to our methodology, training, and certification programs',
    },
    {
        title: 'Deal Registration',
        description: 'Protected opportunity registration with priority support',
    },
    {
        title: 'Executive Access',
        description: 'Direct line to our leadership for strategic planning',
    },
    {
        title: 'Market Intelligence',
        description: 'Regular briefings on AI trends and market opportunities',
    },
]

export default function PartnersV2() {
    const [selectedTier, setSelectedTier] = useState<string>('all')
    const [showPartnerForm, setShowPartnerForm] = useState(false)

    const filteredPartners = selectedTier === 'all'
        ? partners
        : partners.filter(p => p.tier === selectedTier)

    return (
        <>
            {/* Hero */}
            <Section className="pt-32 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Partner Ecosystem</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Strategic Partners
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            We partner with the world's leading technology providers and consultancies
                            to deliver enterprise AI transformation at scale.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Partner Tiers */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Partnership Tiers"
                        title="Our Partner Network"
                        subtitle="Tiered partnerships offering different levels of collaboration and benefits."
                    />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {partnerTiers.map((tier, index) => (
                        <ScrollReveal key={tier.id} delay={index * 0.1}>
                            <div
                                className={`p-6 text-center cursor-pointer transition-all rounded-2xl border bg-[var(--color-card)] ${selectedTier === tier.id ? 'border-[var(--color-gold)]' : 'border-[var(--color-border)] hover:border-[var(--color-gold)]/50'
                                    }`}
                                onClick={() => setSelectedTier(selectedTier === tier.id ? 'all' : tier.id)}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: `${tier.color}20` }}
                                >
                                    <tier.icon className="w-6 h-6" style={{ color: tier.color }} />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{tier.name}</h3>
                                <p className="text-sm text-[var(--color-muted)]">{tier.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPartners.map((partner) => {
                        const tier = partnerTiers.find(t => t.id === partner.tier)
                        return (
                            <Card key={partner.name} className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">{partner.name}</h4>
                                        <span className="text-xs font-medium" style={{ color: tier?.color }}>
                                            {tier?.name}
                                        </span>
                                    </div>
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${tier?.color}20` }}
                                    >
                                        {tier?.icon && <tier.icon className="w-5 h-5" style={{ color: tier.color }} />}
                                    </div>
                                </div>
                                <p className="text-[var(--color-muted)] text-sm mb-4">{partner.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {partner.capabilities.map((cap) => (
                                        <span
                                            key={cap}
                                            className="px-2 py-1 text-xs bg-[var(--color-background)] border border-[var(--color-border)] rounded text-[var(--color-muted)]"
                                        >
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                                {partner.caseStudy && (
                                    <div className="p-3 bg-[var(--color-background)]/50 rounded-lg">
                                        <p className="text-xs text-[var(--color-muted)]">
                                            <CheckCircle className="w-3 h-3 inline mr-1 text-[var(--color-success)]" />
                                            {partner.caseStudy}
                                        </p>
                                    </div>
                                )}
                            </Card>
                        )
                    })}
                </div>
            </Section>

            {/* Partner Benefits */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Why Partner"
                        title="Partnership Benefits"
                        subtitle="Join our ecosystem and accelerate your AI practice."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {partnerBenefits.map((benefit) => (
                        <StaggerItem key={benefit.title}>
                            <Card className="p-6 h-full">
                                <CheckCircle className="w-6 h-6 text-[var(--color-success)] mb-4" />
                                <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                                <p className="text-sm text-[var(--color-muted)]">{benefit.description}</p>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="text-center">
                    <Button onClick={() => setShowPartnerForm(true)} icon={<ArrowRight className="w-4 h-4" />}>
                        Become a Partner
                    </Button>
                </div>
            </Section>

            {/* Partner Application Modal */}
            {showPartnerForm && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowPartnerForm(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Card className="p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-[var(--color-gold)]" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">Partner Application</h3>
                                <p className="text-sm text-[var(--color-muted)]">
                                    Tell us about your organization and partnership interests.
                                </p>
                            </div>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowPartnerForm(false); }}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        required
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        required
                                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Work email"
                                    required
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                />
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    required
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                />
                                <select
                                    required
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-gold)]/50"
                                >
                                    <option value="">Partnership type</option>
                                    <option value="technology">Technology Partner</option>
                                    <option value="implementation">Implementation Partner</option>
                                    <option value="channel">Channel / Reseller</option>
                                    <option value="referral">Referral Partner</option>
                                </select>
                                <textarea
                                    placeholder="How would you like to partner with us?"
                                    rows={3}
                                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-gold)]/50"
                                />
                                <Button type="submit" className="w-full" icon={<Mail className="w-4 h-4" />}>
                                    Submit Application
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </motion.div>
            )}

            {/* Resources */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif text-white mb-6">Partner Resources</h2>
                        <p className="text-[var(--color-muted)] mb-8">
                            Access documentation, training materials, and co-marketing assets.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Partner Portal', desc: 'Deal registration & resources', href: '#' },
                                { title: 'Technical Docs', desc: 'Integration guides', href: '#' },
                                { title: 'Co-Marketing Kit', desc: 'Logos, templates, case studies', href: '#' },
                            ].map((resource) => (
                                <Card key={resource.title} className="p-6 text-center group cursor-pointer hover:border-[var(--color-gold)]/30 transition-all">
                                    <h4 className="text-white font-medium mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                                        {resource.title}
                                    </h4>
                                    <p className="text-sm text-[var(--color-muted)] mb-3">{resource.desc}</p>
                                    <ExternalLink className="w-4 h-4 text-[var(--color-muted)] mx-auto" />
                                </Card>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
