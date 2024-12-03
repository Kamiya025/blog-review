import Link from "next/link"

export const CommentWrapper = () => {
  return (
    <div className={`w-full`}>
      <div className="w-full bg-orange-200 text-gray-700 text-lg shadow-lg rounded-md px-3 py-2">
        Thảo luận
      </div>
      <div className="flex justify-center w-full gap-5">
        <div className="px-3 py-5 flex flex-col gap-5 w-full md:w-7/12">
          {[...Array(10)].map((_, e) => (
            <ItemComment key={"comment" + e} />
          ))}
        </div>
      </div>
    </div>
  )
}
const ItemComment = () => {
  return (
    <div className="flex gap-1 items-start">
      <div className="relative">
        <div className="bg-slate-500 rounded-full !w-10 !h-10 aspect-square" />
      </div>
      <div className="py-2 grid grid-cols-5"></div>
      <div className="py-2 flex flex-col ">
        <Link href={"#"} className="text-lg font-bold">
          Người dùng
        </Link>
        <div className="rounded-md shadow-md px-5 py-2 max-w-lg w-full">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Id scelerisque
          natoque ipsum per primis curabitur natoque praesent? Erat netus amet
          hac turpis augue efficitur mauris. Cras proin non nunc et mollis quam.
          Auctor elementum rutrum quis ut mus commodo.
        </div>
        <div className="flex justify-end">
          <time className="text-right text-sm py-1 text-gray-500">
            25/10/2001 12:10
          </time>
        </div>
      </div>
    </div>
  )
}
