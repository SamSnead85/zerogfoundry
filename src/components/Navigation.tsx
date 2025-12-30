import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Our Approach', href: '/our-approach' },
    {
        label: 'Solutions',
        children: [
            { label: 'Healthcare', href: '/solutions/healthcare' },
            { label: 'Financial Services', href: '/solutions/financial-services' },
        ],
    },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const location = useLocation()

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
    }, [location])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}
        >
            <nav className="container flex items-center justify-between h-20" aria-label="Main navigation">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2" aria-label="Zero G Foundry Home">
                    <img src="/logo.svg" alt="Zero G Foundry" className="h-8 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative">
                            {link.children ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(link.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        className="flex items-center gap-1 text-[var(--color-muted)] hover:text-white transition-colors py-2"
                                        aria-expanded={openDropdown === link.label}
                                        aria-haspopup="true"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openDropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full left-0 mt-2 py-2 min-w-[200px] glass-strong rounded-lg shadow-xl"
                                            >
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        to={child.href}
                                                        className="block px-4 py-2 text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-card)] transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    to={link.href}
                                    className={`text-[var(--color-muted)] hover:text-white transition-colors ${location.pathname === link.href ? 'text-white' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/contact" className="btn btn-primary">
                        Schedule Assessment
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white"
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
                        className="lg:hidden glass-strong border-t border-[var(--color-border)]"
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <div key={link.label}>
                                    {link.children ? (
                                        <div>
                                            <button
                                                className="flex items-center justify-between w-full text-[var(--color-muted)] py-2"
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                                                }
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openDropdown === link.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-4 flex flex-col gap-2 mt-2"
                                                    >
                                                        {link.children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                to={child.href}
                                                                className="text-[var(--color-muted)] hover:text-white py-1"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className={`block text-[var(--color-muted)] hover:text-white py-2 ${location.pathname === link.href ? 'text-white' : ''
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t border-[var(--color-border)]">
                                <Link to="/contact" className="btn btn-primary w-full">
                                    Schedule Assessment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
