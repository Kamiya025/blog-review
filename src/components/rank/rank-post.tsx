import Image from "next/image"
import Link from "next/link"
import { Card } from "../ui/card"

export const RankPost = () => {
  return (
    <Card
      label="Bảng xếp hạng bài viết"
      className="max-h-[29rem]"
      children={
        <>
          {[1, 2, 3, 4, 5].map((e) => (
            <Link
              href={`/post/${e}`}
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
              <div className="grow flex justify-between gap-1">
                <div className="flex flex-col gap-1">
                  <div className="text-pretty line-clamp-1">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. {e}
                  </div>
                  <div className="text-xs px-0">5000 lượt xem</div>
                </div>
                <div className="relative">
                  <div className="bg-slate-500 rounded-full !w-10 !h-10 aspect-square" />
                </div>
              </div>
            </Link>
          ))}
        </>
      }
    />
  )
}
