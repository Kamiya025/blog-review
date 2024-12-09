import { PostForm } from "@/components/post/form"
import { Editor } from "@/components/ui/editor/editor"
import { Input } from "@/components/ui/input"

export default function CreatePost() {
  return (
    <div className="container bg-white p-3 md:p-8 rounded-lg shadow-lg flex flex-col gap-8">
      <div className="text-center text-2xl">Thêm bài viết</div>
      <PostForm />
    </div>
  )
}
