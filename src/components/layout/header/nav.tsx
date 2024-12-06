import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FormSearch } from "./search-form"
import { HeaderAuth } from "./auth"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

const navItemStyle = cva(
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
export const NavItem = (props: {
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
        <div className={navItemStyle({ ...props })} />
      )}
    </Link>
  )
}

export const Nav4SM = () => {
  const pathname = usePathname()

  return (
    <Menu>
      <MenuButton className="block md:hidden w-fit max-w-[70vw] rounded-full aspect-square p-3 hover:bg-orange-200">
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
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className={
          "flex flex-col gap-3 bg-gray-50 rounded-md w-[95vw] md:hidden h-fit shadow-xl px-3 py-3 -5 mt-5 z-[50000]"
        }
      >
        <MenuItem>
          <FormSearch />
        </MenuItem>
        <div>
          <MenuItem>
            <NavItem
              href="/"
              label="Trang chủ"
              isFocus={pathname === "/" || pathname === ""}
            />
          </MenuItem>
          <MenuItem>
            <NavItem
              href="/post"
              label="Bài viết"
              isFocus={pathname.startsWith("/post")}
            />
          </MenuItem>
        </div>
        <MenuItem>
          <div className="flex justify-end my-2">
            <HeaderAuth />
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
