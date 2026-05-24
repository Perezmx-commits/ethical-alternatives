import { useState } from 'react'
import { companyById } from '../data/companies'
import GradeBadge from './GradeBadge'
import ScoreBar from './ScoreBar'
import FavoriteButton from './FavoriteButton'

export default function CompanyProfile({ companyId, userRating, reviews, onSetRating, onAddReview, onBack, favorites, onToggleFavorite, onShowProfile }) {
  const c = companyById[companyId]
  const [hovered, setHovered] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [pendingStars, setPendingStars] = useState(userRating)
  const [submitted, setSubmitted] = useState(false)

  if (!c) return null

  const isUngraded = c.grade === 'U'
  const isFavorited = favorites.includes(c.id)
  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1)
    : null

  function submitReview() {
    if (!pendingStars) return
    onAddReview(pendingStars, reviewText.trim())
    setReviewText('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const displayRating = hovered || pendingStars || userRating

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button
          style={{ fontSize: 13, color: '#5F5E5A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', padding: 0, fontFamily: 'inherit' }}
          onClick={onBack}
        >
          <i className="ti ti-arrow-left" style={{ fontSize: 14 }} />
          Back
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <FavoriteButton isFavorited={isFavorited} onToggle={() => onToggleFavorite(c.id)} size={20} />
          <span style={{ fontSize: 12, color: isFavorited ? '#C9415A' : '#888780' }}>
            {isFavorited ? 'Saved' : 'Save'}
          </span>
        </div>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: '1rem' }}>
        <div style={{
          width: 56, height: 56, borderRadius: 12, background: '#F1EFE8',
          border: '0.5px solid #e0e0d8', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 14, fontWeight: 500, color: '#5F5E5A', flexShrink: 0,
        }}>
          {c.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
            <h1 style={{ fontSize: 20, fontWeight: 500 }}>{c.name}</h1>
            <GradeBadge grade={c.grade} size={30} />
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="pill">{c.sector}</span>
            {avg && (
              <span style={{ fontSize: 12, color: '#888780' }}>
                <i className="ti ti-star-filled" style={{ color: '#BA7517', fontSize: 11, marginRight: 2 }} />
                {avg} community avg ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div style={{ marginBottom: '1rem' }}>
        {c.tags.map(t => <span key={t} className="pill">{t}</span>)}
      </div>

      {/* Summary */}
      <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: '1rem', color: '#2a2a28' }}>{c.summary}</p>

      {/* Ethics breakdown */}
      {!isUngraded ? (
        <div style={{ background: '#F1EFE8', borderRadius: 8, padding: '1rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
            Ethics breakdown
          </p>
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 13 }}>Labor practices</span>
            <ScoreBar value={c.labor} type="labor" />
            {c.labor_detail && <p style={{ fontSize: 12, color: '#888780', marginTop: 4 }}>{c.labor_detail}</p>}
          </div>
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 13 }}>Environmental impact</span>
            <ScoreBar value={c.env} type="env" />
            {c.env_detail && <p style={{ fontSize: 12, color: '#888780', marginTop: 4 }}>{c.env_detail}</p>}
          </div>
          <div>
            <span style={{ fontSize: 13 }}>Political activity</span>
            <ScoreBar value={c.politics} type="politics" />
            {c.politics_detail && <p style={{ fontSize: 12, color: '#888780', marginTop: 4 }}>{c.politics_detail}</p>}
          </div>
        </div>
      ) : (
        <div style={{ background: '#F1EFE8', borderRadius: 8, padding: '1rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: 13, color: '#5F5E5A', lineHeight: 1.5 }}>
            <i className="ti ti-info-circle" style={{ marginRight: 6, color: '#888780' }} />
            This company has not yet been formally graded. Ethics data is based on community reports only.
          </p>
        </div>
      )}

      {/* Alternatives */}
      {c.alts.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
            Ethical alternatives
          </p>
          {c.alts.map((alt, i) => (
            <div key={i} style={{
              background: '#F1EFE8', borderRadius: 8, padding: '10px 14px',
              marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: '#E4F0E0',
                border: '0.5px solid #cce0c8', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <i className="ti ti-external-link" style={{ fontSize: 14, color: '#27500A' }} />
              </div>
              <div style={{ flex: 1 }}>
                {alt.companyId ? (
                  <span
                    style={{ fontWeight: 500, fontSize: 13, color: '#185FA5', cursor: 'pointer' }}
                    onClick={() => onShowProfile(alt.companyId)}
                  >
                    {alt.name} <i className="ti ti-chevron-right" style={{ fontSize: 11 }} />
                  </span>
                ) : (
                  <a href={alt.url} target="_blank" rel="noreferrer"
                    style={{ fontWeight: 500, fontSize: 13, color: '#185FA5' }}>
                    {alt.name}
                  </a>
                )}
                <p style={{ fontSize: 12, color: '#5F5E5A', marginTop: 1 }}>{alt.note}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Community rating */}
      <div style={{ background: '#fff', border: '0.5px solid #e0e0d8', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
        <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 4 }}>Community rating</p>
        <p style={{ fontSize: 13, color: '#5F5E5A', marginBottom: 12 }}>
          Rate your experience or ethics assessment of {c.name}:
        </p>

        <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              className={`star${displayRating >= i ? ' on' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => { setPendingStars(i); onSetRating(i) }}
            >
              <i className="ti ti-star-filled" />
            </span>
          ))}
          {pendingStars > 0 && (
            <span style={{ fontSize: 13, color: '#888780', alignSelf: 'center', marginLeft: 6 }}>
              {['', 'Very poor', 'Poor', 'Mixed', 'Good', 'Excellent'][pendingStars]}
            </span>
          )}
        </div>

        <textarea
          placeholder="Share your experience or ethics research (optional)..."
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
          style={{ marginBottom: 8 }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            className="btn btn-primary"
            onClick={submitReview}
            disabled={!pendingStars}
            style={{ opacity: pendingStars ? 1 : 0.5 }}
          >
            Submit review
          </button>
          {submitted && (
            <span style={{ fontSize: 13, color: '#1D9E75' }}>
              <i className="ti ti-check" style={{ marginRight: 4 }} />
              Review submitted!
            </span>
          )}
        </div>
      </div>

      {/* Reviews list */}
      {reviews.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
            Community reviews ({reviews.length})
          </p>
          {reviews.map((r, i) => (
            <div key={i} style={{ borderTop: '0.5px solid #e0e0d8', padding: '10px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ color: '#BA7517', fontSize: 13 }}>
                  {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                </span>
                <span style={{ fontSize: 12, color: '#888780' }}>Community member</span>
                <span style={{ fontSize: 11, color: '#b0b0a8', marginLeft: 'auto' }}>
                  {new Date(r.date).toLocaleDateString()}
                </span>
              </div>
              {r.text && <p style={{ fontSize: 13, lineHeight: 1.5 }}>{r.text}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
