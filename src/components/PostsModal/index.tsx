'use client'
import { useAuth, useDocumentInfo } from '@payloadcms/ui'
import { useState, useEffect } from 'react'

export const PostsModal = () => {
  const { id } = useDocumentInfo() // current variation ID
  const { token } = useAuth() // ← grab token here

  const [open, setOpen] = useState(false)
  const [siblings, setSiblings] = useState<number[]>([])
  // const token = getCookie('payload-token')

  useEffect(() => {
    // setOpen(true) // show on mount = when collection is entered

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

    // setOpen(true)
  }, [id])

  const updateOthers = async () => {
    siblings.forEach((sibling) => {
      fetch(`/api/productVariation/${sibling}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          variationOptions: {
            L: '200',
            M: '150',
            S: '99',
            XL: '250',
          },
        }),
      })
    })
  }
  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'var(--theme-bg)',
          border: '1px solid var(--theme-border-color)',
          borderRadius: 4,
          padding: '2rem',
          maxWidth: 480,
          width: '100%',
        }}
      >
        <h2 style={{ margin: '0 0 1rem' }}>Posts Collection</h2>
        <p>Would you like to apply these options in all variations?</p>
        <br />
        <button style={{ marginRight: 20, width: 100, height: 40 }} onClick={updateOthers}>
          Yes
        </button>
        <button style={{ width: 100, height: 40 }} onClick={() => setOpen(false)}>
          No
        </button>
        <br />
        <p>Sibling variation IDs: {siblings.join(', ')}</p>
      </div>
    </div>
  )
}
