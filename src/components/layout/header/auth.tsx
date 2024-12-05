import { useAuth } from "@/components/auth/context"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { useEffect, useState } from "react"
import { NavItem } from "./nav"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const HeaderAuth = () => {
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
            " bg-white rounded-md w-[95vw] md:w-full md:!max-w-[15rem] h-fit shadow-xl py-3 md:p-3 md:py-5 mt-5 z-[50000]"
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
    <>
      <Link href={"/user/sign-in"}>
        <Button>Đăng nhập</Button>
      </Link>
    </>
  )
}
