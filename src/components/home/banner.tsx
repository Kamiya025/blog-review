import Image from "next/image"

export const Banner = () => {
  return (
    <div className="w-full relative h-[30rem] font-bold whitespace-pre contain-size uppercase group">
      <div
        className="w-full !h-full p-8 md:px-32 
                    bg-gradient-to-tr from-30% from-blue-500 to-white bg-blend-soft-light 
                    flex flex-col rounded-3xl 
                    border border-slate-300 shadow-xl"
      >
        <div className="flex-1 flex-col gap-3 flex z-50 text-white justify-end">
          <div className="text-2xl">Đây là</div>
          <div
            className="flex gap-3 items-center text-2xl md:text-5xl !h-20 mb-5 border select-none shadow-md 
                        w-fit pr-4 duration-300 group-hover:pl-4 group-hover:pr-0 rounded-xl cursor-pointer"
          >
            <div
              className="relative bg-yellow-400/90 group-hover:ease-linear duration-500 p-4 
                        group-hover:p-0 group-hover:bg-transparent group-hover:shadow-none 
                        rounded-xl shadow-lg peer-hover:bg-transparent"
            >
              Khởi đầu
            </div>
            <div
              className="relative duration-500 
                        group-hover:ease-linear group-hover:bg-yellow-400/90 
                        group-hover:p-4 group-hover:rounded-xl group-hover:shadow-lg
                        peer-hover:bg-transparent"
            >
              mới
            </div>
          </div>
          <div className="w-full space-y-2 space-x-5 text-lg hidden md:flex flex-col justify-end">
            <div>Phép màu luôn xuất phát từ ý tưởng bất ngờ</div>
          </div>
        </div>
      </div>

      <Image
        src={"/main-character.png"}
        alt="hero"
        width={400}
        height={0}
        className="absolute bottom-0 -top-24 -left-20 z-40 animate-[wiggle_8s_ease-in-out_infinite]"
      />
    </div>
  )
}
