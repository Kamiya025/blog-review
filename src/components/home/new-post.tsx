import Link from "next/link"
import { ItemPost } from "../post/item-post"

export const PostNew = () => {
  return (
    <>
      <div className="col-span-full bg-orange-200 text-gray-700 text-lg font-bold shadow-lg rounded-md p-3">
        Bài viết gần đây
      </div>
      <div className="grow bg-white shadow-lg flex flex-col gap-3 rounded-md p-5">
        <div className="grow flex flex-col gap-3">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <ItemPost
              key={e}
              id={e.toString()}
              title={
                "Lorem ipsum odor amet, consectetuer adipiscing elit. " + e
              }
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              date={"25/10/2001"}
              view={5000}
              tag={
                e === 1
                  ? "rank1"
                  : e === 2
                  ? "rank2"
                  : e === 3
                  ? "rank3"
                  : undefined
              }
            />
          ))}
        </div>
        <div className="flex justify-end py-1">
          <Link href={"/post"} className="flex items-center">
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
