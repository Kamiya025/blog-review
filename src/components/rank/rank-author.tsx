import Image from "next/image"
import Link from "next/link"
import { Card } from "../ui/card"
import { Avatar } from "../ui/avatar"

export const RankAuthor = () => {
  return (
    <Card
      label=" Tác giả nổi bật"
      className="max-h-[29rem]"
      children={
        <>
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
                  <Avatar />
                </div>
                <div className="text-right">
                  <div className="text-pretty line-clamp-2">Tác giả {e}</div>
                  <div className="text-xs px-1">{6 - e} bài viết</div>
                </div>
              </div>
            </Link>
          ))}
        </>
      }
    />
  )
}
