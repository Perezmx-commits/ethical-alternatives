export default function Header() {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
        <i className="ti ti-leaf" style={{ fontSize: 24, color: '#1D9E75' }} />
        <span style={{ fontSize: 22, fontWeight: 500 }}>Ethical Alternatives</span>
      </div>
      <p style={{ fontSize: 13, color: '#5F5E5A' }}>
        Browse companies, check their ethics grade, and find better alternatives.
      </p>
    </div>
  )
}
