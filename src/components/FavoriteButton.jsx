export default function FavoriteButton({ isFavorited, onToggle, size = 18 }) {
  return (
    <button
      onClick={e => { e.stopPropagation(); onToggle() }}
      title={isFavorited ? 'Remove from favorites' : 'Save to favorites'}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '2px 4px',
        color: isFavorited ? '#C9415A' : '#c0c0b8',
        fontSize: size,
        lineHeight: 1,
        flexShrink: 0,
        transition: 'color 0.15s',
        fontFamily: 'inherit',
      }}
    >
      <i className={`ti ${isFavorited ? 'ti-heart-filled' : 'ti-heart'}`} />
    </button>
  )
}
