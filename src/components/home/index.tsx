import { RankAuthor } from "@/components/rank/rank-author"
import { RankPost } from "@/components/rank/rank-post"
import { Banner } from "./banner"
import { PostNew } from "./new-post"

export const HomeWrapper = () => {
  return (
    <div className="container flex flex-col gap-6 h-full justify-center mx-auto">
      <Banner />
      <div className="grid grid-cols-12 gap-6 h-full w-full">
        <div className="col-span-full md:col-span-8 flex flex-col gap-3">
          <PostNew />
        </div>
        <div className="col-span-full md:col-span-4 flex flex-col gap-6 h-full">
          <RankPost />
          <RankAuthor />
        </div>
      </div>
    </div>
  )
}
