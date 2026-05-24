import { useState } from 'react'
import { finderCategories, findCategory } from '../data/finderData'
import { companyById } from '../data/companies'
import GradeBadge from './GradeBadge'

const EXAMPLES = ['books', 'coffee', 'clothing', 'electronics', 'groceries']

export default function LocalFinder({ onShowProfile }) {
  const [product, setProduct] = useState('')
  const [location, setLocation] = useState('')
  const [result, setResult] = useState(null)
  const [searched, setSearched] = useState(false)

  function doSearch(q = product) {
    setSearched(true)
    const cat = findCategory(q)
    setResult(cat)
  }

  function setExample(ex) {
    setProduct(ex)
    doSearch(ex)
  }

  return (
    <div>
      <p style={{ fontSize: 13, color: '#5F5E5A', marginBottom: '1rem' }}>
        Find ethical local alternatives to big-box stores near you.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="What are you buying? (e.g. books, shoes...)"
          style={{ flex: 2, minWidth: 160 }}
          value={product}
          onChange={e => setProduct(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && doSearch()}
        />
        <input
          type="text"
          placeholder="City or zip code..."
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

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: 13, color: '#5F5E5A', alignSelf: 'center' }}>Try:</span>
        {EXAMPLES.map(ex => (
          <button key={ex} className="btn" onClick={() => setExample(ex)}>{ex}</button>
        ))}
      </div>

      {searched && (
        <div style={{ marginTop: '1.5rem' }}>
          {result ? (
            <FinderResult category={result} location={location} onShowProfile={onShowProfile} />
          ) : (
            <div style={{ background: '#F1EFE8', borderRadius: 12, padding: '1rem 1.25rem' }}>
              <p style={{ fontWeight: 500, marginBottom: 6 }}>No specific category matched</p>
              <p style={{ fontSize: 13, color: '#5F5E5A', lineHeight: 1.5 }}>
                Try searching for: {EXAMPLES.join(', ')}, banking, pharmacy, or gas.
                <br />For general shopping, consider local independent stores, co-ops, and secondhand shops first.
              </p>
              <a
                href={`https://www.yelp.com/search?find_desc=${encodeURIComponent(product)}${location ? `&find_loc=${encodeURIComponent(location)}` : ''}`}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 13, color: '#185FA5', display: 'inline-block', marginTop: 8 }}
              >
                <i className="ti ti-external-link" style={{ marginRight: 4 }} />
                Search Yelp for local "{product}" options
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function FinderResult({ category, location, onShowProfile }) {
  const avoidCompanies = category.avoidIds
    .map(id => companyById[id])
    .filter(Boolean)

  const yelpBase = location
    ? `https://www.yelp.com/search?find_desc=${encodeURIComponent(category.title)}&find_loc=${encodeURIComponent(location)}`
    : `https://www.yelp.com/search?find_desc=${encodeURIComponent(category.title)}`

  return (
    <div>
      <h3 style={{ fontWeight: 500, fontSize: 15, marginBottom: '0.75rem' }}>
        <i className="ti ti-circle-check" style={{ color: '#1D9E75', marginRight: 6 }} />
        {category.title}
      </h3>

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
              }}
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

      {category.tips.map((tip, i) => (
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
                  {tip.name}
                </span>
              ) : (
                <a href={tip.url} target="_blank" rel="noreferrer" style={{ fontWeight: 500, fontSize: 13, color: '#185FA5' }}>
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
        href={yelpBase}
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: 13, color: '#185FA5', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4 }}
      >
        <i className="ti ti-map-pin" />
        Search Yelp for local {category.title.toLowerCase()} options{location ? ` near ${location}` : ''}
      </a>
    </div>
  )
}

function TypeIcon({ type }) {
  const icons = {
    Local: 'ti-map-pin',
    Online: 'ti-world',
    Chain: 'ti-building-store',
    Brand: 'ti-tag',
    Free: 'ti-star',
    Tool: 'ti-tool',
    Provider: 'ti-bolt',
  }
  return <i className={`ti ${icons[type] ?? 'ti-circle-check'}`} style={{ fontSize: 14, color: '#27500A' }} />
}
