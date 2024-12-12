import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json(
      { error: "Missing authorization code" },
      { status: 400 }
    )
  }
  console.log("code: " + code)
  // Trao đổi mã xác thực với Google để lấy token
  //   const response = await fetch("https://oauth2.googleapis.com/token", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams({
  //       code,
  //       client_id: process.env.GOOGLE_CLIENT_ID!,
  //       client_secret: process.env.GOOGLE_CLIENT_SECRET!,
  //       redirect_uri: "http://localhost:3000/auth/callback",
  //       grant_type: "authorization_code",
  //     }),
  //   })

  //   if (!response.ok) {
  //     return NextResponse.json(
  //       { error: "Failed to fetch token" },
  //       { status: response.status }
  //     )
  //   }

  //   const tokenData = await response.json()

  // Bạn có thể lưu token vào cookie hoặc database tùy nhu cầu
  //   return NextResponse.json({ tokenData })
  return { code: code }
}
