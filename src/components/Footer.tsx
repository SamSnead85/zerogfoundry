import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react'

const footerLinks = {
    company: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ],
    resources: [
        { label: 'Methodology', href: '/methodology' },
        { label: 'Insights', href: '/insights' },
    ],
    legal: [
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
        <footer className="bg-[var(--color-background-alt)] border-t border-[var(--color-border)]">
            <div className="container py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img src="/logo.svg" alt="Zero G Foundry" className="h-8 w-auto" />
                        </Link>
                        <p className="text-[var(--color-muted)] mb-6 max-w-sm">
                            Elite AI transformation consultancy delivering guaranteed outcomes for Fortune 1000 companies.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-card)] text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-card-hover)] transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-muted)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-muted)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-[var(--color-muted)]">
                                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <a href="mailto:contact@zerogfoundry.com" className="hover:text-white transition-colors">
                                    contact@zerogfoundry.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-[var(--color-muted)]">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[var(--color-muted)] text-sm">
                        &copy; {currentYear} Zero G Foundry. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-[var(--color-muted)] hover:text-white text-sm transition-colors"
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
