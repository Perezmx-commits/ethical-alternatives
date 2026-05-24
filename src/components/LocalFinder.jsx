import { useState } from 'react'
import { finderCategories, findBestMatch } from '../data/finderData'
import { companyById } from '../data/companies'
import GradeBadge from './GradeBadge'

const EXAMPLES = ['stylus', 'charger', 'jeans', 'chocolate', 'coffee', 'clothing', 'books', 'groceries']

export default function LocalFinder({ onShowProfile }) {
  const [product, setProduct] = useState('')
  const [location, setLocation] = useState('')
  const [result, setResult] = useState(null)
  const [searched, setSearched] = useState(false)
  const [lastQuery, setLastQuery] = useState('')

  function doSearch(q = product) {
    if (!q.trim()) return
    setSearched(true)
    setLastQuery(q.trim())
    setResult(findBestMatch(q))
  }

  function setExample(ex) {
    setProduct(ex)
    doSearch(ex)
  }

  return (
    <div>
      <p style={{ fontSize: 13, color: '#5F5E5A', marginBottom: '1rem' }}>
        Search for any product to find ethical alternatives and companies to avoid.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="What are you buying? (e.g. stylus, jeans, chocolate...)"
          style={{ flex: 2, minWidth: 160 }}
          value={product}
          onChange={e => setProduct(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && doSearch()}
        />
        <input
          type="text"
          placeholder="City or zip (optional)"
          style={{ flex: 1, minWidth: 120 }}
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={() => doSearch()}
        style={{ width: '100%', marginBottom: '1.25rem' }}
      >
        <i className="ti ti-search" style={{ marginRight: 6 }} />
        Find ethical alternatives
      </button>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: '#5F5E5A' }}>Try:</span>
        {EXAMPLES.map(ex => (
          <button key={ex} className="btn" style={{ fontSize: 12, padding: '3px 10px' }} onClick={() => setExample(ex)}>
            {ex}
          </button>
        ))}
      </div>

      {searched && (
        <div style={{ marginTop: '1.5rem' }}>
          {result?.category ? (
            <FinderResult
              category={result.category}
              hint={result.hint}
              query={lastQuery}
              location={location}
              onShowProfile={onShowProfile}
            />
          ) : (
            <NoMatch query={lastQuery} location={location} />
          )}
        </div>
      )}
    </div>
  )
}

function FinderResult({ category, hint, query, location, onShowProfile }) {
  const avoidCompanies = category.avoidIds.map(id => companyById[id]).filter(Boolean)
  const allTips = hint?.pinnedAlts
    ? [...hint.pinnedAlts, ...category.tips]
    : category.tips

  const displayTitle = hint
    ? capitalizeFirst(query)
    : category.title

  const yelpUrl = `https://www.yelp.com/search?find_desc=${encodeURIComponent(query)}${location ? `&find_loc=${encodeURIComponent(location)}` : ''}`

  return (
    <div>
      <h3 style={{ fontWeight: 500, fontSize: 15, marginBottom: hint?.note ? 8 : 12 }}>
        <i className="ti ti-circle-check" style={{ color: '#1D9E75', marginRight: 6 }} />
        Results for: {displayTitle}
      </h3>

      {hint?.note && (
        <div style={{ background: '#E6F1FB', border: '0.5px solid #85B7EB', borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
          <p style={{ fontSize: 13, color: '#0C447C', lineHeight: 1.5 }}>
            <i className="ti ti-info-circle" style={{ marginRight: 6 }} />
            {hint.note}
          </p>
        </div>
      )}

      {avoidCompanies.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
            Companies to avoid
          </p>
          {avoidCompanies.map(c => (
            <div
              key={c.id}
              onClick={() => onShowProfile(c.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: '#FCEBEB', border: '0.5px solid #f0c0c0',
                borderRadius: 8, padding: '8px 12px', marginBottom: 6, cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#e09090'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#f0c0c0'}
            >
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: '#F8D8D8',
                border: '0.5px solid #e0c0c0', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 10, fontWeight: 500, color: '#791F1F', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 500, fontSize: 13 }}>{c.name}</span>
                  <GradeBadge grade={c.grade} size={20} />
                </div>
                <p style={{ fontSize: 11, color: '#791F1F', marginTop: 1 }}>{c.tags[0]}</p>
              </div>
              <i className="ti ti-chevron-right" style={{ color: '#b08080', fontSize: 14 }} />
            </div>
          ))}
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
        Ethical alternatives
      </p>

      {allTips.map((tip, i) => (
        <div key={i} style={{
          background: '#F1EFE8', borderRadius: 8, padding: '10px 14px',
          marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: '#E4F0E0',
            border: '0.5px solid #cce0c8', display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexShrink: 0,
          }}>
            <TypeIcon type={tip.type} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              {tip.companyId ? (
                <span
                  style={{ fontWeight: 500, fontSize: 13, color: '#185FA5', cursor: 'pointer' }}
                  onClick={() => onShowProfile(tip.companyId)}
                >
                  {tip.name} <i className="ti ti-chevron-right" style={{ fontSize: 11 }} />
                </span>
              ) : (
                <a href={tip.url} target="_blank" rel="noreferrer"
                  style={{ fontWeight: 500, fontSize: 13, color: '#185FA5' }}>
                  {tip.name}
                </a>
              )}
              <span className="pill">{tip.type}</span>
            </div>
            <p style={{ fontSize: 12, color: '#5F5E5A', marginTop: 2 }}>{tip.note}</p>
          </div>
        </div>
      ))}

      <a
        href={yelpUrl}
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: 13, color: '#185FA5', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4 }}
      >
        <i className="ti ti-map-pin" />
        Search Yelp for local {query.toLowerCase()} options{location ? ` near ${location}` : ''}
      </a>
    </div>
  )
}

function NoMatch({ query, location }) {
  const yelpUrl = `https://www.yelp.com/search?find_desc=${encodeURIComponent(query)}${location ? `&find_loc=${encodeURIComponent(location)}` : ''}`

  return (
    <div style={{ background: '#F1EFE8', borderRadius: 12, padding: '1rem 1.25rem' }}>
      <p style={{ fontWeight: 500, marginBottom: 6 }}>No specific category matched for "{query}"</p>
      <p style={{ fontSize: 13, color: '#5F5E5A', lineHeight: 1.5, marginBottom: 10 }}>
        General tips that apply to almost any purchase:
      </p>
      <ul style={{ fontSize: 13, color: '#5F5E5A', lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: 10 }}>
        <li>Buy secondhand first — check Facebook Marketplace, Depop, or local thrift stores</li>
        <li>Buy from local independent stores rather than Amazon or big-box chains</li>
        <li>Look for certified B Corp brands for that product category</li>
        <li>Buy less, but buy better quality so it lasts longer</li>
      </ul>
      <a
        href={yelpUrl}
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: 13, color: '#185FA5', display: 'inline-flex', alignItems: 'center', gap: 4 }}
      >
        <i className="ti ti-map-pin" />
        Search Yelp for local "{query}" options{location ? ` near ${location}` : ''}
      </a>
    </div>
  )
}

function TypeIcon({ type }) {
  const icons = { Local: 'ti-map-pin', Online: 'ti-world', Chain: 'ti-building-store', Brand: 'ti-tag', Free: 'ti-star', Tool: 'ti-tool', Provider: 'ti-bolt' }
  return <i className={`ti ${icons[type] ?? 'ti-circle-check'}`} style={{ fontSize: 14, color: '#27500A' }} />
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
