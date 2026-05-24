const GRADE_CLASS = { A: 'grade-a', B: 'grade-b', C: 'grade-c', D: 'grade-d', F: 'grade-f', U: 'grade-u' }

export default function GradeBadge({ grade, size = 26 }) {
  return (
    <div
      className={GRADE_CLASS[grade] ?? 'grade-u'}
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: size * 0.5,
        flexShrink: 0,
      }}
    >
      {grade === 'U' ? '?' : grade}
    </div>
  )
}
