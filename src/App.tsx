import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation, Footer, ScrollProgress, AnimatedBackground } from './components'

// Pages
import Home from './pages/Home'
import Approach from './pages/Approach'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Assessment from './pages/Assessment'
import Research from './pages/Research'
import ROICalculator from './pages/ROICalculator'

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
            <Route path="/roi-calculator" element={<ROICalculator />} />

            {/* Redirects for old routes */}
            <Route path="/our-approach" element={<Navigate to="/methodology" replace />} />
            <Route path="/solutions" element={<Navigate to="/" replace />} />
            <Route path="/solutions/*" element={<Navigate to="/" replace />} />
            <Route path="/case-studies" element={<Navigate to="/methodology" replace />} />
            <Route path="/careers" element={<Navigate to="/about" replace />} />
            <Route path="/investors" element={<Navigate to="/contact" replace />} />
            <Route path="/privacy" element={<Navigate to="/legal" replace />} />
            <Route path="/terms" element={<Navigate to="/legal" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
