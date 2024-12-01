"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ItemPost } from "./item-post"

export const ListPosts = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get("page") ?? "1")
  return (
    <>
      <div className="col-span-full bg-white text-lg shadow-lg rounded-md p-3">
        Danh sách bài viết
      </div>
      <div className="grow bg-white shadow-lg flex flex-col gap-3 rounded-md p-5">
        <div className="grow">
          {[...Array(10)].map((_, e) => (
            <ItemPost
              key={e}
              id={e.toString()}
              title={"Tiêu đề " + ((page - 1) * 10 + e + 1)}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              date={"25/10/2001"}
              view={5000}
              isNew={e === 0}
            />
          ))}
        </div>
        <div className="flex justify-end py-1 gap-2">
          {[1, 2].map((e) => (
            <Link
              key={e}
              href={`/post?page=${e}`}
              className="flex items-center px-3 py-2 bg-orange-200 rounded-md hover:bg-orange-300 transition duration-300"
            >
              {e}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
