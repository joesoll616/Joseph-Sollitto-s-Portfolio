/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — deep navy + warm gold + slate
        navy: {
          950: '#040d1a',
          900: '#071428',
          800: '#0c1f3f',
          700: '#122a54',
          600: '#1a3a6e',
        },
        gold: {
          400: '#e8c97a',
          500: '#d4a940',
          600: '#b88c20',
          300: '#f0dfa0',
        },
        slate: {
          850: '#1a2232',
          750: '#222d42',
        },
        surface: '#0a1628',
        card: '#0f1e34',
        border: '#1e3050',
        muted: '#4a6080',
        text: {
          primary: '#e8edf5',
          secondary: '#8ba0bc',
          accent: '#d4a940',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(30,48,80,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,48,80,0.4) 1px, transparent 1px)',
        'gold-gradient': 'linear-gradient(135deg, #d4a940 0%, #f0dfa0 50%, #d4a940 100%)',
        'navy-gradient': 'linear-gradient(180deg, #040d1a 0%, #071428 100%)',
        'card-gradient': 'linear-gradient(145deg, #0f1e34 0%, #0a1628 100%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        gold: '0 0 20px rgba(212,169,64,0.15)',
        'gold-lg': '0 0 40px rgba(212,169,64,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212,169,64,0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        shimmer: 'shimmer 2s infinite',
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
