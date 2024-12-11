"use client"
import { useAuth } from "@/components/auth/context"
import { Button } from "@/components/ui/button"
// import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../ui/input"
type UserSignInReq = { email: string; password: string }
export default function SignInWrapper() {
  const { login } = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<UserSignInReq>()
  const onSubmit: SubmitHandler<UserSignInReq> = (data) => {
    login({ id: "0", name: data.email, email: data.email })
    router.back()
  }
  const handleLogin = () => {
    // signIn("google")
  }
  return (
    <div className="bg-white h-[70vh] flex flex-col max-w-[32rem] w-full mx-auto rounded-2xl p-3 md:px-5 md:py-8 shadow-2xl">
      <div className="text-3xl font-bold text-center">Đăng nhập</div>
      <div className="flex flex-col gap-2 justify-center grow items-center p-5">
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            register={register}
            error={errors.email}
            name={"email"}
          />
          <Input
            label="Mật khẩu"
            type="password"
            register={register}
            error={errors.password}
            name={"password"}
          />
          <Link
            href={"/user/fogot-password"}
            className="text-sm text-blue-500 text-right"
          >
            Quên mật khẩu?
          </Link>
          <Button type="submit" widthFull={true}>
            ĐĂNG NHẬP
          </Button>
        </form>
        <div>
          Chưa có tài khoản?{" "}
          <Link
            href={"/user/fogot-password"}
            className=" text-blue-500 text-right"
          >
            Đăng ký
          </Link>
        </div>
        <button
          onClick={handleLogin}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Đăng nhập bằng Google
        </button>
      </div>
    </div>
  )
}
