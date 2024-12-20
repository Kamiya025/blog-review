export const OtherPostWrapper = () => {
  return (
    <>
      <div className="w-full bg-orange-200 text-gray-700 font-bold text-lg shadow-lg rounded-md px-3 py-2">
        Bài viết liên quan
      </div>
      <div className="flex flex-wrap justify-around gap-3 py-5">
        {[...Array(5)].map((_, e) => (
          <OtherPostItem
            key={e}
            title={`Lorem ipsum odor amet, consectetuer adipiscing elit. ${
              e + 1
            }`}
            time="25/10/2001"
            views={5000}
          />
        ))}
      </div>
    </>
  )
}
export const OtherPostItem = (props: {
  title: string
  views: number
  time: string
}) => {
  return (
    <div
      className="relative bg-main-image bg-cover bg-opacity-55 h-40 w-full max-w-[19rem] 
                  col-span-full bg-white text-lg shadow-lg rounded-md 
                  flex flex-col justify-end"
    >
      <div
        className="cursor-pointer text-white text-lg font-bold 
                  bg-gradient-to-b from-transparent to-stone-900 
                  w-full px-3 py-2 hover:min-h-28 transition duration-500 
                  hover:ease-out rounded-b-md line-clamp-2 hover:line-clamp-none"
      >
        {props.title}
      </div>
      <div
        className="absolute z-20 -right-2 top-2 w-fit flex 
                  items-center gap-1 bg-orange-600 text-white 
                  text-xs px-2 py-1 rounded-l-lg rounded-t-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          <path
            fillRule="evenodd"
            d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
          />
        </svg>
        <span>{props.views}</span>
      </div>
      <div
        className="absolute z-10 -right-2 top-8 w-2 h-1 flex items-center gap-1 
                bg-orange-300 
                rounded-ee-full rounded-es-[-1rem]"
      ></div>
    </div>
  )
}
