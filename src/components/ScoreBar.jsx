const COLORS = { labor: '#1D9E75', env: '#378ADD', politics: '#7F77DD' }

export default function ScoreBar({ value, type }) {
  const pct = Math.round((value / 5) * 100)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
      <div style={{ background: '#e0e0d8', borderRadius: 4, height: 6, flex: 1, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: 6, borderRadius: 4, background: COLORS[type] }} />
      </div>
      <span style={{ fontSize: 12, color: '#888780', minWidth: 24 }}>{value}/5</span>
    </div>
  )
}
