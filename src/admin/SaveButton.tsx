'use client'

import React, { useState } from 'react'
import { useForm, Button } from '@payloadcms/ui'

// no casting, just normal function
const SaveButton = (props: any) => {
  const { submit } = useForm()
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    if (loading) return
    try {
      setLoading(true)
      await submit()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={onClick}
      disabled={loading}
      size="small"
      buttonStyle="primary"
    >
      {loading ? 'Saving…' : 'Save'}
    </Button>
  )
}

export default SaveButton