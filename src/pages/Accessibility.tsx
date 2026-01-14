import { CheckCircle, Eye, Keyboard, MousePointer, MessageSquare, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Section,
    SectionHeader,
    Card,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '../components'

const accessibilityFeatures = [
    {
        icon: Keyboard,
        title: 'Keyboard Navigation',
        description: 'Full keyboard accessibility throughout all interactive elements. Use Tab to navigate, Enter to activate, and Escape to close dialogs.',
    },
    {
        icon: Eye,
        title: 'Screen Reader Support',
        description: 'Semantic HTML and ARIA labels ensure compatibility with screen readers including JAWS, NVDA, and VoiceOver.',
    },
    {
        icon: MousePointer,
        title: 'Focus Indicators',
        description: 'Clear visual focus indicators help users track their position when navigating with keyboard or assistive devices.',
    },
    {
        icon: MessageSquare,
        title: 'Alternative Text',
        description: 'All meaningful images include descriptive alternative text. Decorative images are marked appropriately.',
    },
]

const wcagCompliance = [
    { level: '1.1', title: 'Text Alternatives', status: 'compliant' },
    { level: '1.2', title: 'Time-based Media', status: 'compliant' },
    { level: '1.3', title: 'Adaptable', status: 'compliant' },
    { level: '1.4', title: 'Distinguishable', status: 'compliant' },
    { level: '2.1', title: 'Keyboard Accessible', status: 'compliant' },
    { level: '2.2', title: 'Enough Time', status: 'compliant' },
    { level: '2.3', title: 'Seizures and Physical', status: 'compliant' },
    { level: '2.4', title: 'Navigable', status: 'compliant' },
    { level: '2.5', title: 'Input Modalities', status: 'compliant' },
    { level: '3.1', title: 'Readable', status: 'compliant' },
    { level: '3.2', title: 'Predictable', status: 'compliant' },
    { level: '3.3', title: 'Input Assistance', status: 'compliant' },
    { level: '4.1', title: 'Compatible', status: 'compliant' },
]

export default function Accessibility() {
    return (
        <>
            {/* Hero */}
            <Section className="pt-16 pb-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Commitment</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-8">
                            Accessibility Statement
                        </h1>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            Zero G Foundry is committed to ensuring digital accessibility for people
                            with disabilities. We continually improve the user experience for everyone
                            and apply the relevant accessibility standards.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Commitment */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto">
                        <Card className="p-8 lg:p-10">
                            <h2 className="text-2xl font-serif text-white mb-6">Our Commitment</h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                                    We believe that the web should be accessible to everyone, regardless of ability
                                    or circumstance. Our team actively works to ensure that our website meets or
                                    exceeds the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                                </p>
                                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                                    We regularly test our website using a combination of automated testing tools
                                    and manual testing with assistive technologies. Our development team receives
                                    ongoing training in accessibility best practices.
                                </p>
                                <p className="text-[var(--color-muted)] leading-relaxed">
                                    This commitment extends to our enterprise AI solutions, where we design
                                    interfaces that are inclusive and usable by all team members.
                                </p>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Features */}
            <Section>
                <ScrollReveal>
                    <SectionHeader
                        badge="Features"
                        title="Accessibility Features"
                        subtitle="Built-in features that make our website accessible to all users."
                    />
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {accessibilityFeatures.map((feature) => (
                        <StaggerItem key={feature.title}>
                            <Card className="p-6 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-6 h-6 text-[var(--color-gold)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-sm text-[var(--color-muted)]">{feature.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* WCAG Compliance */}
            <Section background="alt">
                <ScrollReveal>
                    <SectionHeader
                        badge="Compliance"
                        title="WCAG 2.1 Level AA"
                        subtitle="Our compliance status across all WCAG guidelines."
                    />
                </ScrollReveal>

                <div className="max-w-3xl mx-auto">
                    <Card className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {wcagCompliance.map((item) => (
                                <div
                                    key={item.level}
                                    className="flex items-center gap-3 p-3 bg-[var(--color-background)]/50 rounded-lg"
                                >
                                    <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                                    <div>
                                        <span className="text-xs text-[var(--color-gold)] font-medium">{item.level}</span>
                                        <p className="text-sm text-white">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Testing */}
            <Section>
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto">
                        <Card className="p-8">
                            <h2 className="text-2xl font-serif text-white mb-6">Testing & Validation</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-medium mb-2">Automated Testing</h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        We use automated accessibility testing tools including aXe, WAVE, and
                                        Lighthouse to continuously monitor and improve accessibility.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-2">Manual Testing</h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        Our team performs manual testing with screen readers (NVDA, VoiceOver)
                                        and keyboard-only navigation to ensure real-world usability.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-2">User Feedback</h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        We actively welcome feedback from users about accessibility issues
                                        and incorporate this feedback into our continuous improvement process.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Contact */}
            <Section background="alt">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-serif text-white mb-4">Feedback & Support</h2>
                        <p className="text-lg text-[var(--color-muted)] mb-8">
                            If you encounter any accessibility barriers or have suggestions for improvement,
                            please contact us. We take all feedback seriously and respond within 2 business days.
                        </p>
                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl mb-6">
                            <Mail className="w-5 h-5 text-[var(--color-gold)]" />
                            <a
                                href="mailto:accessibility@zerogfoundry.com"
                                className="text-[var(--color-gold)] font-medium hover:underline"
                            >
                                accessibility@zerogfoundry.com
                            </a>
                        </div>
                        <p className="text-sm text-[var(--color-subtle)]">
                            Last updated: January 2026
                        </p>
                    </div>
                </ScrollReveal>
            </Section>
        </>
    )
}
