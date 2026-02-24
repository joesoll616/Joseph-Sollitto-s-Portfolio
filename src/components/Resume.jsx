const EXPERIENCE = [
  {
    role: 'Equity Research Analyst',
    firm: 'Your Firm Name',
    period: '2023 – Present',
    desc: 'Initiated coverage on 8 Technology & Semiconductor names. Built full DCF and comparable company models. Contributed to published research with buy-side distribution.',
  },
  {
    role: 'Investment Banking Analyst',
    firm: 'Previous Firm',
    period: '2021 – 2023',
    desc: 'Executed M&A advisory and debt capital markets transactions totaling $2.4B. Built LBO, merger, and accretion/dilution models. Prepared management presentations and CIMs.',
  },
  {
    role: 'Finance Intern',
    firm: 'Internship Company',
    period: 'Summer 2020',
    desc: 'Supported senior analysts with financial modeling, industry research, and presentation materials for live deal processes.',
  },
]

const EDUCATION = [
  {
    degree: 'B.S. Finance & Computer Science',
    school: 'University Name',
    year: '2021',
    note: 'Magna Cum Laude · Dean's List · Finance Club President',
  },
]

const SKILLS = [
  'DCF Modeling', 'LBO Modeling', 'Comp Tables', 'Merger Models',
  'Python (Pandas, NumPy)', 'Excel / VBA', 'Bloomberg Terminal',
  'FactSet', 'Capital IQ', 'SQL', 'React / JavaScript',
]

export default function Resume({ isVisible }) {
  return (
    <section
      id="resume"
      className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}`}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(7,20,40,0.5) 50%, transparent)' }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#d4a940' }} />
            <span className="section-label">Background</span>
          </div>
          <h2 className="font-display font-semibold text-4xl" style={{ color: '#e8edf5' }}>
            Experience & <span className="gold-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#4a6080' }}>
              Work History
            </h3>
            <div className="space-y-6">
              {EXPERIENCE.map((e, i) => (
                <div
                  key={i}
                  className="p-5 rounded-sm"
                  style={{
                    background: 'linear-gradient(145deg, rgba(15,30,52,0.6), rgba(10,22,40,0.8))',
                    border: '1px solid rgba(30,48,80,0.6)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="font-display font-semibold text-base" style={{ color: '#e8edf5' }}>
                        {e.role}
                      </div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: '#d4a940' }}>
                        {e.firm}
                      </div>
                    </div>
                    <span className="font-mono text-xs" style={{ color: '#4a6080' }}>
                      {e.period}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#8ba0bc' }}>
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#4a6080' }}>
                Education
              </h3>
              {EDUCATION.map((ed, i) => (
                <div
                  key={i}
                  className="p-4 rounded-sm"
                  style={{
                    background: 'linear-gradient(145deg, rgba(15,30,52,0.6), rgba(10,22,40,0.8))',
                    border: '1px solid rgba(30,48,80,0.6)',
                  }}
                >
                  <div className="font-display font-semibold text-sm mb-1" style={{ color: '#e8edf5' }}>
                    {ed.degree}
                  </div>
                  <div className="font-mono text-xs mb-2" style={{ color: '#d4a940' }}>
                    {ed.school} · {ed.year}
                  </div>
                  <div className="font-body text-xs" style={{ color: '#4a6080' }}>
                    {ed.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#4a6080' }}>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2.5 py-1 rounded-sm"
                    style={{
                      background: 'rgba(10,22,40,0.8)',
                      color: '#8ba0bc',
                      border: '1px solid rgba(30,48,80,0.8)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <a
              href="/resume.pdf"
              className="btn-primary w-full text-center block"
              style={{ textDecoration: 'none' }}
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
