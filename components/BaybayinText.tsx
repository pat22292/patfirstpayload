const TRANSLITERATE: Record<string, string> = {
  // Vowels (standalone)
  a: 'A',
  e: 'E',
  i: 'E',
  o: 'O',
  u: 'O',
  // Consonants with inherent 'a'
  ba: 'b',
  ka: 'k',
  da: 'd',
  ga: 'g',
  ha: 'h',
  la: 'l',
  ma: 'm',
  na: 'n',
  nga: 'N',
  pa: 'p',
  ra: 'r',
  sa: 's',
  ta: 't',
  wa: 'w',
  ya: 'y',
  // Add kudlit for e/i and o/u variants as needed
  bi: 'be',
  ki: 'ke',
  di: 'de',
  bo: 'bo',
  ko: 'ko',
  do: 'do',
}

export function BaybayinText({ children, size = '1.5rem' }: { children: string; size?: string }) {
  return (
    <span
      style={{
        fontFamily: "'BagwisBaybayin', sans-serif",
        fontSize: size,
        lineHeight: 1.8,
      }}
      aria-label={children} // screen readers get the real text
      role="img"
    >
      {children} {/* pass already-mapped Latin keys here */}
    </span>
  )
}
