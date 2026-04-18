export function BaybayinText({ children }: { children: React.ReactNode }) {
  return (
    <span
      lang="fil-Tglg"
      style={{
        fontFamily: "'BagwisBaybayin', serif",
        fontSize: '1.5rem', // Baybayin reads better slightly larger
        lineHeight: '2',
      }}
    >
      {children}
    </span>
  )
}
