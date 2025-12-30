import { motion } from 'framer-motion'
import { Section, Card, ScrollReveal } from '../components'

export default function Privacy() {
    return (
        <>
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Legal</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-6">Privacy Policy</h1>
                        <p className="text-[var(--color-muted)]">
                            Last updated: December 27, 2024
                        </p>
                    </motion.div>

                    <ScrollReveal>
                        <Card padding="lg">
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-white text-xl font-semibold mb-4">1. Introduction</h2>
                                <p className="text-[var(--color-muted)] mb-6">
                                    Zero G Foundry ("we," "our," or "us") respects your privacy and is committed to
                                    protecting your personal data. This privacy policy explains how we collect, use,
                                    and safeguard your information when you visit our website or use our services.
                                </p>

                                <h2 className="text-white text-xl font-semibold mb-4">2. Information We Collect</h2>
                                <p className="text-[var(--color-muted)] mb-4">We may collect the following types of information:</p>
                                <ul className="list-disc pl-6 text-[var(--color-muted)] space-y-2 mb-6">
                                    <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, company name, and job title when you submit forms on our website.</li>
                                    <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
                                    <li><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                                    <li><strong className="text-white">Communication Data:</strong> Records of correspondence when you contact us.</li>
                                </ul>

                                <h2 className="text-white text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                                <p className="text-[var(--color-muted)] mb-4">We use your information to:</p>
                                <ul className="list-disc pl-6 text-[var(--color-muted)] space-y-2 mb-6">
                                    <li>Respond to your inquiries and provide requested services</li>
                                    <li>Send relevant communications about our services</li>
                                    <li>Improve our website and user experience</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Protect against fraudulent or unauthorized activity</li>
                                </ul>

                                <h2 className="text-white text-xl font-semibold mb-4">4. Data Sharing</h2>
                                <p className="text-[var(--color-muted)] mb-6">
                                    We do not sell your personal information. We may share data with trusted service
                                    providers who assist us in operating our website and conducting our business,
                                    subject to confidentiality agreements.
                                </p>

                                <h2 className="text-white text-xl font-semibold mb-4">5. Data Security</h2>
                                <p className="text-[var(--color-muted)] mb-6">
                                    We implement appropriate technical and organizational measures to protect your
                                    personal data against unauthorized access, alteration, disclosure, or destruction.
                                </p>

                                <h2 className="text-white text-xl font-semibold mb-4">6. Your Rights</h2>
                                <p className="text-[var(--color-muted)] mb-4">Depending on your location, you may have the right to:</p>
                                <ul className="list-disc pl-6 text-[var(--color-muted)] space-y-2 mb-6">
                                    <li>Access your personal data</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to processing of your data</li>
                                    <li>Request data portability</li>
                                </ul>

                                <h2 className="text-white text-xl font-semibold mb-4">7. Cookies</h2>
                                <p className="text-[var(--color-muted)] mb-6">
                                    We use cookies and similar technologies to enhance your experience on our website.
                                    You can control cookie settings through your browser preferences.
                                </p>

                                <h2 className="text-white text-xl font-semibold mb-4">8. Contact Us</h2>
                                <p className="text-[var(--color-muted)]">
                                    If you have questions about this privacy policy or your personal data, please
                                    contact us at: <a href="mailto:privacy@zerogfoundry.com" className="text-[var(--color-accent)] hover:underline">privacy@zerogfoundry.com</a>
                                </p>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>
        </>
    )
}
