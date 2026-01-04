import { Award, Shield, TrendingUp, FileCheck } from 'lucide-react'

interface RecognitionSectionProps {
    className?: string
}

const awards = [
    {
        icon: Award,
        title: 'AI Excellence Award',
        year: '2024',
        source: 'Enterprise AI Council',
    },
    {
        icon: TrendingUp,
        title: 'Top AI Transformation Partner',
        year: '2024',
        source: 'CIO Review',
    },
    {
        icon: Award,
        title: 'Best in Class: Production AI',
        year: '2023',
        source: 'AI Breakthrough Awards',
    },
]

const analystRecognition = [
    { name: 'Gartner Cool Vendor', category: 'AI Services' },
    { name: 'Forrester Wave', category: 'AI Consulting' },
    { name: 'IDC MarketScape', category: 'Enterprise AI' },
]

const certifications = [
    { name: 'SOC 2 Type II', color: 'var(--color-accent)' },
    { name: 'ISO 27001', color: 'var(--color-success)' },
    { name: 'HIPAA', color: 'var(--color-warning)' },
    { name: 'HITRUST', color: 'var(--color-gold)' },
]

export default function RecognitionSection({ className = '' }: RecognitionSectionProps) {
    return (
        <section className={`py-24 ${className}`}>
            <div className="container">
                {/* Awards Grid */}
                <div className="text-center mb-16">
                    <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-subtle)] mb-4 font-medium">
                        Industry Recognition
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)] mb-8">
                        Recognized Excellence in AI Transformation
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {awards.map((award) => (
                        <div
                            key={award.title}
                            className="p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-gold)]/30 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                                    <award.icon className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-1">{award.title}</p>
                                    <p className="text-[var(--color-muted)] text-sm">{award.source}</p>
                                    <p className="text-[var(--color-subtle)] text-xs mt-2">{award.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Analyst Recognition */}
                <div className="mb-16 p-8 bg-gradient-to-br from-[var(--color-card)] to-transparent border border-[var(--color-border)] rounded-2xl">
                    <div className="text-center mb-8">
                        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-champagne)]/70 mb-2 font-light">
                            Analyst Recognition
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {analystRecognition.map((analyst) => (
                            <div key={analyst.name} className="text-center">
                                <p className="text-white font-medium mb-1">{analyst.name}</p>
                                <p className="text-[var(--color-subtle)] text-xs">{analyst.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Bar */}
                <div className="text-center">
                    <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-subtle)] mb-8 font-medium">
                        Enterprise Compliance & Security
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="flex items-center gap-2 px-5 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg"
                            >
                                <Shield className="w-4 h-4" style={{ color: cert.color }} />
                                <span className="text-sm font-medium text-white">{cert.name}</span>
                                <FileCheck className="w-3 h-3 text-[var(--color-success)]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
