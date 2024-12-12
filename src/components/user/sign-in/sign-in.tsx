"use client"
import { useGoogleLogin } from "@react-oauth/google"
import Image from "next/image"
export default function SignInWrapper() {
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log("Token:", credentialResponse)
    },
    onError: () => {
      console.error("Google Sign-In failed")
    },
    // ux_mode: "redirect",
    // flow: "auth-code",
    // redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
  })

  return (
    <div className="bg-white h-[70vh] flex flex-col max-w-[32rem] w-full mx-auto rounded-2xl p-3 md:px-5 md:py-8 shadow-2xl">
      <div className="relative h-full flex justify-center items-center">
        <div className="">
          <button onClick={() => login()} className="relative group">
            <Image
              src={"/G_logo.svg"}
              width={54}
              height={54}
              alt="G_logo"
              className="absolute -top-10 -right-0 group-hover:animate-wiggle z-50 bg-white p-1 rounded-full shadow-lg"
            />
            <div
              className="px-8 py-6 rounded-lg 
                        bg-gradient-to-tr from-blue-400 via-lime-300 to-orange-400
                        group-hover:via-60% group-hover:to-80%
                      text-white font-bold hover:bg-blue-600 transition 
                        skew-x-[-15deg] shadow-2xl group-hover:drop-shadow-2xl"
            >
              <span className="inline-block skew-x-[15deg]">
                Đăng nhập với Google
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
{
  /* <form
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
          </div> */
}
{
  /* <button
            onClick={handleLogin}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Đăng nhập bằng Google
          </button> */
}
