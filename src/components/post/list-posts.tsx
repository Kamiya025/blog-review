"use client"

import { useSearchParams } from "next/navigation"
import { Pagination } from "../ui/pagination"
import { ViewData } from "../ui/view-data"
import { ItemPost } from "./item-post"
import { AdvancedSearchModal } from "./modal/advanced-search-modal"

export const ListPosts = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get("search") ?? undefined
  const categories = searchParams.get("categories") ?? undefined
  const page = Number(searchParams.get("page") ?? "1")

  return (
    <>
      <div className="flex justify-center gap-2 items-center col-span-full bg-orange-200 text-gray-700 text-lg shadow-lg rounded-md p-3">
        <div className="grow"> Danh sách bài viết</div>
        <AdvancedSearchModal />
      </div>
      <div className="grow bg-white shadow-lg flex flex-col gap-3 rounded-md p-5">
        <ViewData isData={page > 0}>
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
            href={{ pathname: "/post", query: { search, categories } }}
            totalPages={10}
            currentPage={page}
          />
        </ViewData>
      </div>
    </>
  )
}
