"use client"
import { Avatar } from "@/components/ui/avatar"
import { useParams } from "next/navigation"
import { useState } from "react"
import { ListUserPosts } from "./user-posts"
import { Card } from "@/components/ui/card"

export const UserDetailWrapper = () => {
  const { slugId } = useParams()
  return (
    <div className="flex flex-col gap-6 w-full min-h-full h-full">
      <div
        className="relative col-span-full text-lg flex flex-col items-center !h-[20rem] w-full
        bg-no-repeat bg-cover mb-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,246,251,1) 0%, rgba(0,212,255,0) 50%, rgba(245,246,251,1) 100%),url('/modern-gold-background.jpg')",
        }}
      >
        <div className="absolute -bottom-20 flex flex-col justify-center items-center gap-3">
          <Avatar size={"xl"} />
          <div className="text-xl font-bold line-clamp-1">Tác giả</div>
        </div>
      </div>
      <div className={"grid grid-cols-12 gap-6 h-full max-h-full"}>
        <div className="relative col-span-full md:col-span-8 flex flex-col gap-3">
          <ListUserPosts />
        </div>

        <div className={`col-span-full lg:col-span-4`}>
          <Card label="Giới thiệu" className="!h-fit">
            <div className="px-3 py-4">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Id
              scelerisque natoque ipsum per primis curabitur natoque praesent?
              Erat netus amet hac turpis augue efficitur mauris. Cras proin non
              nunc et mollis quam. Auctor elementum rutrum quis ut mus commodo.
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
