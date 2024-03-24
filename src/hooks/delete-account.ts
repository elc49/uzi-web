'use client'

import { useState } from 'react'

export default function useDeleteAccount() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(0)

  const deleteAccount = async function(phone: string) {
    setLoading(true)
    const data = { phone }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_UZI_API!}/api/account/delete`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      setStatus(response.status)
    } catch(error) {
      console.error("something went horribly wrong", error)
    } finally {
      setLoading(false)
    }
  }

  return {
    status,
    loading,
    deleteAccount
  }
}
