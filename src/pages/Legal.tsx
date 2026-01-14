import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Card, ScrollReveal } from '../components'

type TabType = 'privacy' | 'terms'

export default function Legal() {
    const [activeTab, setActiveTab] = useState<TabType>('privacy')

    return (
        <>
            <Section className="pt-16 pb-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-eyebrow mb-6">Legal</p>
                        <h1 className="text-display text-[var(--color-foreground)] mb-6">Legal Information</h1>
                        <p className="text-[var(--color-muted)] mb-8">
                            Last updated: December 27, 2024
                        </p>

                        {/* Tab Navigation */}
                        <div className="flex gap-2 mb-8">
                            <button
                                onClick={() => setActiveTab('privacy')}
                                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'privacy'
                                        ? 'bg-[var(--color-foreground)] text-[#0a0a0a]'
                                        : 'bg-[var(--color-card)] text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-card-hover)]'
                                    }`}
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => setActiveTab('terms')}
                                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'terms'
                                        ? 'bg-[var(--color-foreground)] text-[#0a0a0a]'
                                        : 'bg-[var(--color-card)] text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-card-hover)]'
                                    }`}
                            >
                                Terms of Service
                            </button>
                        </div>
                    </motion.div>

                    <ScrollReveal>
                        <Card padding="lg">
                            {activeTab === 'privacy' ? (
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
                            ) : (
                                <div className="prose prose-invert max-w-none">
                                    <h2 className="text-white text-xl font-semibold mb-4">1. Agreement to Terms</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        By accessing or using the Zero G Foundry website and services, you agree to be
                                        bound by these Terms of Service. If you do not agree to these terms, please do
                                        not use our services.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">2. Services Description</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        Zero G Foundry provides AI transformation consulting services, including but not
                                        limited to AI strategy development, implementation, and optimization for enterprise
                                        clients. Specific services are defined in individual client agreements.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">3. Use of Website</h2>
                                    <p className="text-[var(--color-muted)] mb-4">You agree to use our website only for lawful purposes and in accordance with these terms. You agree not to:</p>
                                    <ul className="list-disc pl-6 text-[var(--color-muted)] space-y-2 mb-6">
                                        <li>Use the website in any way that violates applicable laws or regulations</li>
                                        <li>Attempt to gain unauthorized access to any part of the website</li>
                                        <li>Interfere with or disrupt the website or servers</li>
                                        <li>Transmit any malicious code or harmful content</li>
                                        <li>Collect or harvest any information from the website without permission</li>
                                    </ul>

                                    <h2 className="text-white text-xl font-semibold mb-4">4. Intellectual Property</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        All content on this website, including text, graphics, logos, and software, is
                                        the property of Zero G Foundry or its licensors and is protected by intellectual
                                        property laws. You may not reproduce, distribute, or create derivative works
                                        without our written permission.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">5. Confidentiality</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        Any confidential information shared during our engagement is protected under
                                        separate confidentiality agreements. Our methodology and proprietary processes
                                        are trade secrets and may not be disclosed or replicated.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        To the maximum extent permitted by law, Zero G Foundry shall not be liable for
                                        any indirect, incidental, special, or consequential damages arising from your
                                        use of our website or services. Our total liability shall not exceed the amount
                                        paid by you for the specific services giving rise to the claim.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        Our website and content are provided "as is" without warranties of any kind,
                                        either express or implied. We do not guarantee that the website will be
                                        uninterrupted, secure, or error-free.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">8. Indemnification</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        You agree to indemnify and hold Zero G Foundry harmless from any claims, losses,
                                        or damages arising from your violation of these terms or your use of our services.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">9. Governing Law</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        These terms shall be governed by the laws of the State of Delaware, without
                                        regard to conflict of law principles. Any disputes shall be resolved in the
                                        courts of Delaware.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">10. Changes to Terms</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        We reserve the right to modify these terms at any time. Changes will be posted
                                        on this page with an updated revision date. Continued use of our services
                                        constitutes acceptance of modified terms.
                                    </p>

                                    <h2 className="text-white text-xl font-semibold mb-4">11. Contact</h2>
                                    <p className="text-[var(--color-muted)]">
                                        For questions about these Terms of Service, please contact us at:
                                        <a href="mailto:legal@zerogfoundry.com" className="text-[var(--color-accent)] hover:underline"> legal@zerogfoundry.com</a>
                                    </p>
                                </div>
                            )}
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>
        </>
    )
}
