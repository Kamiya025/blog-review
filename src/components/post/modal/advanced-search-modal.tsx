import { Button } from "@/components/ui/button"
import { GroupChooseBtn } from "@/components/ui/group-choose-btn"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { register } from "module"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import {
  FieldValues,
  RegisterOptions,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form"
type AdvancedSearchModel = {
  search: string
  categories: string[]
}
export const AdvancedSearchModal = () => {
  const searchParams = useSearchParams()
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const categories = searchParams.getAll("categories")
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<AdvancedSearchModel>({ defaultValues: { categories } })
  return (
    <>
      <Modal
        isOpen={isOpenFilter}
        onClose={() => setIsOpenFilter(false)}
        label={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 cursor-pointer"
            onClick={() => setIsOpenFilter(true)}
          >
            <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
          </svg>
        }
        titleHeader={"Tìm kiếm nâng cao"}
      >
        <form action={"/post"} className="">
          <div className="flex flex-col gap-5 my-5">
            <Input
              name="search"
              register={register}
              label="Tìm kiếm"
              placeholder="Nhập từ khóa"
            />
            <GroupChooseBtn
              label="Thể loại"
              listValue={["Tự do", "Game", "Tài chính", "Môi trường"].map(
                (e) => ({ label: e, value: e })
              )}
              name={"categories"}
              register={register}
              type={"checkbox"}
              className="h-52"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Tìm kiếm</Button>
          </div>
        </form>
      </Modal>
    </>
  )
}
const CheckBoxList = () => {
  return <></>
}
