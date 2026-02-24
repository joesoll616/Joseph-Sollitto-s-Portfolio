# Finance Portfolio

A professional single-page portfolio for equity research, financial modeling, and coding projects. Built with **React 18 + Vite + Tailwind CSS**.

---

## ✦ Features

- **Fintech aesthetic** — deep navy palette with gold accents, Playfair Display / DM Sans typography
- **Animated ticker tape** — scrolling mock market data banner
- **Filterable project grid** — filter by Equities, Models, or Code
- **Project detail modal** — investment thesis, DCF methodology, key risks
- **Resume section** — toggle-able from navbar, includes experience, education, skills
- **Fully responsive** — mobile-first, works on all screen sizes
- **Keyboard accessible** — Escape closes modals, focus states throughout

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/finance-portfolio.git
cd finance-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
# Output is in dist/
```

### Preview production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
finance-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with scroll effect
│   │   ├── TickerBanner.jsx    # Market data ticker tape
│   │   ├── Hero.jsx            # Landing section with stats
│   │   ├── PortfolioGrid.jsx   # Filterable project cards
│   │   ├── ProjectCard.jsx     # Individual project card
│   │   ├── ProjectDetail.jsx   # Modal with full analysis
│   │   ├── Resume.jsx          # Experience & education
│   │   └── Footer.jsx          # Contact & social links
│   ├── data/
│   │   └── projects.json       # ← Edit your projects here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js          # Color palette & typography
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Customization

### 1. Update your info

Replace placeholder text throughout:
- **`src/components/Hero.jsx`** — Your Name, tagline, stats
- **`src/components/Resume.jsx`** — Experience, education, skills
- **`src/components/Footer.jsx`** — Name, social URLs
- **`index.html`** — Page `<title>`

### 2. Add real projects

Edit `src/data/projects.json`. Each project follows this schema:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "category": "Equities | Models | Code",
  "ticker": "TICKER or N/A",
  "date": "Q1 2025",
  "rating": "BUY | HOLD | SELL | N/A",
  "targetPrice": "$000",
  "currentPrice": "$000",
  "upside": "00%",
  "summary": "Brief summary shown on card",
  "tags": ["Tag1", "Tag2"],
  "thesis": ["Point 1", "Point 2", "Point 3"],
  "dcfHighlights": {
    "wacc": "9%",
    "terminalGrowthRate": "3%",
    "revenueCAGR": "15%",
    "impliedEV": "$XXB",
    "model": "Description of model approach"
  },
  "keyRisks": ["Risk 1", "Risk 2"]
}
```

### 3. Add more filter categories

In `src/components/PortfolioGrid.jsx`, update the `FILTERS` array.

### 4. Color palette

All colors are in `tailwind.config.js`. Core variables:
- `navy.900` — background
- `gold.500` — primary accent
- `text.secondary` — muted text

---

## 🌐 Deployment

### Vercel (recommended — free, instant)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Add to `vite.config.js`: `base: '/finance-portfolio/'`
4. Run: `npm run build && npm run deploy`

---

## 📄 License

MIT — free to use and adapt for personal portfolio purposes.
