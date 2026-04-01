"use client"

import { useEffect, useState } from "react"
import GoogleLogin from "./googlesignin"
import LogoutButton from "./LogoutButton"

export default function AuthButtons() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("/api/users/me", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (user) {
    return <LogoutButton />
  }

  return <GoogleLogin />
}