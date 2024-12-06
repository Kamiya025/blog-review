import Image from "next/image"
import Link from "next/link"
type tagType = "rank1" | "rank2" | "rank3"
export const ItemPost = (props: {
  id: string
  title: string
  description: string
  date: string
  view: number
  isNew?: boolean
  tag?: tagType
}) => {
  return (
    <Link
      href={"/post/" + props.id}
      className="relative w-full rounded-md shadow-sm flex items-center gap-3 border p-3 hover:bg-slate-200"
    >
      <div className="relative">
        <div className="bg-slate-500 rounded-full !w-20 !h-20 aspect-square" />
        {props.tag ? (
          <Image
            src={`/${props.tag}.png`}
            alt={`post-${props.tag}`}
            width={30}
            height={30}
            className="absolute -top-2 -left-2"
          />
        ) : (
          props.isNew && (
            <span className="absolute text-xs rounded-full bg-red-400 px-2 py-1 text-white top-0">
              Mới
            </span>
          )
        )}
      </div>
      <div className="flex-grow flex flex-col gap-2">
        <div className="text-xl line-clamp-1 !text-sky-700 font-semibold">
          {props.title}
        </div>
        <div className="text-xs flex gap-3">
          <div className="flex gap-1 items-center text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            <time>25/10/2001</time>
          </div>
          <div className="flex gap-1 items-center text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span>{props.view}</span>
          </div>
        </div>
        <div className="text-sm line-clamp-2 text-pretty">
          {props.description}
        </div>
      </div>
    </Link>
  )
}
