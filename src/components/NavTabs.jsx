const TABS = [
  { id: 'home', icon: 'ti-flame', label: 'Worst offenders' },
  { id: 'browse', icon: 'ti-building-store', label: 'All companies' },
  { id: 'finder', icon: 'ti-map-pin', label: 'Local finder' },
]

export default function NavTabs({ activeTab, setActiveTab }) {
  return (
    <div style={{ borderBottom: '0.5px solid #e0e0d8', display: 'flex', gap: 0, marginBottom: '1.25rem', overflowX: 'auto' }}>
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <i className={`ti ${tab.icon}`} style={{ marginRight: 4 }} />
          {tab.label}
        </button>
      ))}
    </div>
  )
}
