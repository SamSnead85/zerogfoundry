import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Navigation configuration
const navConfig = [
    {
        label: 'Solutions',
        items: [
            { label: 'Mainframe Modernization', href: '/solutions/mainframe', description: 'Transform legacy systems with AI', icon: '🏛️' },
            { label: 'AI Contact Center', href: '/solutions/contact-center', description: 'Revolutionary CX platform', icon: '🎧' },
            { divider: true },
            { label: 'For Financial Services', href: '/industries/financial-services', icon: '💰' },
            { label: 'For Healthcare', href: '/industries/healthcare', icon: '🏥' },
        ],
    },
    {
        label: 'Platform',
        items: [
            { label: 'Overview', href: '/platform', description: 'The unified transformation platform', icon: '⚡' },
            { label: 'Agentic Engine', href: '/platform/agentic-engine', description: 'Our AI foundation', icon: '🧠' },
            { label: 'Assessment Framework', href: '/assessment', icon: '📊' },
            { label: 'Security', href: '/security', icon: '🔒' },
        ],
    },
    {
        label: 'Why Zero Foundry',
        items: [
            { label: 'Our Difference', href: '/methodology', icon: '✨' },
            { label: 'Customer Stories', href: '/client-success', icon: '🏆' },
            { label: 'Partners', href: '/partners-v2', icon: '🤝' },
        ],
    },
    {
        label: 'Resources',
        items: [
            { label: 'Blog', href: '/blog', icon: '📝' },
            { label: 'Whitepapers', href: '/whitepapers', icon: '📄' },
            { label: 'Case Studies', href: '/case-studies', icon: '📈' },
        ],
    },
    {
        label: 'Company',
        items: [
            { label: 'About Us', href: '/about', icon: '🏢' },
            { label: 'Careers', href: '/careers', icon: '💼' },
            { label: 'Contact', href: '/contact', icon: '📧' },
        ],
    },
]

interface NavItem {
    label?: string
    href?: string
    description?: string
    divider?: boolean
    icon?: string
}

interface NavSection {
    label: string
    items: NavItem[]
}

// Premium Mega Menu with glassmorphism
function MegaDropdown({ section, isOpen, onClose }: { section: NavSection; isOpen: boolean; onClose: () => void }) {
    const location = useLocation()

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-5"
                    onMouseLeave={onClose}
                >
                    {/* Premium glass container */}
                    <div className="relative">
                        {/* Outer glow */}
                        <div className="absolute -inset-1 bg-gradient-to-b from-[var(--color-gold)]/20 via-transparent to-transparent rounded-2xl blur-xl opacity-60" />

                        {/* Main dropdown */}
                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.8),0_0_40px_rgba(201,168,108,0.08)] overflow-hidden min-w-[320px]">
                            {/* Top gradient accent */}
                            <div className="h-[2px] bg-gradient-to-r from-[var(--color-aurora-teal)]/50 via-[var(--color-gold)] to-[var(--color-holographic-violet)]/50" />

                            {/* Inner glow effect */}
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                            <div className="p-3 relative">
                                {section.items.map((item, idx) => {
                                    if (item.divider) {
                                        return (
                                            <div key={idx} className="my-2 mx-3 flex items-center gap-3">
                                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                                <span className="text-[10px] uppercase tracking-widest text-white/25 font-medium">Industries</span>
                                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                            </div>
                                        )
                                    }

                                    const isActive = location.pathname === item.href

                                    return (
                                        <Link
                                            key={item.href}
                                            to={item.href!}
                                            className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive
                                                ? 'bg-gradient-to-r from-[var(--color-gold)]/15 to-transparent text-white'
                                                : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                                                }`}
                                            onClick={onClose}
                                        >
                                            {/* Icon with glow */}
                                            <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${isActive
                                                ? 'bg-[var(--color-gold)]/20'
                                                : 'bg-white/[0.04] group-hover:bg-white/[0.08]'
                                                }`}>
                                                <span className="text-lg">{item.icon}</span>
                                                {isActive && (
                                                    <div className="absolute inset-0 rounded-lg bg-[var(--color-gold)]/20 blur-lg" />
                                                )}
                                            </div>

                                            <div className="flex-1">
                                                <div className="font-medium text-sm tracking-wide">{item.label}</div>
                                                {item.description && (
                                                    <div className="text-xs text-white/40 mt-0.5 font-light">{item.description}</div>
                                                )}
                                            </div>

                                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-300" />
                                        </Link>
                                    )
                                })}
                            </div>

                            {/* Bottom gradient */}
                            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}



