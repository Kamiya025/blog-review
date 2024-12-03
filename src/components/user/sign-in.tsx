"use client"
import { useAuth } from "@/components/auth/context"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SignInWrapper() {
  const { login } = useAuth()
  const router = useRouter()
  return (
    <div className="bg-white max-h-[100%_-_30rem] h-full flex flex-col max-w-[32rem] w-full mx-auto rounded-2xl p-3 md:px-5 md:py-8 shadow-2xl">
      <div className="text-3xl font-bold text-center">Đăng nhập</div>
      <div className="flex justify-center grow items-center p-5">
        <Button
          onClick={() => {
            login({ id: "0", name: "00", email: "test@mail.com" })
            router.back()
          }}
        >
          ĐĂNG NHẬP
        </Button>
      </div>
    </div>
  )
}
