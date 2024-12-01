import Image from "next/image"
import Link from "next/link"

export const RankAuthor = () => {
  return (
    <div className="bg-white shadow-lg rounded-md md:grow  max-h-[30rem]">
      <div className="border-b border-slate-500 py-5 px-3 font-bold text-lg">
        Tác giả nổi bật
      </div>
      <div className="w-full flex flex-col gap-1 px-2 ">
        {[1, 2, 3, 4, 5].map((e) => (
          <Link
            href={"#"}
            key={e}
            className="flex gap-5 px-2 py-3 justify-center  divide-slate-900 w-full "
          >
            <div className="flex flex-col justify-center">
              <div className="text-lg font-bold">{e}</div>
            </div>
            <div className="grow flex justify-between items-center">
              <div className="relative h-12 w-12 flex justify-center items-center">
                {[1, 2, 3].includes(e) && (
                  <Image
                    src={`/author-rank-${e}.png`}
                    alt={`author-rank-${e}`}
                    className="absolute z-10 mx-auto -top-0.5"
                    width={295}
                    height={295}
                  />
                )}
                <div className="bg-slate-500 rounded-full !w-8 !h-8 aspect-square" />
              </div>
              <div className="text-right">
                <div className="text-pretty line-clamp-2">Tác giả {e}</div>
                <div className="text-xs px-1">{6 - e} bài viết</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
