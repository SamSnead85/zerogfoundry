import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Assessment', href: '/assessment' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <nav className="container flex items-center justify-between h-20" aria-label="Main navigation">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3" aria-label="Zero G Foundry Home">
                    <span className="text-xl font-serif text-white">Zero G Foundry</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-sm text-white/50 hover:text-white transition-colors ${location.pathname === link.href ? 'text-white' : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/contact" className="btn-executive">
                        Get Started
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
                        className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`block text-white/60 hover:text-white py-2 ${location.pathname === link.href ? 'text-white' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <Link to="/contact" className="btn-executive w-full text-center">
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
