'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import './styles.css'

const WATCHED_COLLECTIONS = ['posts', 'products'] // slugs to watch

export const CollectionModal = () => {
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)
  const [collectionName, setCollectionName] = useState('')

  useEffect(() => {
    const match = WATCHED_COLLECTIONS.find((slug) => pathname?.includes(`/collections/${slug}`))
    if (match) {
      setCollectionName(match)
      setShowModal(true)
    }
  }, [pathname])

  if (!showModal) return null

  return (
    <div className="collection-modal-overlay" onClick={() => setShowModal(false)}>
      <div className="collection-modal" onClick={(e) => e.stopPropagation()}>
        <h2>You selected: {collectionName}</h2>
        <p>Do something here — show a notice, confirm an action, etc.</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  )
}
