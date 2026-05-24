import { AVATAR_COLORS, getInitials } from '../data/constants'

export default function Header({ profile, onOpenProfile }) {
  const color = AVATAR_COLORS[profile?.colorIdx ?? 0]

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
          <i className="ti ti-leaf" style={{ fontSize: 24, color: '#1D9E75' }} />
          <span style={{ fontSize: 22, fontWeight: 500 }}>Ethical Alternatives</span>
        </div>
        <p style={{ fontSize: 13, color: '#5F5E5A' }}>
          Browse companies, check their ethics grade, and find better alternatives.
        </p>
      </div>

      <button
        onClick={onOpenProfile}
        title={profile ? profile.name : 'Set up profile'}
        style={{
          width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
          background: profile ? color.bg : '#F1EFE8',
          color: profile ? color.text : '#888780',
          border: profile ? `1.5px solid ${color.text}33` : '0.5px solid #e0e0d8',
          cursor: 'pointer', fontSize: 14, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'opacity 0.15s', marginTop: 4,
        }}
      >
        {profile ? getInitials(profile.name) : <i className="ti ti-user" style={{ fontSize: 16 }} />}
      </button>
    </div>
  )
}
