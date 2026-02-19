export async function getHeader() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/header`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch header')

  return res.json()
}
