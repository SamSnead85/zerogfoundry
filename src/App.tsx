import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation, Footer, ScrollProgress, AnimatedBackground } from './components'

// Pages
import Home from './pages/Home'
import Approach from './pages/Approach'
import Healthcare from './pages/solutions/Healthcare'
import FinancialServices from './pages/solutions/FinancialServices'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Investors from './pages/Investors'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

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
            <Route path="/our-approach" element={<Approach />} />
            <Route path="/solutions/healthcare" element={<Healthcare />} />
            <Route path="/solutions/financial-services" element={<FinancialServices />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
