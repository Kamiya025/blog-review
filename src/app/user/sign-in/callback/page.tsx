import { useRouter } from "next/navigation"

export default function Callback() {
  const router = useRouter()

  return (
    <div className="bg-white h-[70vh] flex flex-col max-w-[32rem] w-full mx-auto rounded-2xl p-3 md:px-5 md:py-8 shadow-2xl">
      <div className="relative h-full flex justify-center items-center">
        <div className=""></div>
        <div className="text-xl ">Đang xác thực...</div>
      </div>
    </div>
  )
}
