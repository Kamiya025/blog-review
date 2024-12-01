"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export const LayoutHeader = () => {
  const searchParams = useSearchParams()
  const searchPosts = searchParams.get("search")
  const [search, setSearch] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (search && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [search])
  return (
    <div className="bg-white rounded-md shadow-xl h-14 flex justify-between items-center">
      <div className="text-slate-800 text-2xl font-extrabold p-3">
        <Link href={"/"}>LOGO</Link>
      </div>
      <div className="hidden md:flex gap-5 items-center h-full">
        <div className="flex items-center transition-transform duration-1000 h-full">
          <Link
            href={"/"}
            className="relative px-3 flex gap-3 items-center transition-transform duration-1000 h-full group"
          >
            <div>Trang chủ</div>
            <div className="group-hover:w-10 group-hover:-translate-x-0 group- -translate-x-full group-hover:scale-110 duration-300 absolute bottom-0 right-0 transition-transform left-0 w-0 h-1 bg-orange-400 mx-auto"></div>
          </Link>
          <Link
            href={"/post"}
            className="relative px-3 flex gap-3 items-center transition-transform duration-1000 h-full group"
          >
            <div>Bài viết</div>
            <div className="group-hover:w-10 group-hover:-translate-x-0 group-focus-within:bg-black -translate-x-full group-hover:scale-110 duration-300 absolute bottom-0 right-0 transition-transform left-0 w-0 h-1 bg-orange-400 mx-auto"></div>
          </Link>
          <div>
            <form action="/post" className="flex items-center relative">
              <input
                ref={searchInputRef}
                name="search"
                defaultValue={searchPosts ?? undefined}
                className={`${
                  search ? "block" : "hidden"
                }  rounded-full border px-2 py-2`}
                placeholder="Tìm kiếm"
              />
              <button
                type={"button"}
                className={`${
                  search && "absolute right-0"
                } p-2 aspect-square rounded-full shadow-sm border hover:bg-slate-300 cursor-pointer`}
                onClick={
                  !search
                    ? () => {
                        setSearch(true)
                      }
                    : undefined
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div>
          <Link
            href={"/user/sign-in"}
            className="px-4 py-3 rounded-md bg-orange-500 hover:bg-orange-300 active:bg-orange-600 text-white text-nowrap"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}
