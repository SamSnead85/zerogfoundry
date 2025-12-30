import { motion } from 'framer-motion'
import { Section, Card, ScrollReveal } from '../components'

export default function Terms() {
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
                        <h1 className="text-display text-[var(--color-foreground)] mb-6">Terms of Service</h1>
                        <p className="text-[var(--color-muted)]">
                            Last updated: December 27, 2024
                        </p>
                    </motion.div>

                    <ScrollReveal>
                        <Card padding="lg">
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
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>
        </>
    )
}
