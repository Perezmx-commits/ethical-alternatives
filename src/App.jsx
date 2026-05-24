import { useState, useEffect } from 'react'
import Header from './components/Header'
import NavTabs from './components/NavTabs'
import WorstOffenders from './components/WorstOffenders'
import AllCompanies from './components/AllCompanies'
import LocalFinder from './components/LocalFinder'
import CompanyProfile from './components/CompanyProfile'

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) ?? 'null') ?? fallback }
  catch { return fallback }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [profileStack, setProfileStack] = useState([])
  const [userRatings, setUserRatings] = useState(() => load('ea_ratings', {}))
  const [reviews, setReviews] = useState(() => load('ea_reviews', {}))

  useEffect(() => {
    localStorage.setItem('ea_ratings', JSON.stringify(userRatings))
  }, [userRatings])

  useEffect(() => {
    localStorage.setItem('ea_reviews', JSON.stringify(reviews))
  }, [reviews])

  const profileId = profileStack[profileStack.length - 1] ?? null

  function showProfile(id) {
    setProfileStack(prev => [...prev, id])
  }

  function goBack() {
    setProfileStack(prev => prev.slice(0, -1))
  }

  function switchTab(tab) {
    setActiveTab(tab)
    setProfileStack([])
  }

  return (
    <div style={{ background: '#f9f9f7', color: '#1a1a18', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
        <Header />
        <NavTabs activeTab={activeTab} setActiveTab={switchTab} />

        {profileId ? (
          <CompanyProfile
            companyId={profileId}
            userRating={userRatings[profileId] ?? 0}
            reviews={reviews[profileId] ?? []}
            onSetRating={stars => setUserRatings(prev => ({ ...prev, [profileId]: stars }))}
            onAddReview={(stars, text) => {
              setReviews(prev => ({
                ...prev,
                [profileId]: [...(prev[profileId] ?? []), { stars, text, date: new Date().toISOString() }],
              }))
              setUserRatings(prev => ({ ...prev, [profileId]: stars }))
            }}
            onBack={goBack}
            onShowProfile={showProfile}
          />
        ) : (
          <>
            {activeTab === 'home' && <WorstOffenders onShowProfile={showProfile} />}
            {activeTab === 'browse' && <AllCompanies onShowProfile={showProfile} />}
            {activeTab === 'finder' && <LocalFinder onShowProfile={showProfile} />}
          </>
        )}
      </div>
    </div>
  )
}
