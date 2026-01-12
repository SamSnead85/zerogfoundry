import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation, Footer, ScrollProgress, AnimatedBackground, FloatingCTA, SocialProofNotifications } from './components'

// Engagement Components
import ChatWidget from './components/ChatWidget'
import ExitIntent from './components/ExitIntent'
import BackToTop from './components/BackToTop'

// Pages
import Home from './pages/Home'
import Approach from './pages/Approach'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Assessment from './pages/Assessment'
import AssessmentV2 from './pages/AssessmentV2'
import Research from './pages/Research'
import ROICalculator from './pages/ROICalculator'
import CaseStudies from './pages/CaseStudies'
import Industries from './pages/Industries'
import Security from './pages/Security'
import FAQ from './pages/FAQ'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Partners from './pages/Partners'

// Phase 61-80 Pages
import AIEthics from './pages/AIEthics'
import TechRadar from './pages/TechRadar'
import Playbooks from './pages/Playbooks'
import ExecutiveBriefing from './pages/ExecutiveBriefing'

// Phase 81-180 Pages (VC-Ready Enhancement)
import Investors from './pages/Investors'
import Press from './pages/Press'
import ClientSuccess from './pages/ClientSuccess'
import Blog from './pages/Blog'
import Awards from './pages/Awards'
import Webinars from './pages/Webinars'
import Whitepapers from './pages/Whitepapers'
import Compliance from './pages/Compliance'

// Phase 181-280 Pages (Extended Enhancement)
import AIMaturityScan from './pages/AIMaturityScan'
import ROICalculatorV2 from './pages/ROICalculatorV2'
import PartnersV2 from './pages/PartnersV2'
import Testimonials from './pages/Testimonials'
import PlatformDemo from './pages/PlatformDemo'
import Accessibility from './pages/Accessibility'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Premium Animated Background */}
        <AnimatedBackground />

        {/* Premium Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/methodology" element={<Approach />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/assessment-v2" element={<AssessmentV2 />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/security" element={<Security />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partners" element={<Partners />} />

            {/* Phase 61-80 Routes */}
            <Route path="/ai-ethics" element={<AIEthics />} />
            <Route path="/tech-radar" element={<TechRadar />} />
            <Route path="/playbooks" element={<Playbooks />} />
            <Route path="/executive-briefing" element={<ExecutiveBriefing />} />

            {/* Phase 81-180 Routes (VC-Ready Enhancement) */}
            <Route path="/investors" element={<Investors />} />
            <Route path="/press" element={<Press />} />
            <Route path="/client-success" element={<ClientSuccess />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:articleId" element={<Blog />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/whitepapers" element={<Whitepapers />} />
            <Route path="/compliance" element={<Compliance />} />

            {/* Phase 181-280 Routes (Extended Enhancement) */}
            <Route path="/ai-maturity-scan" element={<AIMaturityScan />} />
            <Route path="/roi-calculator-v2" element={<ROICalculatorV2 />} />
            <Route path="/partners-v2" element={<PartnersV2 />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/platform-demo" element={<PlatformDemo />} />
            <Route path="/accessibility" element={<Accessibility />} />

            {/* Redirects for old routes */}
            <Route path="/our-approach" element={<Navigate to="/methodology" replace />} />
            <Route path="/solutions" element={<Navigate to="/industries" replace />} />
            <Route path="/solutions/*" element={<Navigate to="/industries" replace />} />
            <Route path="/privacy" element={<Navigate to="/legal" replace />} />
            <Route path="/terms" element={<Navigate to="/legal" replace />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        {/* Engagement Components */}
        <ChatWidget />
        <ExitIntent />
        <BackToTop />
        <FloatingCTA />
        <SocialProofNotifications />
      </div>
    </BrowserRouter>
  )
}

export default App

