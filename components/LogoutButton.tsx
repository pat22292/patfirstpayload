"use client"

import { useState } from "react"
declare global {
  interface Window {
    google: any
  }
}

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  
  const logout = async () => {
    setLoading(true);
    document.getElementById("logoutButtom")?.setAttribute("disabled",loading.toString());
    await fetch("/api/users/logout", {
      method: "POST",
      credentials: "include",
    })

    if (typeof window !== "undefined" && window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect()
    }

    window.location.reload()
  }

  return <button id="logoutButtom"  className={`text-white bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed bg-gray-400 ' : ''}`} onClick={logout} disabled={loading}>
    Logout
  </button>
}