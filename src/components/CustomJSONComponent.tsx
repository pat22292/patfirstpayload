// CustomJSONComponent.tsx
'use client'
import { useAuth, useField } from '@payloadcms/ui'
import { randomInt } from 'crypto'
import { useState, useEffect } from 'react'
import { useDocumentInfo } from '@payloadcms/ui'

export const CustomJSONComponent = ({ path }: { path: string }) => {
  const { value, setValue } = useField<any>({ path })
  const { id } = useDocumentInfo()
  const { token } = useAuth()
  const [siblings, setSiblings] = useState<number[]>([])
  const [open, setOpen] = useState(false)
  const [keyInput, setkeyInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [initialValue, setInitialValue] = useState<any>({})

  const updateOthers = async () => {
    siblings.forEach((sibling) => {
      fetch(`/api/productVariation/${sibling}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          variationOptions: initialValue,
        }),
      })
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/productVariation/${id}`,
        )
        const result = await response.json()
        // console.log(result.variationOptions)
        setInitialValue(result.variationOptions)
        // return result
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
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
    fetchData()
  }, [id])

  return (
    <div>
      {open && (
        <>
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
              <h2 style={{ margin: '0 0 1rem' }}>Notification</h2>
              <p>Would you like to apply these options in all variations?</p>
              <br />
              <button
                style={{ marginRight: 20, width: 100, height: 40 }}
                onClick={async () => {
                  await setValue(JSON.parse(JSON.stringify(initialValue)))
                  await updateOthers()
                  setTimeout(() => {
                    setOpen(false)
                  }, 4000)
                }}
              >
                Yes
              </button>
              <button
                style={{ width: 100, height: 40 }}
                onClick={async () => {
                  await setValue(JSON.parse(JSON.stringify(initialValue)))
                  setTimeout(() => {
                    setOpen(false)
                  }, 4000)
                }}
              >
                No
              </button>
              <br />
              {/* <p>Sibling variation IDs: {siblings.join(', ')}</p> */}
            </div>
          </div>
        </>
      )}
      <label>Custom Data Builder</label>
      <div>Current ID: {id}</div>
      <div style={{ display: 'grid', gap: '10px', marginBottom: '10px', width: '50%' }}>
        <label>Key</label>
        <input
          type="text"
          value={keyInput}
          onChange={(e) => setkeyInput(e.target.value.toString())}
        />
        <label>Value</label>
        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value.toString())}
        />
      </div>
      <button onClick={() => setInitialValue({ ...initialValue, [keyInput]: valueInput })}>
        Add to Custom Data
      </button>
      {/* <pre>{JSON.stringify(initialValue, null, 2)}</pre> */}
      <pre>
        <textarea
          style={{ height: 'auto', minHeight: '200px' }}
          value={JSON.stringify(initialValue, null, 2)}
          onChange={(e) => setInitialValue(JSON.parse(e.target.value))}
        />
      </pre>
      <br />
      {/* <button onClick={() => setValue(JSON.parse(JSON.stringify(initialValue)))}>
        Update Price
      </button> */}
      <button type="button" onClick={() => setOpen(true)}>
        UPDATE
      </button>

      {/* <p>These Option will also be applied to these variation IDs: {siblings.join(', ')}</p> */}
    </div>
  )
}
