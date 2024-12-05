"use client"
import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"
import { HeaderAuth } from "./auth"
import { Nav4SM, NavItem } from "./nav"
import { FormSearch } from "./search-form"

export const LayoutHeader = () => {
  const pathname = usePathname()

  return (
    <header className="relative bg-white rounded-md shadow-xl h-14 flex justify-between items-center">
      <div className="text-slate-800 text-2xl font-extrabold p-3 select-none">
        <Link href={"/"}>LOGO</Link>
      </div>
      <Nav4SM />
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
