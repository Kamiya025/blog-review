export const Button = (props: { children: React.ReactNode }) => {
  return (
    <button className="px-3 py-2 md:px-4 md:py-3 rounded-md bg-orange-500 hover:bg-orange-300 active:bg-orange-600 text-white text-nowrap">
      {props.children}
    </button>
  )
}
