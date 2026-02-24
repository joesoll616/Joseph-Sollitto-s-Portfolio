import { useEffect } from 'react'

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto py-8 px-4"
      style={{ background: 'rgba(4,13,26,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-3xl rounded"
        style={{
          background: 'linear-gradient(160deg, #0f1e34 0%, #0a1628 100%)',
          border: '1px solid rgba(30,48,80,0.8)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
        }}
      >
        {/* Gold top bar */}
        <div
          className="h-[3px] rounded-t"
          style={{ background: 'linear-gradient(90deg, #d4a940, rgba(212,169,64,0.2), transparent)' }}
        />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-sm transition-colors"
            style={{ color: '#4a6080', border: '1px solid rgba(30,48,80,0.6)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#d4a940'; e.currentTarget.style.borderColor = 'rgba(212,169,64,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#4a6080'; e.currentTarget.style.borderColor = 'rgba(30,48,80,0.6)' }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="section-label">{project.category}</span>
              {project.ticker !== 'N/A' && project.ticker !== 'PRIVATE' && (
                <>
                  <span style={{ color: '#1e3050' }}>·</span>
                  <span className="font-mono text-xs" style={{ color: '#d4a940' }}>{project.ticker}</span>
                </>
              )}
              <span style={{ color: '#1e3050' }}>·</span>
              <span className="font-mono text-xs" style={{ color: '#4a6080' }}>{project.date}</span>
            </div>
            <h2 className="font-display font-semibold text-3xl leading-tight mb-3" style={{ color: '#e8edf5' }}>
              {project.title}
            </h2>
            <p className="font-body text-base leading-relaxed" style={{ color: '#8ba0bc' }}>
              {project.summary}
            </p>
          </div>

          {/* Metrics row */}
          {project.rating !== 'N/A' && (
            <div
              className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-sm"
              style={{ background: 'rgba(7,20,40,0.7)', border: '1px solid rgba(30,48,80,0.6)' }}
            >
              <div>
                <div className="font-mono text-xs mb-1" style={{ color: '#4a6080' }}>RATING</div>
                <div
                  className="font-mono font-medium text-lg"
                  style={{ color: project.rating === 'BUY' ? '#4ade80' : project.rating === 'SELL' ? '#f87171' : '#fbbf24' }}
                >
                  {project.rating}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs mb-1" style={{ color: '#4a6080' }}>TARGET</div>
                <div className="font-mono font-medium text-lg" style={{ color: '#e8edf5' }}>{project.targetPrice}</div>
              </div>
              <div>
                <div className="font-mono text-xs mb-1" style={{ color: '#4a6080' }}>UPSIDE</div>
                <div className="font-mono font-medium text-lg" style={{ color: '#4ade80' }}>↑ {project.upside}</div>
              </div>
            </div>
          )}

          {/* Investment thesis */}
          <div className="mb-8">
            <h3
              className="font-display font-semibold text-lg mb-4"
              style={{ color: '#e8edf5', borderBottom: '1px solid rgba(30,48,80,0.6)', paddingBottom: '8px' }}
            >
              Investment Thesis
            </h3>
            <ol className="space-y-3">
              {project.thesis.map((point, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="font-mono text-xs mt-1 shrink-0 w-5 h-5 flex items-center justify-center rounded-sm"
                    style={{
                      background: 'rgba(212,169,64,0.1)',
                      color: '#d4a940',
                      border: '1px solid rgba(212,169,64,0.2)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#8ba0bc' }}>
                    {point}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* DCF / Model highlights */}
          <div className="mb-8">
            <h3
              className="font-display font-semibold text-lg mb-4"
              style={{ color: '#e8edf5', borderBottom: '1px solid rgba(30,48,80,0.6)', paddingBottom: '8px' }}
            >
              Model Methodology
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(project.dcfHighlights)
                .filter(([k]) => k !== 'model')
                .map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-sm"
                    style={{ background: 'rgba(7,20,40,0.7)', border: '1px solid rgba(30,48,80,0.5)' }}
                  >
                    <div className="font-mono text-xs mb-1 uppercase tracking-widest" style={{ color: '#4a6080' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="font-mono font-medium text-sm" style={{ color: '#d4a940' }}>{val}</div>
                  </div>
                ))}
            </div>
            {project.dcfHighlights.model && (
              <p className="mt-3 font-body text-sm leading-relaxed" style={{ color: '#8ba0bc' }}>
                {project.dcfHighlights.model}
              </p>
            )}
          </div>

          {/* Key risks */}
          <div>
            <h3
              className="font-display font-semibold text-lg mb-4"
              style={{ color: '#e8edf5', borderBottom: '1px solid rgba(30,48,80,0.6)', paddingBottom: '8px' }}
            >
              Key Risks
            </h3>
            <ul className="space-y-2">
              {project.keyRisks.map((risk, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs mt-0.5" style={{ color: '#f87171' }}>⚠</span>
                  <span className="font-body text-sm" style={{ color: '#8ba0bc' }}>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
