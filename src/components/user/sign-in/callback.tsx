"use client"
import { useGetAccessTokenGoogle } from "@/hooks/query/auth"

export default function CallbackGetAccessTokenGoogle(props: {
  authCode: string
}) {
  const authGetToken = useGetAccessTokenGoogle(props.authCode)
  return (
    <div className="bg-white h-[70vh] flex flex-col max-w-[32rem] w-full mx-auto rounded-2xl p-3 md:px-5 md:py-8 shadow-2xl">
      <div className="relative h-full flex justify-center items-center">
        <div className=""></div>
        <div className="text-xl ">
          {authGetToken.isSuccess
            ? JSON.stringify(authGetToken.data)
            : authGetToken.isLoading
            ? "Đang xác thực..."
            : "Lỗi xác thực"}
        </div>
      </div>
    </div>
  )
}
