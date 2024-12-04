import { cva } from "class-variance-authority"
import Link from "next/link"

const navItemStyle = cva(
  "hidden md:block duration-500 absolute bottom-0 right-0 transition-transform left-0 h-1 bg-orange-400 mx-auto",
  {
    variants: {
      isFocus: {
        true: "w-10 group-hover/nav:w-0 group-hover:!w-10 group-hover:-translate-x-0 translate-x-0",

        false:
          "w-0 group-hover:w-10 group-hover:-translate-x-0 translate-x-3 group-hover:scale-110",
      },
    },
    compoundVariants: [
      {
        isFocus: false,
      },
    ],
    defaultVariants: {
      isFocus: false,
    },
  }
)
export const NavItem = (props: {
  href: string
  intent?: "left" | "right"
  label: string
  isFocus?: boolean
}) => {
  return (
    <Link
      href={props.href}
      className={`relative px-3 py-2 flex gap-3 items-center 
                transition-transform duration-1000 h-full group
                w-full ${
                  props.intent != "right" ? "md:w-fit" : " hover:bg-orange-100"
                } group bg-white z-20
                hover:bg-orange-200 md:hover:bg-transparent rounded-md`}
    >
      <div className={`w-full ${props.intent === "right" && "text-right"}`}>
        {props.label}
      </div>
      {props.intent != "right" && (
        <div className={navItemStyle({ ...props })} />
      )}
    </Link>
  )
}
