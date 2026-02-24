const TICKER_DATA = [
  { symbol: 'NVDA', price: '495.22', change: '+3.41%', up: true },
  { symbol: 'MSFT', price: '378.85', change: '+0.82%', up: true },
  { symbol: 'SPY', price: '487.60', change: '-0.14%', up: false },
  { symbol: 'GS', price: '412.30', change: '+1.27%', up: true },
  { symbol: 'QQQ', price: '421.44', change: '+0.66%', up: true },
  { symbol: 'BRK.B', price: '357.90', change: '-0.23%', up: false },
  { symbol: 'JPM', price: '189.55', change: '+0.95%', up: true },
  { symbol: 'AAPL', price: '192.18', change: '+0.38%', up: true },
  { symbol: 'NVDA', price: '495.22', change: '+3.41%', up: true },
  { symbol: 'MSFT', price: '378.85', change: '+0.82%', up: true },
  { symbol: 'SPY', price: '487.60', change: '-0.14%', up: false },
  { symbol: 'GS', price: '412.30', change: '+1.27%', up: true },
  { symbol: 'QQQ', price: '421.44', change: '+0.66%', up: true },
  { symbol: 'BRK.B', price: '357.90', change: '-0.23%', up: false },
  { symbol: 'JPM', price: '189.55', change: '+0.95%', up: true },
  { symbol: 'AAPL', price: '192.18', change: '+0.38%', up: true },
]

export default function TickerBanner() {
  return (
    <div
      className="w-full overflow-hidden border-b"
      style={{
        background: 'rgba(7,20,40,0.95)',
        borderColor: 'rgba(30,48,80,0.6)',
        height: '34px',
      }}
    >
      <div
        className="flex items-center h-full gap-8 whitespace-nowrap"
        style={{ animation: 'ticker 35s linear infinite', width: 'max-content' }}
      >
        {TICKER_DATA.map((t, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-xs">
            <span className="font-medium" style={{ color: '#8ba0bc' }}>
              {t.symbol}
            </span>
            <span style={{ color: '#e8edf5' }}>{t.price}</span>
            <span style={{ color: t.up ? '#4ade80' : '#f87171' }}>{t.change}</span>
            <span style={{ color: 'rgba(30,48,80,0.8)', marginLeft: '8px' }}>|</span>
          </span>
        ))}
      </div>
    </div>
  )
}
