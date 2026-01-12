import { Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components'

export default function NotFound() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg text-center"
            >
                {/* 404 Display */}
                <div className="relative mb-8">
                    <span className="text-[180px] font-serif font-bold text-[var(--color-card)] leading-none select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-serif text-[var(--color-gold)]">404</span>
                    </div>
                </div>

                <h1 className="text-3xl font-serif text-white mb-4">Page Not Found</h1>
                <p className="text-lg text-[var(--color-muted)] mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Button to="/" icon={<Home className="w-4 h-4" />}>
                        Go Home
                    </Button>
                    <Button to="/contact" variant="secondary" icon={<Search className="w-4 h-4" />}>
                        Contact Us
                    </Button>
                </div>

                {/* Quick Links */}
                <div className="pt-8 border-t border-[var(--color-border)]">
                    <p className="text-sm text-[var(--color-muted)] mb-4">Popular destinations:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: 'Assessment', href: '/assessment' },
                            { label: 'Case Studies', href: '/client-success' },
                            { label: 'Methodology', href: '/methodology' },
                            { label: 'ROI Calculator', href: '/roi-calculator' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-sm text-[var(--color-accent)] hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
