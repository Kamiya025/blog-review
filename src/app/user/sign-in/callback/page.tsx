"use client"
import CallbackGetAccessTokenGoogle from "@/components/user/sign-in/callback"
import { useGetAccessTokenGoogle } from "@/hooks/query/auth"
import { useSearchParams } from "next/navigation"

export default function Callback() {
  const searchParams = useSearchParams()
  const authCode = searchParams.get("code")
  if (!authCode) return <>...</>
  return <CallbackGetAccessTokenGoogle authCode={authCode} />
}
