import { companies } from '../data/companies'
import GradeBadge from './GradeBadge'

const GRADE_RANK = { F: 0, D: 1, C: 2 }

export default function WorstOffenders({ onShowProfile }) {
  const worst = companies
    .filter(c => c.grade === 'F' || c.grade === 'D' || c.grade === 'C')
    .sort((a, b) => (GRADE_RANK[a.grade] ?? 9) - (GRADE_RANK[b.grade] ?? 9))

  return (
    <div>
      <p style={{ fontSize: 13, color: '#5F5E5A', marginBottom: '1rem' }}>
        Companies with the lowest ethics scores, ranked worst first.
      </p>

      {worst.map((c, i) => (
        <div key={c.id} className="worst-card" onClick={() => onShowProfile(c.id)}>
          <span style={{ fontSize: 13, fontWeight: 500, color: '#888780', minWidth: 22 }}>#{i + 1}</span>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: '#F1EFE8',
            border: '0.5px solid #e0e0d8', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#5F5E5A', flexShrink: 0,
          }}>
            {c.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 500, fontSize: 14 }}>{c.name}</span>
              <GradeBadge grade={c.grade} size={24} />
            </div>
            <p style={{ fontSize: 12, color: '#888780', margin: '2px 0 0' }}>
              {c.tags[0]}{c.tags[1] ? ' · ' + c.tags[1] : ''}
            </p>
          </div>
          <i className="ti ti-chevron-right" style={{ color: '#888780', fontSize: 16 }} />
        </div>
      ))}

      <p style={{ fontSize: 12, color: '#888780', marginTop: '1rem' }}>
        <i className="ti ti-info-circle" style={{ marginRight: 4 }} />
        Grades based on publicly available labor, environmental, and political data. Click any company for the full profile.
      </p>
    </div>
  )
}
