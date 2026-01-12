import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home, Search, Command, ArrowUp } from 'lucide-react'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ============================================
// BREADCRUMB NAVIGATION (Phase 193)
// ============================================
const routeLabels: Record<string, string> = {
    '': 'Home',
    'methodology': 'Methodology',
    'about': 'About',
    'insights': 'Insights',
    'contact': 'Contact',
    'legal': 'Legal',
    'assessment': 'Assessment',
    'assessment-v2': 'Assessment V2',
    'research': 'Research',
    'roi-calculator': 'ROI Calculator',
    'roi-calculator-v2': 'Advanced ROI Calculator',
    'case-studies': 'Case Studies',
    'client-success': 'Client Success',
    'industries': 'Industries',
    'security': 'Security',
    'faq': 'FAQ',
    'team': 'Team',
    'careers': 'Careers',
    'partners': 'Partners',
    'partners-v2': 'Partner Ecosystem',
    'ai-ethics': 'AI Ethics',
    'tech-radar': 'Tech Radar',
    'playbooks': 'Playbooks',
    'executive-briefing': 'Executive Briefing',
    'investors': 'Investors',
    'press': 'Press',
    'blog': 'Blog',
    'awards': 'Awards',
    'webinars': 'Webinars',
    'whitepapers': 'Whitepapers',
    'compliance': 'Compliance',
    'ai-maturity-scan': 'AI Maturity Scan',
    'testimonials': 'Testimonials',
    'platform-demo': 'Platform Demo',
    'accessibility': 'Accessibility',
}

export function Breadcrumbs() {
    const location = useLocation()
    const pathSegments = location.pathname.split('/').filter(Boolean)

    if (location.pathname === '/') return null

    return (
        <nav aria-label="Breadcrumb" className="py-4 border-b border-[var(--color-border)]">
            <div className="container">
                <ol className="flex items-center gap-2 text-sm">
                    <li>
                        <Link
                            to="/"
                            className="text-[var(--color-muted)] hover:text-white transition-colors flex items-center gap-1"
                        >
                            <Home className="w-4 h-4" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const path = '/' + pathSegments.slice(0, index + 1).join('/')
                        const isLast = index === pathSegments.length - 1
                        const label = routeLabels[segment] || segment.replace(/-/g, ' ')

                        return (
                            <li key={path} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-[var(--color-subtle)]" />
                                {isLast ? (
                                    <span className="text-white font-medium capitalize">{label}</span>
                                ) : (
                                    <Link
                                        to={path}
                                        className="text-[var(--color-muted)] hover:text-white transition-colors capitalize"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </nav>
    )
}

// ============================================
// SITE SEARCH (Phase 194)
// ============================================
const searchIndex = [
    { title: 'Home', path: '/', keywords: ['home', 'main', 'start'] },
    { title: 'Methodology', path: '/methodology', keywords: ['approach', 'method', 'process', 'rlhf', 'human feedback'] },
    { title: 'About Us', path: '/about', keywords: ['about', 'company', 'who we are', 'mission'] },
    { title: 'Case Studies', path: '/case-studies', keywords: ['cases', 'examples', 'success stories', 'clients'] },
    { title: 'Client Success', path: '/client-success', keywords: ['testimonials', 'results', 'outcomes'] },
    { title: 'Industries', path: '/industries', keywords: ['healthcare', 'finance', 'sectors', 'verticals'] },
    { title: 'ROI Calculator', path: '/roi-calculator-v2', keywords: ['roi', 'return', 'savings', 'calculate'] },
    { title: 'AI Maturity Scan', path: '/ai-maturity-scan', keywords: ['assessment', 'maturity', 'readiness', 'diagnostic'] },
    { title: 'Platform Demo', path: '/platform-demo', keywords: ['demo', 'tour', 'preview', 'walkthrough'] },
    { title: 'Investors', path: '/investors', keywords: ['invest', 'funding', 'venture', 'capital'] },
    { title: 'Team', path: '/team', keywords: ['leadership', 'people', 'executives', 'founders'] },
    { title: 'Careers', path: '/careers', keywords: ['jobs', 'hiring', 'work', 'opportunities'] },
    { title: 'Partners', path: '/partners-v2', keywords: ['partnerships', 'ecosystem', 'alliance'] },
    { title: 'Press', path: '/press', keywords: ['media', 'news', 'coverage', 'announcements'] },
    { title: 'Blog', path: '/blog', keywords: ['articles', 'insights', 'thought leadership'] },
    { title: 'Contact', path: '/contact', keywords: ['contact', 'reach', 'email', 'schedule'] },
    { title: 'Security', path: '/security', keywords: ['security', 'privacy', 'compliance', 'soc2'] },
    { title: 'FAQ', path: '/faq', keywords: ['questions', 'answers', 'help', 'support'] },
]

interface SiteSearchProps {
    isOpen: boolean
    onClose: () => void
}

export function SiteSearch({ isOpen, onClose }: SiteSearchProps) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState(searchIndex)
    const inputRef = useRef<HTMLInputElement>(null)

    // Close on escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Search logic
    useEffect(() => {
        if (!query.trim()) {
            setResults(searchIndex)
            return
        }

        const lowerQuery = query.toLowerCase()
        const filtered = searchIndex.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.keywords.some(kw => kw.includes(lowerQuery))
        )
        setResults(filtered)
    }, [query])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="w-full max-w-2xl bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Search Input */}
                    <div className="flex items-center gap-3 p-4 border-b border-[var(--color-border)]">
                        <Search className="w-5 h-5 text-[var(--color-muted)]" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search pages..."
                            className="flex-1 bg-transparent text-white placeholder:text-[var(--color-subtle)] outline-none text-lg"
                        />
                        <kbd className="px-2 py-1 text-xs text-[var(--color-subtle)] bg-[var(--color-background)] rounded border border-[var(--color-border)]">
                            ESC
                        </kbd>
                    </div>

                    {/* Results */}
                    <div className="max-h-[50vh] overflow-y-auto">
                        {results.length > 0 ? (
                            <ul className="p-2">
                                {results.map(item => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={onClose}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-background)] transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                                                <ChevronRight className="w-4 h-4 text-[var(--color-gold)]" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{item.title}</p>
                                                <p className="text-sm text-[var(--color-subtle)]">{item.path}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-8 text-center text-[var(--color-muted)]">
                                No results found for "{query}"
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-[var(--color-border)] bg-[var(--color-background)]/50">
                        <div className="flex items-center justify-between text-xs text-[var(--color-subtle)]">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <ArrowUp className="w-3 h-3" />
                                    <ArrowUp className="w-3 h-3 rotate-180" />
                                    to navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    ↵ to select
                                </span>
                            </div>
                            <span>Press ESC to close</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

// ============================================
// SEARCH TRIGGER (Global keyboard shortcut)
// ============================================
export function useSearchShortcut() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Cmd/Ctrl + K to open search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsSearchOpen(true)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    return { isSearchOpen, setIsSearchOpen }
}

// ============================================
// SEARCH TRIGGER BUTTON
// ============================================
export function SearchButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-muted)] bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-gold)]/30 hover:text-white transition-colors"
        >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:flex items-center gap-0.5 px-1.5 py-0.5 text-[0.65rem] bg-[var(--color-background)] rounded border border-[var(--color-border)]">
                <Command className="w-3 h-3" />K
            </kbd>
        </button>
    )
}

