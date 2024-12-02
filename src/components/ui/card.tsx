export const Card = (props: {
  label: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`bg-white shadow-lg rounded-md md:grow ${props.className}`}>
      <div className="border-b border-slate-500 py-5 px-3 font-bold text-lg">
        {props.label}
      </div>
      <div className="w-full flex flex-col gap-1 px-2 ">{props.children}</div>
    </div>
  )
}
