import { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'

const FILTERS = ['All', 'Equities', 'Models', 'Code']

export default function PortfolioGrid({ onProjectClick }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#d4a940' }} />
            <span className="section-label">Selected Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="font-display font-semibold text-4xl"
              style={{ color: '#e8edf5' }}
            >
              Research & <span className="gold-text">Models</span>
            </h2>

            {/* Filter tabs */}
            <div
              className="flex gap-1 p-1 rounded-sm"
              style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(30,48,80,0.6)' }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="px-4 py-1.5 font-mono text-xs tracking-widest uppercase rounded-sm transition-all duration-200"
                  style={
                    active === f
                      ? {
                          background: 'rgba(212,169,64,0.15)',
                          color: '#d4a940',
                          border: '1px solid rgba(212,169,64,0.25)',
                        }
                      : { color: '#4a6080', border: '1px solid transparent' }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-sm" style={{ color: '#4a6080' }}>
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
