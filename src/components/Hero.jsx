import { useEffect, useState } from 'react'

const STATS = [
  { label: 'Models Built', value: '12+' },
  { label: 'Coverage Universe', value: '40+' },
  { label: 'Avg IRR Target', value: '25%' },
  { label: 'Asset Classes', value: '3' },
]

export default function Hero({ onViewWork }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"
        style={{ backgroundSize: '48px 48px' }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,169,64,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Chart lines decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <polyline
            points="0,400 80,360 160,380 240,280 320,300 400,180 480,220 560,100 600,120"
            fill="none"
            stroke="#d4a940"
            strokeWidth="1.5"
          />
          <polyline
            points="0,460 80,440 160,450 240,380 320,400 400,300 480,320 560,200 600,210"
            fill="none"
            stroke="#4a6080"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: '#d4a940' }} />
            <span className="section-label">Equity Research & Financial Analysis</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] mb-6 max-w-3xl">
            <span style={{ color: '#e8edf5' }}>Your Name</span>
            <br />
            <span className="gold-text italic">Analyst & Model Builder</span>
          </h1>

          {/* Sub */}
          <p
            className="font-body text-lg leading-relaxed max-w-xl mb-10"
            style={{ color: '#8ba0bc' }}
          >
            Fundamental equity research, leveraged buyout models, and quantitative 
            portfolio tools. Grounded in rigorous financial analysis, built for 
            institutional clarity.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button onClick={onViewWork} className="btn-primary">
              View Work
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div
                  className="font-display font-semibold text-3xl mb-1"
                  style={{ color: '#d4a940' }}
                >
                  {s.value}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase" style={{ color: '#4a6080' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#4a6080' }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, #d4a940, transparent)',
          }}
        />
      </div>
    </section>
  )
}
