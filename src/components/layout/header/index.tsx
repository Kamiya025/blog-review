"use client"
import { useAuth } from "@/components/auth/context"
import { Button } from "@/components/ui/button"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export const LayoutHeader = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchPosts = searchParams.get("search")
  const [search, setSearch] = useState(true)
  const searchInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (search && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [search])

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
const headerMenuItemBottom = cva(
  "hidden md:block duration-500 absolute bottom-0 right-0 transition-transform left-0 h-1 bg-orange-400 mx-auto",
  {
    variants: {
      isFocus: {
        true: "w-10 group-hover/nav:w-0 group-hover:!w-10 group-hover:-translate-x-0 translate-x-0",

        false:
          "w-0 group-hover:w-10 group-hover:-translate-x-0 translate-x-3 group-hover:scale-110",
      },
    },
    compoundVariants: [
      {
        isFocus: false,
      },
    ],
    defaultVariants: {
      isFocus: false,
    },
  }
)

const NavItem = (props: {
  href: string
  intent?: "left" | "right"
  label: string
  isFocus?: boolean
}) => {
  return (
    <Link
      href={props.href}
      className={`relative px-3 py-2 flex gap-3 items-center 
                transition-transform duration-1000 h-full group
                w-full ${
                  props.intent != "right" ? "md:w-fit" : " hover:bg-orange-100"
                } group bg-white z-20
                hover:bg-orange-200 md:hover:bg-transparent rounded-md`}
    >
      <div className={`w-full ${props.intent === "right" && "text-right"}`}>
        {props.label}
      </div>
      {props.intent != "right" && (
        <div className={headerMenuItemBottom({ ...props })} />
      )}
    </Link>
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
const headerAuthItems = cva(
  "md:absolute md:top-16 bg-white rounded-md w-full md:max-w-sm h-fit right-0 md:shadow-xl py-3 md:p-3",
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
const FormSearch = () => {
  const searchParams = useSearchParams()
  const searchPosts = searchParams.get("search")
  const searchInputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      action="/post"
      className="flex items-center justify-center relative w-full"
    >
      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="absolute size-5 left-2 my-auto top-0 bottom-0"
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
          className={`bg-gray-200 rounded-full border-2 pl-10 px-3 py-2 w-full focus:!border-orange-400 outline-none`}
          placeholder="Tìm kiếm"
        />
      </div>
    </form>
  )
}
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
const HeaderAuth = () => {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(false)
  }, [])
  if (user != null)
    return (
      <Menu>
        <MenuButton className="w-full md:w-fit">
          <div
            className="bg-slate-500 rounded-full !w-8 !h-8 aspect-square ml-auto"
            onClick={() => {
              setOpen((pre) => !pre)
            }}
          />
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          className={
            " bg-white rounded-md w-full md:!max-w-[15rem] h-fit md:shadow-xl py-3 md:p-3 md:py-5 mt-5 z-[50000]"
          }
        >
          <MenuItem>
            <NavItem
              href={`/user/${user.name}`}
              label={user.name}
              intent="right"
            />
          </MenuItem>
          <MenuItem>
            <NavItem href="/post/create" label="Tạo bài viết" intent="right" />
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                logout()
              }}
              className="w-full text-right px-3 py-2 "
            >
              Đăng xuất
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    )
  return (
    <Link href={"/user/sign-in"}>
      <Button>Đăng nhập</Button>
    </Link>
  )
}
