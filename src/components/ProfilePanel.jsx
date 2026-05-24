import { useState } from 'react'
import { AVATAR_COLORS, getInitials } from '../data/constants'
import { companyById } from '../data/companies'
import GradeBadge from './GradeBadge'
import FavoriteButton from './FavoriteButton'

export default function ProfilePanel({ profile, favorites, onUpdateProfile, onToggleFavorite, onShowProfile, onClose }) {
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState(profile?.name ?? '')
  const [editColorIdx, setEditColorIdx] = useState(profile?.colorIdx ?? 0)

  const color = AVATAR_COLORS[profile?.colorIdx ?? 0]
  const initials = getInitials(profile?.name)
  const favoriteCompanies = favorites.map(id => companyById[id]).filter(Boolean)

  function saveEdit() {
    if (!editName.trim()) return
    onUpdateProfile({ name: editName.trim(), colorIdx: editColorIdx })
    setEditing(false)
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#f9f9f7', width: '100%', maxWidth: 400, height: '100%',
          overflowY: 'auto', boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
          display: 'flex', flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Panel header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '0.5px solid #e0e0d8', background: '#fff' }}>
          <span style={{ fontWeight: 500, fontSize: 15 }}>Your Profile</span>
          <button className="btn" style={{ padding: '4px 8px', fontSize: 16 }} onClick={onClose}>
            <i className="ti ti-x" />
          </button>
        </div>

        <div style={{ padding: '1.25rem', flex: 1 }}>
          {/* Profile card */}
          <div style={{ background: '#fff', border: '0.5px solid #e0e0d8', borderRadius: 12, padding: '1.25rem', marginBottom: '1.25rem' }}>
            {!editing ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: color.bg, color: color.text,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, fontWeight: 600, flexShrink: 0,
                }}>
                  {initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 2 }}>
                    {profile?.name ?? 'Anonymous'}
                  </div>
                  <div style={{ fontSize: 12, color: '#888780' }}>
                    {favorites.length} saved {favorites.length === 1 ? 'company' : 'companies'}
                  </div>
                </div>
                <button className="btn" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => { setEditName(profile?.name ?? ''); setEditColorIdx(profile?.colorIdx ?? 0); setEditing(true) }}>
                  Edit
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: AVATAR_COLORS[editColorIdx].bg, color: AVATAR_COLORS[editColorIdx].text,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 600,
                  }}>
                    {getInitials(editName)}
                  </div>
                </div>
                <input
                  type="text"
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                  style={{ marginBottom: '0.75rem' }}
                  autoFocus
                />
                <div style={{ display: 'flex', gap: 6, marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  {AVATAR_COLORS.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setEditColorIdx(i)}
                      style={{
                        width: 28, height: 28, borderRadius: '50%', background: c.bg,
                        border: i === editColorIdx ? `2px solid ${c.text}` : '2px solid transparent',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-primary" style={{ flex: 1, fontSize: 13 }} onClick={saveEdit}>Save</button>
                  <button className="btn" style={{ fontSize: 13 }} onClick={() => setEditing(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>

          {/* Favorites */}
          <p style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
            Saved companies
          </p>

          {favoriteCompanies.length === 0 ? (
            <div style={{ background: '#fff', border: '0.5px solid #e0e0d8', borderRadius: 12, padding: '1.25rem', textAlign: 'center' }}>
              <i className="ti ti-heart" style={{ fontSize: 28, color: '#e0e0d8', display: 'block', marginBottom: 8 }} />
              <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.5 }}>
                No saved companies yet.<br />
                Tap the <i className="ti ti-heart" /> on any company to save it here.
              </p>
            </div>
          ) : (
            favoriteCompanies.map(c => (
              <div
                key={c.id}
                style={{
                  background: '#fff', border: '0.5px solid #e0e0d8', borderRadius: 10,
                  padding: '0.75rem 1rem', marginBottom: 8,
                  display: 'flex', alignItems: 'center', gap: 10,
                  cursor: 'pointer', transition: 'border-color 0.15s',
                }}
                onClick={() => { onShowProfile(c.id); onClose() }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#b0b0a8'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#e0e0d8'}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 8, background: '#F1EFE8',
                  border: '0.5px solid #e0e0d8', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#5F5E5A', flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 1 }}>
                    <span style={{ fontWeight: 500, fontSize: 13 }}>{c.name}</span>
                    <GradeBadge grade={c.grade} size={20} />
                  </div>
                  <span style={{ fontSize: 11, color: '#888780' }}>{c.sector}</span>
                </div>
                <FavoriteButton
                  isFavorited
                  onToggle={() => onToggleFavorite(c.id)}
                  size={16}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
