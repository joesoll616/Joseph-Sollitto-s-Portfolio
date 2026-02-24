import { useState } from 'react'
import Navbar from './components/Navbar'
import TickerBanner from './components/TickerBanner'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import ProjectDetail from './components/ProjectDetail'
import Resume from './components/Resume'
import Footer from './components/Footer'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showResume, setShowResume] = useState(false)

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ background: '#040d1a' }}>
      {/* Sticky ticker at very top */}
      <div className="sticky top-0 z-40">
        <TickerBanner />
      </div>

      {/* Navbar below ticker */}
      <Navbar onResumeClick={() => setShowResume((v) => !v)} />

      {/* Main content */}
      <main>
        <Hero onViewWork={handleViewWork} />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(30,48,80,0.8), transparent)' }}
          />
        </div>

        <PortfolioGrid onProjectClick={setSelectedProject} />

        {/* Resume section — toggle visibility */}
        {showResume && <Resume isVisible={showResume} />}
      </main>

      <Footer />

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}
