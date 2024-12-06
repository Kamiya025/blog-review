export const Card = (props: {
  label: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl md:grow ${props.className}`}>
      <div className="border-b border-gray-300 bg-orange-200 rounded-t-xl px-3 py-4 font-bold text-lg text-gray-700">
        {props.label}
      </div>
      <div className="w-full flex flex-col gap-1 px-2 ">{props.children}</div>
    </div>
  )
}
