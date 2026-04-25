'use client'
import { useEffect, useState } from 'react'
import { useDocumentInfo } from '@payloadcms/ui'

export const SiblingVariations = () => {
  const { id } = useDocumentInfo() // current variation ID
  const [siblings, setSiblings] = useState<number[]>([])

  useEffect(() => {
    if (!id) return

    // find the product that contains this variation
    const fetchSiblings = async () => {
      const res = await fetch(`/api/product?where[variation][in]=${id}&limit=1&depth=0`)
      const data = await res.json()
      const product = data.docs?.[0]

      if (product) {
        // variation is an array of IDs at depth=0
        const allIds: number[] = product.variation.filter((varId: number) => varId !== id)
        setSiblings(allIds)
      }
    }

    fetchSiblings()
  }, [id])

  if (!siblings.length) return null

  return (
    <div style={{ padding: '1rem', fontSize: 13, color: 'var(--theme-text)' }}>
      <strong>Sibling variation IDs:</strong> {siblings.join(', ')}
    </div>
  )
}
