import SignInWrapper from "@/components/user/sign-in"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Generated by create next app",
}
export default function User() {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <SignInWrapper />
    </GoogleOAuthProvider>
  )
}
