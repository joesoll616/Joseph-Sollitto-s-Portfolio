const CATEGORY_COLORS = {
  Equities: { bg: 'rgba(74,222,128,0.08)', text: '#4ade80', border: 'rgba(74,222,128,0.2)' },
  Models: { bg: 'rgba(99,179,237,0.08)', text: '#63b3ed', border: 'rgba(99,179,237,0.2)' },
  Code: { bg: 'rgba(167,139,250,0.08)', text: '#a78bfa', border: 'rgba(167,139,250,0.2)' },
}

const RATING_COLORS = {
  BUY: { text: '#4ade80', bg: 'rgba(74,222,128,0.1)' },
  HOLD: { text: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
  SELL: { text: '#f87171', bg: 'rgba(248,113,113,0.1)' },
  'N/A': { text: '#4a6080', bg: 'rgba(74,96,128,0.1)' },
}

export default function ProjectCard({ project, onClick, index }) {
  const cat = CATEGORY_COLORS[project.category] || CATEGORY_COLORS.Equities
  const rating = RATING_COLORS[project.rating] || RATING_COLORS['N/A']

  return (
    <article
      className="animate-fade-up cursor-pointer group relative overflow-hidden rounded"
      style={{
        animationDelay: `${index * 0.1}s`,
        background: 'linear-gradient(145deg, #0f1e34 0%, #0a1628 100%)',
        border: '1px solid rgba(30,48,80,0.8)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onClick={() => onClick(project)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(212,169,64,0.08)'
        e.currentTarget.style.borderColor = 'rgba(212,169,64,0.25)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(30,48,80,0.8)'
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #d4a940, transparent)' }}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-mono text-xs px-2 py-1 rounded-sm"
              style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}
            >
              {project.category}
            </span>
            {project.ticker !== 'N/A' && project.ticker !== 'PRIVATE' && (
              <span
                className="font-mono text-xs px-2 py-1 rounded-sm"
                style={{
                  background: 'rgba(212,169,64,0.08)',
                  color: '#d4a940',
                  border: '1px solid rgba(212,169,64,0.2)',
                }}
              >
                {project.ticker}
              </span>
            )}
          </div>
          <span className="font-mono text-xs" style={{ color: '#4a6080' }}>
            {project.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-display font-semibold text-lg mb-3 leading-tight group-hover:text-gold-400 transition-colors duration-200"
          style={{ color: '#e8edf5' }}
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p className="font-body text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: '#8ba0bc' }}>
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded-sm"
              style={{
                background: 'rgba(30,48,80,0.5)',
                color: '#4a6080',
                border: '1px solid rgba(30,48,80,0.8)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer metrics */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid rgba(30,48,80,0.6)' }}
        >
          {project.rating !== 'N/A' ? (
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs font-medium px-2 py-1 rounded-sm"
                style={{ background: rating.bg, color: rating.text }}
              >
                {project.rating}
              </span>
              <span className="font-mono text-xs" style={{ color: '#4ade80' }}>
                ↑ {project.upside}
              </span>
            </div>
          ) : (
            <span className="font-mono text-xs" style={{ color: '#4a6080' }}>
              {project.upside}
            </span>
          )}
          <span
            className="font-mono text-xs group-hover:text-gold-400 transition-colors duration-200"
            style={{ color: '#4a6080' }}
          >
            View Analysis →
          </span>
        </div>
      </div>
    </article>
  )
}
