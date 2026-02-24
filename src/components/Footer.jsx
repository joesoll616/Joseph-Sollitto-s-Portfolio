const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H17.05v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.663V9h3.252v1.464h.046c.453-.857 1.56-1.76 3.21-1.76 3.434 0 4.068 2.26 4.068 5.2v6.548zM5.337 7.433a1.89 1.89 0 11-.001-3.778 1.89 1.89 0 010 3.778zm1.628 13.019H3.71V9h3.255v11.452zM22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.79 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:your@email.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-16"
      style={{ borderTop: '1px solid rgba(30,48,80,0.6)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="4" fill="rgba(212,169,64,0.1)" />
                <path d="M6 22 L12 14 L18 18 L26 8" stroke="#d4a940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="26" cy="8" r="2" fill="#d4a940" />
              </svg>
              <span className="font-display font-semibold text-base" style={{ color: '#d4a940' }}>
                Your Name
              </span>
            </div>
            <p className="font-body text-sm" style={{ color: '#4a6080' }}>
              Equity Research · Financial Modeling · Quantitative Analysis
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm transition-all duration-200"
                style={{
                  color: '#8ba0bc',
                  border: '1px solid rgba(30,48,80,0.6)',
                  background: 'rgba(10,22,40,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d4a940'
                  e.currentTarget.style.borderColor = 'rgba(212,169,64,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8ba0bc'
                  e.currentTarget.style.borderColor = 'rgba(30,48,80,0.6)'
                }}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(30,48,80,0.4)' }}
        >
          <span className="font-mono text-xs" style={{ color: '#4a6080' }}>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </span>
          <span className="font-mono text-xs" style={{ color: '#1e3050' }}>
            Built with React + Vite + Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
