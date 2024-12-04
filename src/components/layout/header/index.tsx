"use client"
import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"
import { HeaderAuth } from "./auth"
import { NavItem } from "./nav"
import { FormSearch } from "./search-form"

export const LayoutHeader = () => {
  const pathname = usePathname()

  return (
    <header className="relative bg-white rounded-md shadow-xl h-14 flex justify-between items-center">
      <div className="text-slate-800 text-2xl font-extrabold p-3 select-none">
        <Link href={"/"}>LOGO</Link>
      </div>
      <Header4SM />
      <div className="absolute mx-auto right-0 left-0 md:max-w-[15rem] lg:max-w-[35rem] hidden md:block">
        <FormSearch />
      </div>
      <nav className="hidden md:flex gap-5 items-center h-full px-2">
        <div className="flex items-center transition-transform duration-1000 h-full group/nav">
          <NavItem
            href="/"
            label="Trang chủ"
            isFocus={pathname === "/" || pathname === ""}
          />
          <NavItem
            href="/post"
            label="Bài viết"
            isFocus={pathname.startsWith("/post")}
          />
        </div>
        <div>
          <HeaderAuth />
        </div>
      </nav>
    </header>
  )
}

const headerMenuItem4SM = cva(
  "absolute top-16 bg-white rounded-md w-full max-w-sm h-fit left-0 right-0 shadow-xl p-3",
  {
    variants: {
      isOpen: {
        true: "block",
        false: "hidden",
      },
    },
    compoundVariants: [
      {
        isOpen: false,
      },
    ],
    defaultVariants: {
      isOpen: false,
    },
  }
)

const Header4SM = () => {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  return (
    <nav className="block md:hidden px-2">
      <button
        className="rounded-full p-3 hover:bg-orange-200"
        onClick={() => {
          setOpen((pre) => !pre)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={headerMenuItem4SM({ isOpen: open })}>
        <FormSearch />
        <NavItem
          href="/"
          label="Trang chủ"
          isFocus={pathname === "/" || pathname === ""}
        />
        <NavItem
          href="/post"
          label="Bài viết"
          isFocus={pathname.startsWith("/post")}
        />
        <div className="flex justify-end my-2">
          <HeaderAuth />
        </div>
      </div>
    </nav>
  )
}
