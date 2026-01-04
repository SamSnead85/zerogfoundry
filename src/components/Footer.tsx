import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react'

const footerLinks = {
    solutions: [
        { label: 'Industries', href: '/industries' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'ROI Calculator', href: '/roi-calculator' },
        { label: 'Assessment', href: '/assessment' },
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
    ],
    resources: [
        { label: 'Methodology', href: '/methodology' },
        { label: 'Research', href: '/research' },
        { label: 'Insights', href: '/insights' },
        { label: 'FAQ', href: '/faq' },
    ],
    trust: [
        { label: 'Security', href: '/security' },
        { label: 'Privacy Policy', href: '/legal' },
        { label: 'Terms of Service', href: '/legal' },
    ],
}

const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/zerogfoundry', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/zerogfoundry', label: 'Twitter' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-[#030303] border-t border-[var(--color-border)] overflow-hidden">
            {/* Premium gradient accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />

            {/* Subtle corner glow */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
                style={{
                    background: 'radial-gradient(circle at 100% 0%, rgba(79, 255, 237, 0.04) 0%, transparent 50%)',
                }}
            />

            <div className="container relative z-10 py-20">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link to="/" className="inline-block mb-5">
                            <span className="text-2xl font-serif text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors duration-300">
                                Zero G Foundry
                            </span>
                        </Link>
                        <p className="text-[var(--color-muted)] mb-8 max-w-sm leading-relaxed">
                            Elite AI transformation consultancy delivering guaranteed outcomes for enterprise clients.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--color-glass)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/30 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-5">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-5">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-5">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-5">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[var(--color-muted)]">
                                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <a href="mailto:contact@zerogfoundry.com" className="hover:text-[var(--color-foreground)] transition-colors duration-300">
                                    contact@zerogfoundry.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-[var(--color-muted)]">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[var(--color-subtle)] text-sm">
                        &copy; {currentYear} Zero G Foundry. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {footerLinks.trust.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="text-[var(--color-subtle)] hover:text-[var(--color-muted)] text-sm transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
