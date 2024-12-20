import { RankAuthor } from "@/components/rank/rank-author"
import { RankPost } from "@/components/rank/rank-post"
import { ListPosts } from "./list-posts"

export const PostWrapper = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className=" col-span-full md:col-span-8 flex flex-col gap-3">
          <ListPosts />
        </div>
        <div className="col-span-full md:col-span-4 flex flex-col gap-6 h-full">
          <RankPost />
          <RankAuthor />
        </div>
      </div>
    </div>
  )
}
