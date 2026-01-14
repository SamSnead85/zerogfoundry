import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Navigation configuration
const navConfig = [
    {
        label: 'Solutions',
        items: [
            { label: 'Mainframe Modernization', href: '/solutions/mainframe', description: 'Transform legacy systems with AI' },
            { label: 'AI Contact Center', href: '/solutions/contact-center', description: 'Revolutionary CX platform' },
            { divider: true },
            { label: 'For Financial Services', href: '/industries/financial-services' },
            { label: 'For Healthcare', href: '/industries/healthcare' },
        ],
    },
    {
        label: 'Platform',
        items: [
            { label: 'Overview', href: '/platform', description: 'The unified transformation platform' },
            { label: 'Agentic Engine', href: '/platform/agentic-engine', description: 'Our AI foundation' },
            { label: 'Assessment Framework', href: '/assessment' },
            { label: 'Security', href: '/security' },
        ],
    },
    {
        label: 'Why Zero Foundry',
        items: [
            { label: 'Our Difference', href: '/methodology' },
            { label: 'Customer Stories', href: '/client-success' },
            { label: 'Partners', href: '/partners-v2' },
        ],
    },
    {
        label: 'Resources',
        items: [
            { label: 'Blog', href: '/blog' },
            { label: 'Whitepapers', href: '/whitepapers' },
            { label: 'Case Studies', href: '/case-studies' },
        ],
    },
    {
        label: 'Company',
        items: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact', href: '/contact' },
        ],
    },
]

interface NavItem {
    label?: string
    href?: string
    description?: string
    divider?: boolean
}

interface NavSection {
    label: string
    items: NavItem[]
}

function DropdownMenu({ section, isOpen, onClose }: { section: NavSection; isOpen: boolean; onClose: () => void }) {
    const location = useLocation()

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 pt-4"
                    onMouseLeave={onClose}
                >
                    <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-xl border border-white/10 shadow-2xl overflow-hidden min-w-[280px]">
                        {/* Gold accent line */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent" />

                        <div className="p-2">
                            {section.items.map((item, idx) => {
                                if (item.divider) {
                                    return <div key={idx} className="my-2 h-px bg-white/10" />
                                }

                                const isActive = location.pathname === item.href

                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href!}
                                        className={`block px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                                ? 'bg-[var(--color-gold)]/10 text-white'
                                                : 'text-white/70 hover:bg-white/5 hover:text-white'
                                            }`}
                                        onClick={onClose}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium text-sm">{item.label}</div>
                                                {item.description && (
                                                    <div className="text-xs text-white/40 mt-0.5">
                                                        {item.description}
                                                    </div>
                                                )}
                                            </div>
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </Link>
                                )
                            })}
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
        }, 150)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-[#050505]/85 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-transparent'
                }`}
        >
            {/* Premium top accent line */}
            <div className={`absolute inset-x-0 top-0 h-px transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
            </div>

            <nav className="container flex items-center justify-between h-20" aria-label="Main navigation">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" aria-label="Zero Foundry Home">
                    <span className="text-xl font-serif text-white transition-all duration-300 group-hover:text-[var(--color-gold)]">
                        Zero Foundry
                    </span>
                </Link>

                {/* Desktop Navigation - Dropdowns */}
                <div className="hidden lg:flex items-center gap-8">
                    {navConfig.map((section) => (
                        <div
                            key={section.label}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(section.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${openDropdown === section.label
                                        ? 'text-white'
                                        : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {section.label}
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === section.label ? 'rotate-180' : ''
                                    }`} />
                            </button>

                            <DropdownMenu
                                section={section}
                                isOpen={openDropdown === section.label}
                                onClose={() => setOpenDropdown(null)}
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-4 py-2 text-white/60 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
                    >
                        Talk to an Expert
                    </Link>
                    <Link
                        to="/platform-demo"
                        className="inline-flex items-center px-5 py-2.5 bg-[var(--color-foreground)] text-[#050505] font-medium text-sm tracking-wide rounded-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,108,0.25)] hover:scale-[1.02]"
                    >
                        Request a Demo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white hover:text-[var(--color-gold)] transition-colors"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileOpen}
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#050505]/98 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
                    >
                        <div className="container py-6 max-h-[80vh] overflow-y-auto">
                            {navConfig.map((section) => (
                                <div key={section.label} className="mb-4">
                                    <button
                                        onClick={() => setMobileExpandedSection(
                                            mobileExpandedSection === section.label ? null : section.label
                                        )}
                                        className="flex items-center justify-between w-full py-3 text-white font-medium"
                                    >
                                        {section.label}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === section.label ? 'rotate-180' : ''
                                            }`} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileExpandedSection === section.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 border-l border-white/10"
                                            >
                                                {section.items.map((item) => {
                                                    if (item.divider) return null
                                                    return (
                                                        <Link
                                                            key={item.href}
                                                            to={item.href!}
                                                            className="block py-2.5 text-white/60 hover:text-white text-sm"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    )
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Mobile CTAs */}
                            <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
                                <Link
                                    to="/contact"
                                    className="block text-center py-3 text-white/70 border border-white/20 rounded-lg"
                                >
                                    Talk to an Expert
                                </Link>
                                <Link
                                    to="/platform-demo"
                                    className="block text-center py-3 bg-white text-[#050505] font-medium rounded-lg"
                                >
                                    Request a Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