export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
    const location = useLocation()
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileOpen(false)
        setOpenDropdown(null)
        setMobileExpandedSection(null)
    }, [location])

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setOpenDropdown(label)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null)
        }, 200)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'py-3'
                : 'py-4'
                }`}
        >
            <div className="container">
                {/* Modern floating pill navigation */}
                <nav
                    className={`relative flex items-center justify-between h-14 px-6 rounded-full transition-all duration-500 ${isScrolled
                        ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                        : 'bg-transparent'
                        }`}
                    aria-label="Main navigation"
                >
                    {/* Premium Logo - Elegant ØG Typographic Mark */}
                    <Link to="/" className="flex items-center gap-2.5 group relative" aria-label="Zero Foundry Home">
                        {/* Subtle hover glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* ØG Logo Mark - Premium Typographic */}
                        <div className="relative flex items-center">
                            <span
                                className="text-2xl font-light tracking-tighter bg-gradient-to-b from-white via-[#C0C0C0] to-[#808080] bg-clip-text text-transparent group-hover:from-white group-hover:via-[#E8E8E8] group-hover:to-[#B0B0B0] transition-all duration-500"
                                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                            >
                                ØG
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-5 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                        {/* Text logo */}
                        <div className="relative hidden sm:block">
                            <span className="text-lg font-light tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
                                Zero Foundry
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Premium */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navConfig.map((section) => (
                            <div
                                key={section.label}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(section.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${openDropdown === section.label
                                        ? 'text-white bg-white/[0.06]'
                                        : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                                        }`}
                                >
                                    {section.label}
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === section.label ? 'rotate-180' : ''
                                        }`} />


                                </button>

                                <MegaDropdown
                                    section={section}
                                    isOpen={openDropdown === section.label}
                                    onClose={() => setOpenDropdown(null)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTAs - Premium */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Secondary CTA */}
                        <Link
                            to="/contact"
                            className="relative group inline-flex items-center gap-2 px-5 py-2.5 text-white/70 hover:text-white font-medium text-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Talk to Expert</span>
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        {/* Primary CTA - Premium gradient button */}
                        <Link
                            to="/platform-demo"
                            className="group relative inline-flex items-center gap-2 px-6 py-2.5 font-medium text-sm rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                        >
                            {/* Static gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-light)] to-[var(--color-gold)]" />

                            {/* Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                            {/* Content */}
                            <Sparkles className="w-4 h-4 text-[#050505] relative z-10" />
                            <span className="relative z-10 text-[#050505] font-semibold tracking-wide">Request Demo</span>

                            {/* Premium glow */}
                            <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(74,158,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Premium */}
                    <button
                        className="lg:hidden relative p-2 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileOpen}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>


                    {/* Mobile Navigation - Premium Full Screen */}
                    <AnimatePresence>
                        {isMobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                className="lg:hidden absolute top-full left-0 right-0 bg-[#050505]/98 backdrop-blur-3xl border-t border-white/5 overflow-hidden"
                            >
                                <div className="container py-8 max-h-[80vh] overflow-y-auto">
                                    {/* Mobile nav sections */}
                                    {navConfig.map((section, sectionIdx) => (
                                        <motion.div
                                            key={section.label}
                                            className="mb-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: sectionIdx * 0.05 }}
                                        >
                                            <button
                                                onClick={() => setMobileExpandedSection(
                                                    mobileExpandedSection === section.label ? null : section.label
                                                )}
                                                className="flex items-center justify-between w-full py-4 text-white font-medium text-lg"
                                            >
                                                <span className="flex items-center gap-3">
                                                    <Zap className={`w-4 h-4 transition-colors ${mobileExpandedSection === section.label ? 'text-[var(--color-gold)]' : 'text-white/30'
                                                        }`} />
                                                    {section.label}
                                                </span>
                                                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${mobileExpandedSection === section.label ? 'rotate-180 text-[var(--color-gold)]' : ''
                                                    }`} />
                                            </button>

                                            <AnimatePresence>
                                                {mobileExpandedSection === section.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-8 border-l-2 border-[var(--color-gold)]/30 ml-2"
                                                    >
                                                        {section.items.map((item) => {
                                                            if (item.divider) return null
                                                            return (
                                                                <Link
                                                                    key={item.href}
                                                                    to={item.href!}
                                                                    className="flex items-center gap-3 py-3 text-white/60 hover:text-white transition-colors"
                                                                >
                                                                    <span className="text-lg">{item.icon}</span>
                                                                    <span>{item.label}</span>
                                                                </Link>
                                                            )
                                                        })}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}

                                    {/* Mobile CTAs */}
                                    <motion.div
                                        className="pt-8 mt-4 border-t border-white/10 space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Link
                                            to="/contact"
                                            className="flex items-center justify-center py-4 text-white/70 border border-white/20 rounded-xl hover:bg-white/5 transition-all"
                                        >
                                            Talk to an Expert
                                        </Link>
                                        <Link
                                            to="/platform-demo"
                                            className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-aurora-teal)] text-white font-semibold rounded-xl"
                                        >
                                            <Sparkles className="w-4 h-4" />
                                            Request Demo
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    )
}