// ============================================
// READING PROGRESS BAR (Phase 197)
// ============================================
export function ReadingProgressBar() {
    const [progress, setProgress] = useState(0)

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100
        setProgress(Math.min(100, Math.max(0, scrollPercent)))
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-[var(--color-border)]">
            <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-aurora-teal)]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
            />
        </div>
    )
}

// ============================================
// NOTIFICATION SYSTEM (Phase 200)
// ============================================
type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface Notification {
    id: string
    type: NotificationType
    title: string
    message?: string
    duration?: number
}

// Notification hook
export function useNotifications() {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
        const id = Math.random().toString(36).substring(7)
        const newNotification = { ...notification, id }

        setNotifications(prev => [...prev, newNotification])

        // Auto-remove after duration
        const duration = notification.duration ?? 5000
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id))
        }, duration)
    }, [])

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
    }, [])

    return { notifications, addNotification, removeNotification }
}

// Notification container
export function NotificationContainer({ notifications, onRemove }: {
    notifications: Notification[]
    onRemove: (id: string) => void
}) {
    const typeStyles: Record<NotificationType, { bg: string; border: string; icon: string }> = {
        success: { bg: 'var(--color-success)', border: 'var(--color-success)', icon: '✓' },
        error: { bg: 'var(--color-error)', border: 'var(--color-error)', icon: '✕' },
        warning: { bg: 'var(--color-warning)', border: 'var(--color-warning)', icon: '!' },
        info: { bg: 'var(--color-aurora-teal)', border: 'var(--color-aurora-teal)', icon: 'i' },
    }

    return (
        <div className="fixed top-20 right-4 z-[100] space-y-3 max-w-sm">
            <AnimatePresence>
                {notifications.map(notification => {
                    const style = typeStyles[notification.type]
                    return (
                        <motion.div
                            key={notification.id}
                            className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-2xl"
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        >
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                                    style={{ backgroundColor: style.bg }}
                                >
                                    {style.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-medium">{notification.title}</p>
                                    {notification.message && (
                                        <p className="text-sm text-[var(--color-muted)] mt-1">{notification.message}</p>
                                    )}
                                </div>
                                <button
                                    onClick={() => onRemove(notification.id)}
                                    className="text-[var(--color-subtle)] hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}
