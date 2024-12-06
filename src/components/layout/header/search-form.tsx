import { useSearchParams } from "next/navigation"
import { useRef } from "react"

export const FormSearch = () => {
  const searchParams = useSearchParams()
  const searchPosts = searchParams.get("search")
  const searchInputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      action="/post"
      className="flex items-center justify-center relative w-full"
    >
      <div className="relative w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="absolute size-5 left-2 my-auto top-0 bottom-0 text-orange-500"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          ref={searchInputRef}
          name="search"
          type="search"
          defaultValue={searchPosts ?? undefined}
          className={`bg-orange-50/60 rounded-full border-2 pl-10 px-3 py-2 w-full 
                      border-orange-50 focus:!border-orange-400 outline-none 
                      focus:bg-orange-50 hover:bg-orange-50 active:bg-orange-100 selection:bg-orange-100`}
          placeholder="Tìm kiếm"
        />
      </div>
    </form>
  )
}
