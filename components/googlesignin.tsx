"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    google: any
  }
}

export default function GoogleLogin() {
  useEffect(() => {
     const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client?hl=en'; // Add ?hl=en here
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  script.onload = () => {
    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    })

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large", locale: "en" }
    )
}
  }, [])

  const handleCredentialResponse = async (response: any) => {
    const token = response.credential // ✅ REAL TOKEN

    const result = await fetch("/api/users/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })

    if (!result.ok) {
      console.error("Google login failed:", await result.text())
      return
     }
else {
  const jsonResponse = await result.json()
    console.log("Google login response:", jsonResponse) 
    document.cookie = "payload-token=" + jsonResponse.token + "; Secure; SameSite=Lax; Path=/; max-age=3600";
window.location.reload();
}
  // Debug log
    // console.log("Google login response:", result) // Debug log
  // Debug log
// document.cookie = "payload-token=" + jsonResponse.result.token + "; Secure; SameSite=Lax; Path=/; max-age=3600";
// window.location.reload();
//   console.log('User data from API:', jsonResponse.user);
//   console.log('Token from API:', jsonResponse.token);

    // console.log("Google login response:", result) // Debug log
    // Optionally, you can decode the token on the client side to get user info
    // const decoded = jwt_decode(token)
    // console.log("Decoded JWT:", decoded)

    // window.location.reload()
    }

  return <div id="googleBtn" />
}

function jwt_decode(token: any) {
    throw new Error("Function not implemented.")
}
