export const AVATAR_COLORS = [
  { bg: '#EAF3DE', text: '#27500A', label: 'Forest' },
  { bg: '#E6F1FB', text: '#0C447C', label: 'Sky' },
  { bg: '#FAEEDA', text: '#633806', label: 'Amber' },
  { bg: '#FAECE7', text: '#712B13', label: 'Coral' },
  { bg: '#F3E8FB', text: '#5F2D8E', label: 'Violet' },
  { bg: '#FFF0D4', text: '#7A4900', label: 'Gold' },
  { bg: '#E0F5F1', text: '#0C5E4F', label: 'Teal' },
  { bg: '#F0F0EC', text: '#3A3A38', label: 'Stone' },
]

export function getInitials(name) {
  if (!name?.trim()) return '?'
  return name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase()
}
