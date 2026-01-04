import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Assessment', href: '/assessment' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
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
    }, [location])

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
                {/* Logo with premium styling */}
                <Link to="/" className="flex items-center gap-3 group" aria-label="Zero G Foundry Home">
                    <span className="text-xl font-serif text-white transition-all duration-300 group-hover:text-[var(--color-gold)]">
                        Zero G Foundry
                    </span>
                </Link>

                {/* Desktop Navigation - Premium Links */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`relative text-sm font-medium transition-colors duration-300 ${location.pathname === link.href
                                ? 'text-white'
                                : 'text-white/50 hover:text-white'
                                }`}
                        >
                            {link.label}
                            {/* Active indicator with glow */}
                            {location.pathname === link.href && (
                                <motion.div
                                    layoutId="navIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-aurora-teal)]"
                                    style={{ boxShadow: '0 0 10px rgba(201, 168, 108, 0.5)' }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA - Premium Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-2.5 bg-[var(--color-foreground)] text-[#050505] font-medium text-sm tracking-wide rounded-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,108,0.25)] hover:scale-[1.02]"
                    >
                        Get Started
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

            {/* Mobile Navigation - Premium Glass Panel */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/5"
                    >
                        <div className="container py-8 flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        className={`block text-lg font-medium py-2 transition-colors ${location.pathname === link.href
                                            ? 'text-[var(--color-gold)]'
                                            : 'text-white/60 hover:text-white'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-6 border-t border-white/10">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[var(--color-foreground)] text-[#050505] font-medium text-sm tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,108,0.25)]"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
