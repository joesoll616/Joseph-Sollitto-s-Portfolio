import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
]

export default function Navbar({ onResumeClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(4, 13, 26, 0.92)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(30,48,80,0.6)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="4" fill="rgba(212,169,64,0.1)" />
            <path
              d="M6 22 L12 14 L18 18 L26 8"
              stroke="#d4a940"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="26" cy="8" r="2" fill="#d4a940" />
          </svg>
          <span
            className="font-display font-semibold text-base tracking-tight"
            style={{ color: '#d4a940' }}
          >
            FP
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.label === 'Resume' ? (
              <button
                key={link.label}
                onClick={onResumeClick}
                className="font-body text-sm font-medium tracking-wider uppercase text-text-secondary hover:text-gold-400 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium tracking-wider uppercase text-text-secondary hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium tracking-wider uppercase text-text-secondary hover:text-gold-400 transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="#contact"
            className="btn-primary text-xs"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h16v1.5H3V5zm0 5.25h16v1.5H3v-1.5zm0 5.25h16V17H3v-1.5z"
                style={{ display: 'none' }}
              />
            ) : null}
            {menuOpen ? (
              <path d="M4 4l14 14M4 18L18 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            ) : (
              <>
                <rect y="4" width="22" height="1.8" rx="1" />
                <rect y="10" width="22" height="1.8" rx="1" />
                <rect y="16" width="22" height="1.8" rx="1" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(4,13,26,0.97)', borderBottom: '1px solid rgba(30,48,80,0.6)' }}
        >
          {NAV_LINKS.map((link) =>
            link.label === 'Resume' ? (
              <button
                key={link.label}
                onClick={() => { setMenuOpen(false); onResumeClick?.() }}
                className="font-body text-sm font-medium tracking-wider uppercase text-text-secondary text-left"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium tracking-wider uppercase text-text-secondary"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium tracking-wider uppercase text-text-secondary"
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </header>
  )
}
