import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, TrendingUp, Calendar, Users, BarChart3, Twitter, Linkedin, Mail, Link2, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

// ============================================
// INTERACTIVE ROI TIMELINE (Phase 201)
// ============================================
interface TimelinePoint {
    month: number
    label: string
    value: number
    milestone: string
}

interface InteractiveROITimelineProps {
    data: TimelinePoint[]
    currency?: string
}

export function InteractiveROITimeline({ data, currency = '$' }: InteractiveROITimelineProps) {
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
    const maxValue = Math.max(...data.map(d => d.value))

    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-lg font-semibold text-white">ROI Timeline</h3>
                    <p className="text-sm text-[var(--color-muted)]">Projected returns over engagement period</p>
                </div>
                <TrendingUp className="w-6 h-6 text-[var(--color-success)]" />
            </div>

            {/* Timeline visualization */}
            <div className="relative h-48 mb-8">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-[var(--color-subtle)]">
                    <span>{currency}{(maxValue / 1000000).toFixed(1)}M</span>
                    <span>{currency}{(maxValue / 2000000).toFixed(1)}M</span>
                    <span>{currency}0</span>
                </div>

                {/* Chart area */}
                <div className="ml-20 relative h-40">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2].map(i => (
                            <div key={i} className="border-t border-[var(--color-border)] border-dashed" />
                        ))}
                    </div>

                    {/* Data points and line */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        {/* Line path */}
                        <motion.polyline
                            fill="none"
                            stroke="url(#roiGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points={data.map((point, i) => {
                                const x = (i / (data.length - 1)) * 100
                                const y = 100 - (point.value / maxValue) * 100
                                return `${x}%,${y}%`
                            }).join(' ')}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />

                        {/* Gradient definition */}
                        <defs>
                            <linearGradient id="roiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-gold)" />
                                <stop offset="100%" stopColor="var(--color-success)" />
                            </linearGradient>
                        </defs>

                        {/* Data points */}
                        {data.map((point, i) => {
                            const x = (i / (data.length - 1)) * 100
                            const y = 100 - (point.value / maxValue) * 100
                            return (
                                <motion.circle
                                    key={i}
                                    cx={`${x}%`}
                                    cy={`${y}%`}
                                    r={hoveredPoint === i ? 8 : 5}
                                    fill={hoveredPoint === i ? 'var(--color-gold)' : 'var(--color-card)'}
                                    stroke="var(--color-gold)"
                                    strokeWidth="2"
                                    className="cursor-pointer"
                                    onMouseEnter={() => setHoveredPoint(i)}
                                    onMouseLeave={() => setHoveredPoint(null)}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                />
                            )
                        })}
                    </svg>

                    {/* Hover tooltip */}
                    {hoveredPoint !== null && (
                        <motion.div
                            className="absolute z-10 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg p-3 shadow-xl pointer-events-none"
                            style={{
                                left: `${(hoveredPoint / (data.length - 1)) * 100}%`,
                                top: `${100 - (data[hoveredPoint].value / maxValue) * 100}%`,
                                transform: 'translate(-50%, -120%)'
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <p className="text-white font-semibold">{currency}{(data[hoveredPoint].value / 1000000).toFixed(2)}M</p>
                            <p className="text-xs text-[var(--color-muted)]">{data[hoveredPoint].milestone}</p>
                        </motion.div>
                    )}
                </div>

                {/* X-axis labels */}
                <div className="ml-20 flex justify-between text-xs text-[var(--color-subtle)] mt-2">
                    {data.map((point, i) => (
                        <span key={i}>{point.label}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ============================================
// COMPARISON CHART (Phase 202)
// ============================================
interface ComparisonMetric {
    label: string
    before: number
    after: number
    unit: string
    improvement: string
}

interface ComparisonChartProps {
    title: string
    metrics: ComparisonMetric[]
}

export function ComparisonChart({ title, metrics }: ComparisonChartProps) {
    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>

            <div className="space-y-6">
                {metrics.map((metric, index) => {
                    const maxVal = Math.max(metric.before, metric.after)
                    const beforeWidth = (metric.before / maxVal) * 100
                    const afterWidth = (metric.after / maxVal) * 100

                    return (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-white font-medium">{metric.label}</span>
                                <span className="text-xs text-[var(--color-success)] font-semibold">{metric.improvement}</span>
                            </div>

                            <div className="space-y-2">
                                {/* Before bar */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-[var(--color-subtle)] w-12">Before</span>
                                    <div className="flex-1 h-4 bg-[var(--color-background)] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[var(--color-error)]/50 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${beforeWidth}%` }}
                                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                                        />
                                    </div>
                                    <span className="text-xs text-[var(--color-muted)] w-16 text-right">{metric.before}{metric.unit}</span>
                                </div>

                                {/* After bar */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-[var(--color-subtle)] w-12">After</span>
                                    <div className="flex-1 h-4 bg-[var(--color-background)] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-success)] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${afterWidth}%` }}
                                            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                                        />
                                    </div>
                                    <span className="text-xs text-white font-medium w-16 text-right">{metric.after}{metric.unit}</span>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

// ============================================
// EXECUTIVE SUMMARY DOWNLOAD (Phase 203)
// ============================================
interface ExecutiveSummaryDownloadProps {
    caseStudyTitle: string
    metrics: { label: string; value: string }[]
    onDownload?: () => void
}

export function ExecutiveSummaryDownload({ caseStudyTitle, metrics, onDownload }: ExecutiveSummaryDownloadProps) {
    const [isDownloading, setIsDownloading] = useState(false)

    const handleDownload = async () => {
        setIsDownloading(true)

        // Simulate download preparation
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Generate text content for download
        const content = `
EXECUTIVE SUMMARY
==================

${caseStudyTitle}

KEY METRICS:
${metrics.map(m => `• ${m.label}: ${m.value}`).join('\n')}

---
Generated by Zero G Foundry
www.zerogfoundry.com
        `.trim()

        // Create and trigger download
        const blob = new Blob([content], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${caseStudyTitle.replace(/\s+/g, '_')}_Executive_Summary.txt`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)

        setIsDownloading(false)
        onDownload?.()
    }

    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="group flex items-center gap-3 px-6 py-3 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 rounded-xl text-[var(--color-gold)] hover:bg-[var(--color-gold)]/20 transition-all disabled:opacity-50"
        >
            {isDownloading ? (
                <>
                    <div className="w-5 h-5 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
                    <span>Preparing...</span>
                </>
            ) : (
                <>
                    <Download className="w-5 h-5" />
                    <span>Download Executive Summary</span>
                </>
            )}
        </button>
    )
}

// ============================================
// SOCIAL SHARING (Phase 208)
// ============================================
interface ShareButtonsProps {
    url: string
    title: string
    description?: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)

    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)
    const encodedDesc = encodeURIComponent(description || '')

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`,
    }

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--color-subtle)] mr-2">Share:</span>

            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 transition-colors"
                aria-label="Share on Twitter"
            >
                <Twitter className="w-4 h-4" />
            </a>

            <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-colors"
                aria-label="Share on LinkedIn"
            >
                <Linkedin className="w-4 h-4" />
            </a>

            <a
                href={shareLinks.email}
                className="w-9 h-9 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/30 transition-colors"
                aria-label="Share via Email"
            >
                <Mail className="w-4 h-4" />
            </a>

            <button
                onClick={copyToClipboard}
                className="w-9 h-9 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-white hover:border-white/30 transition-colors"
                aria-label="Copy link"
            >
                {copied ? <Check className="w-4 h-4 text-[var(--color-success)]" /> : <Link2 className="w-4 h-4" />}
            </button>
        </div>
    )
}

// ============================================
// RELATED CASE STUDIES (Phase 209)
// ============================================
interface RelatedCaseStudy {
    id: string
    title: string
    industry: string
    metric: string
    metricValue: string
    path: string
}

interface RelatedCaseStudiesProps {
    studies: RelatedCaseStudy[]
    title?: string
}

export function RelatedCaseStudies({ studies, title = 'Related Case Studies' }: RelatedCaseStudiesProps) {
    if (studies.length === 0) return null

    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {studies.map((study, index) => (
                    <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={study.path}
                            className="block p-4 bg-[var(--color-background)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all group"
                        >
                            <span className="text-xs text-[var(--color-gold)] uppercase tracking-wider">{study.industry}</span>
                            <h4 className="text-white font-medium mt-2 group-hover:text-[var(--color-gold)] transition-colors line-clamp-2">
                                {study.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-3 text-sm">
                                <BarChart3 className="w-4 h-4 text-[var(--color-success)]" />
                                <span className="text-[var(--color-muted)]">{study.metric}:</span>
                                <span className="text-white font-semibold">{study.metricValue}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// ============================================
// CASE STUDY REQUEST FORM (Phase 210)
// ============================================
export function CaseStudyRequestForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-[var(--color-success)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Request Submitted</h3>
                <p className="text-[var(--color-muted)]">We'll be in touch within 24 hours with relevant case studies.</p>
            </div>
        )
    }

    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-2">Request Industry-Specific Case Studies</h3>
            <p className="text-sm text-[var(--color-muted)] mb-6">Get detailed case studies relevant to your industry and use case.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-subtle)] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Work Email"
                        value={formState.email}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-subtle)] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Company"
                        value={formState.company}
                        onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-subtle)] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                    />
                    <select
                        value={formState.industry}
                        onChange={e => setFormState(s => ({ ...s, industry: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                    >
                        <option value="">Select Industry</option>
                        <option value="healthcare">Healthcare & Insurance</option>
                        <option value="financial">Financial Services</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="technology">Technology</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <textarea
                    placeholder="Tell us about your use case (optional)"
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-subtle)] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors resize-none"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[var(--color-gold)] text-[#050505] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(201,168,108,0.3)] transition-all disabled:opacity-50"
                >
                    {isSubmitting ? 'Submitting...' : 'Request Case Studies'}
                </button>
            </form>
        </div>
    )
}

// ============================================
// ENGAGEMENT SCOPE BAR (Reusable)
// ============================================
interface EngagementScopeBarProps {
    duration: string
    teamSize: string
    technologies: string[]
}

export function EngagementScopeBar({ duration, teamSize, technologies }: EngagementScopeBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)]">
            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-sm text-white font-medium">{duration}</span>
            </div>
            <div className="w-px h-4 bg-[var(--color-border)]" />
            <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-sm text-white font-medium">{teamSize}</span>
            </div>
            <div className="w-px h-4 bg-[var(--color-border)]" />
            <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[var(--color-success)]" />
                <span className="text-sm text-[var(--color-muted)]">{technologies.join(' • ')}</span>
            </div>
        </div>
    )
}
