"use client"

import { useSearchParams } from "next/navigation"

import { Pagination } from "../ui/pagination"
import { ItemPost } from "./item-post"

export const ListPosts = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get("search")
  const page = Number(searchParams.get("page") ?? "1")
  return (
    <>
      <div className="flex justify-center gap-2 items-center col-span-full bg-orange-200 text-gray-700 text-lg shadow-lg rounded-md p-3">
        <div className="grow"> Danh sách bài viết</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 cursor-pointer"
        >
          <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
        </svg>
      </div>
      <div className="grow bg-white shadow-lg flex flex-col gap-3 rounded-md p-5">
        <div className="grow">
          {[...Array(10)].map((_, e) => (
            <ItemPost
              key={e}
              id={e.toString()}
              title={
                "Lorem ipsum odor amet, consectetuer adipiscing elit. " +
                ((page - 1) * 10 + e + 1)
              }
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              date={"25/10/2001"}
              view={5000}
              isNew={e === 0}
            />
          ))}
        </div>
        <Pagination
          href={{ pathname: "/post", query: search ? { search } : undefined }}
          totalPages={10}
          currentPage={page}
        />
      </div>
    </>
  )
}
