// CustomJSONComponent.tsx
'use client'
import { useField } from '@payloadcms/ui'
import { randomInt } from 'crypto'
import { useState, useEffect } from 'react'
import { useDocumentInfo } from '@payloadcms/ui'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const CustomJSONComponent = ({ path }: { path: string }) => {
  const { value, setValue } = useField<any>({ path })
  const { id } = useDocumentInfo()

  const [keyInput, setkeyInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [initialValue, setInitialValue] = useState<any>({})

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
    fetchData()
    // setInitialValue(fetchData)

    // 2. Call the function immediately

    // setInitialValue(fetchData)
  }, [id])

  return (
    <div>
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
      <pre>{JSON.stringify(initialValue, null, 2)}</pre>
      <button onClick={() => setValue(JSON.parse(JSON.stringify(initialValue)))}>
        Update Price
      </button>
    </div>
  )
}
