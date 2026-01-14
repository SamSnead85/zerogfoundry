import { HelpCircle, ChevronDown, ArrowRight, Search, MessageCircle, Book, FileText } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Section,
    Button,
    Card,
    ScrollReveal,
} from '../components'

const faqCategories = [
    {
        name: 'Getting Started',
        icon: Book,
        faqs: [
            {
                q: 'What is Zero G Foundry?',
                a: 'Zero G Foundry is a specialized AI consultancy focused on helping enterprises deploy production-grade AI solutions. We specialize in bridging the gap between AI demos and production systems that deliver measurable ROI.',
            },
            {
                q: 'What industries do you serve?',
                a: 'We primarily serve Healthcare & Insurance, Financial Services, and Manufacturing industries. Our deep domain expertise in regulated industries allows us to navigate compliance requirements while delivering business outcomes.',
            },
            {
                q: 'How is Zero G Foundry different from other AI consultancies?',
                a: 'We focus exclusively on production-grade AI outcomes, not demos or POCs. Our proprietary RLHF methodology, combined with performance guarantees and value-based pricing, ensures alignment with your business objectives.',
            },
        ],
    },
    {
        name: 'Engagement Model',
        icon: FileText,
        faqs: [
            {
                q: 'How does a typical engagement work?',
                a: 'Engagements typically follow our 4-phase methodology: Assessment (2-4 weeks), Foundation (4-8 weeks), Enhancement with RLHF (8-16 weeks), and Optimization (ongoing). Each phase has clear deliverables and success criteria.',
            },
            {
                q: 'What is your pricing model?',
                a: 'We use value-based pricing tied to quantified outcomes. This typically includes a paid assessment, fixed-fee implementation (15-25% of year-one savings), and performance guarantees with meaningful floors.',
            },
            {
                q: 'How long does it take to see results?',
                a: 'Most clients see initial production deployment within 4-6 months, with measurable ROI within 12-18 months. Timeline varies based on use case complexity and organizational readiness.',
            },
            {
                q: 'Do you offer ongoing support?',
                a: 'Yes, we offer managed services for model monitoring, retraining, and optimization. This includes continuous improvement through additional RLHF cycles based on production performance.',
            },
        ],
    },
    {
        name: 'Technology',
        icon: HelpCircle,
        faqs: [
            {
                q: 'What is RLHF and why is it important?',
                a: 'Reinforcement Learning from Human Feedback (RLHF) is our methodology for incorporating domain expert knowledge into AI models. It\'s critical for achieving the 95%+ accuracy required for production deployment in enterprise settings.',
            },
            {
                q: 'What technology stack do you use?',
                a: 'We are infrastructure-agnostic and work with major cloud providers (AWS, Azure, GCP) and AI platforms (NVIDIA, Databricks, Snowflake). We adapt to your existing technology ecosystem.',
            },
            {
                q: 'How do you handle data security?',
                a: 'We maintain SOC 2 Type II, ISO 27001, HIPAA, and HITRUST certifications. All data is encrypted at rest and in transit, with strict access controls and audit logging.',
            },
            {
                q: 'Can you work with our existing AI/ML infrastructure?',
                a: 'Absolutely. We specialize in integrating with existing enterprise systems and can enhance your current AI investments rather than requiring a greenfield approach.',
            },
        ],
    },
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
    const [searchQuery, setSearchQuery] = useState('')

    const toggleItem = (id: string) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const filteredCategories = faqCategories.map(cat => ({
        ...cat,
        faqs: cat.faqs.filter(faq =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    })).filter(cat => cat.faqs.length > 0)

    return (
        <>
            {/* Hero */}
            <section className="relative pt-16 pb-12 overflow-hidden">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-6 font-light">
                                Support
                            </p>
                            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.1] text-[var(--color-foreground)] mb-6">
                                Frequently Asked
                                <span className="italic text-[var(--color-champagne)]"> Questions</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                                Find answers to common questions about our services,
                                methodology, and engagement process.
                            </p>

                            {/* Search */}
                            <div className="relative max-w-md mx-auto">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
                                <input
                                    type="text"
                                    placeholder="Search questions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg text-white focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ Categories */}
            <Section>
                {filteredCategories.map((category) => (
                    <div key={category.name} className="mb-12">
                        <ScrollReveal>
                            <div className="flex items-center gap-3 mb-6">
                                <category.icon className="w-5 h-5 text-[var(--color-gold)]" />
                                <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {category.faqs.map((faq, index) => {
                                const id = `${category.name}-${index}`
                                const isOpen = openItems[id]

                                return (
                                    <Card key={id} className="overflow-hidden">
                                        <button
                                            onClick={() => toggleItem(id)}
                                            className="w-full p-6 text-left flex items-center justify-between"
                                        >
                                            <span className="text-white font-medium pr-4">{faq.q}</span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-[var(--color-muted)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: 'auto' }}
                                                    exit={{ height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-[var(--color-muted)]">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </Section>

            {/* CTA */}
            <Section background="alt">
                <ScrollReveal>
                    <Card className="p-12 text-center">
                        <MessageCircle className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
                            Our team is here to help. Schedule a call to discuss
                            your specific needs and questions.
                        </p>
                        <Button to="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                            Contact Us
                        </Button>
                    </Card>
                </ScrollReveal>
            </Section>
        </>
    )
}
