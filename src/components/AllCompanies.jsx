import { useState } from 'react'
import { companies } from '../data/companies'
import GradeBadge from './GradeBadge'
import FavoriteButton from './FavoriteButton'

const SECTORS = ['Retail', 'Tech', 'Food', 'Fashion', 'Energy', 'Finance', 'Auto']

export default function AllCompanies({ favorites, onToggleFavorite, onShowProfile }) {
  const [query, setQuery] = useState('')
  const [gradeFilter, setGradeFilter] = useState('all')
  const [catFilter, setCatFilter] = useState('all')

  const filtered = companies.filter(c => {
    const q = query.toLowerCase()
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.sector.toLowerCase().includes(q)
    const matchG = gradeFilter === 'all' ? true : gradeFilter === 'U' ? c.grade === 'U' : c.grade === gradeFilter
    const matchC = catFilter === 'all' ? true : catFilter === 'Ungraded' ? c.grade === 'U' : c.sector === catFilter
    return matchQ && matchG && matchC
  })

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: '0.75rem' }}>
        <input
          type="text"
          placeholder="Search companies or sectors..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <CatBtn label="All sectors" active={catFilter === 'all'} onClick={() => setCatFilter('all')} />
        {SECTORS.map(s => (
          <CatBtn key={s} label={s === 'Food' ? 'Food & Beverage' : s} active={catFilter === s} onClick={() => setCatFilter(s)} />
        ))}
        <CatBtn label="Ungraded" active={catFilter === 'Ungraded'} onClick={() => setCatFilter('Ungraded')} />
      </div>

      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: '1rem' }}>
        {['all', 'A', 'B', 'C', 'D', 'F', 'U'].map(g => (
          <button
            key={g}
            className={`filter-btn${gradeFilter === g ? ' active' : ''}`}
            onClick={() => setGradeFilter(g)}
          >
            {g === 'all' ? 'All grades' : g === 'U' ? 'Ungraded' : g}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#888780', fontSize: 14 }}>No companies match your search.</p>
      ) : (
        filtered.map(c => (
          <div key={c.id} className="card" onClick={() => onShowProfile(c.id)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, background: '#F1EFE8',
                border: '0.5px solid #e0e0d8', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 13, fontWeight: 500, color: '#5F5E5A', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                  <span style={{ fontWeight: 500, fontSize: 14 }}>{c.name}</span>
                  <GradeBadge grade={c.grade} size={26} />
                  {c.grade === 'U' && <span style={{ fontSize: 11, color: '#888780' }}>Ungraded</span>}
                </div>
                <span style={{ fontSize: 12, color: '#888780' }}>{c.sector}</span>
              </div>
              <FavoriteButton isFavorited={favorites.includes(c.id)} onToggle={() => onToggleFavorite(c.id)} />
              <i className="ti ti-chevron-right" style={{ color: '#888780', fontSize: 16 }} />
            </div>
            <p style={{ fontSize: 12, color: '#888780', margin: '8px 0 6px', lineHeight: 1.4 }}>
              {c.summary.slice(0, 110)}…
            </p>
            <div>
              {c.tags.slice(0, 2).map(t => <span key={t} className="pill">{t}</span>)}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

function CatBtn({ label, active, onClick }) {
  return <button className={`cat-btn${active ? ' active' : ''}`} onClick={onClick}>{label}</button>
}
