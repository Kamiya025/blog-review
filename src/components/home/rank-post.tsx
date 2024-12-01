import Image from "next/image"
import Link from "next/link"

export const RankPost = () => {
  return (
    <div className="bg-white shadow-lg rounded-md md:grow max-h-[30rem]">
      <div className="border-b border-slate-500 py-5 px-3 font-bold text-lg">
        Bảng xếp hạng bài viết
      </div>
      <div className="w-full flex flex-col gap-2 px-2 py-5">
        {[1, 2, 3, 4, 5].map((e) => (
          <Link
            href={"#"}
            key={e}
            className="flex gap-5 px-2 py-3 justify-center items-center divide-slate-900 w-full "
          >
            <div className="w-5 flex justify-center">
              {[1, 2, 3].includes(e) ? (
                <Image
                  src={`/rank${e}.png`}
                  alt={`post-rank-${e}`}
                  width={20}
                  height={20}
                />
              ) : (
                <div className="text-lg font-bold">{e}</div>
              )}
            </div>
            <div className="grow flex justify-between">
              <div>
                <div className="text-pretty line-clamp-2">Tiêu đề {e}</div>
                <div className="text-xs px-1">5000 lượt xem</div>
              </div>
              <div className="relative">
                <div className="bg-slate-500 rounded-full !w-10 !h-10 aspect-square" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
