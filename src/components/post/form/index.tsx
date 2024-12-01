"use client"
import { SimpleEditor } from "@/components/ui/editor/editor"
import { Input } from "@/components/ui/input"
import { SubmitHandler, useForm } from "react-hook-form"

type PostModel = {
  title: string
  description: string
  image: any
  category: string
}
export const PostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<PostModel>()
  const onSubmit: SubmitHandler<PostModel> = (data) => console.log(data)

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Tiêu đề"
        name="title"
        register={register}
        error={errors.title}
      />
      <Input
        label="Ảnh bìa"
        type="file"
        name="image"
        register={register}
        // error={errors.image}
      />
      <Input
        label="Thể loại"
        name="category"
        register={register}
        error={errors.category}
      />
      <SimpleEditor label="Nội dung" />
      <div className="flex justify-end ">
        <button
          type="submit"
          className="px-4 py-3 rounded-md bg-orange-500 hover:bg-orange-300 active:bg-orange-600 text-white text-nowrap"
        >
          Tạo mới
        </button>
      </div>
    </form>
  )
}
