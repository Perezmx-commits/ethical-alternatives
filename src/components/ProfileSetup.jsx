import { useState } from 'react'
import { AVATAR_COLORS, getInitials } from '../data/constants'

export default function ProfileSetup({ onSave, onSkip }) {
  const [name, setName] = useState('')
  const [colorIdx, setColorIdx] = useState(0)

  const color = AVATAR_COLORS[colorIdx]
  const initials = getInitials(name)

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 100, padding: '1rem',
    }}>
      <div style={{
        background: '#fff', borderRadius: 16, padding: '2rem',
        width: '100%', maxWidth: 400, boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
          <i className="ti ti-leaf" style={{ fontSize: 20, color: '#1D9E75' }} />
          <h2 style={{ fontSize: 18, fontWeight: 500 }}>Welcome</h2>
        </div>
        <p style={{ fontSize: 13, color: '#5F5E5A', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Set up a quick profile to save favorite companies and leave reviews across sessions.
        </p>

        {/* Avatar preview */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: color.bg, color: color.text,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, fontWeight: 600, border: `2px solid ${color.text}22`,
            transition: 'background 0.2s',
          }}>
            {initials}
          </div>
        </div>

        {/* Name input */}
        <label style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 4 }}>
          Display name
        </label>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && name.trim() && onSave({ name: name.trim(), colorIdx })}
          style={{ marginBottom: '1rem' }}
          autoFocus
        />

        {/* Color picker */}
        <label style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>
          Avatar color
        </label>
        <div style={{ display: 'flex', gap: 8, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {AVATAR_COLORS.map((c, i) => (
            <button
              key={i}
              onClick={() => setColorIdx(i)}
              title={c.label}
              style={{
                width: 32, height: 32, borderRadius: '50%',
                background: c.bg, border: i === colorIdx ? `2px solid ${c.text}` : '2px solid transparent',
                cursor: 'pointer', outline: 'none', transition: 'border 0.15s',
              }}
            />
          ))}
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', marginBottom: 8, opacity: name.trim() ? 1 : 0.5 }}
          onClick={() => name.trim() && onSave({ name: name.trim(), colorIdx })}
        >
          Get started
        </button>
        <button
          className="btn"
          style={{ width: '100%', fontSize: 13, color: '#888780' }}
          onClick={onSkip}
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}
