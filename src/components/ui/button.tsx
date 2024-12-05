import { cva, VariantProps } from "class-variance-authority"

const buttonStyle = cva("text-nowrap", {
  variants: {
    intent: {
      primary:
        "bg-orange-500 hover:bg-orange-300 active:bg-orange-600 text-white ",
      grey: "bg-gray-300 hover:bg-gray-200 active:bg-gray-500 text-gray-800 ",
      success:
        "bg-green-500 hover:bg-green-300 active:bg-green-600 text-white ",
      error: "bg-red-600 hover:bg-red-300 active:bg-red-600 text-white ",

      disabled:
        "bg-gray-300 hover:bg-gray-200 active:bg-gray-500 text-gray-500 cursor-not-allowed",
    },
    size: {
      xs: "text-xs px-2 py-1 rounded",
      small: "text-sm px-[12px] py-[5px] rounded",
      medium: "text-md px-[20px] py-[9px] rounded-lg",
      large: "text-lg px-[24px] py-[12px] rounded-lg",
      xl: "text-xl px-[24px] py-[12px] rounded-lg",
    },
    full: {
      true: "w-full",
      false: "w-fit",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      full: false,
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    full: false,
  },
})
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {}
export const Button = (props: ButtonProps) => {
  return <button {...props} className={buttonStyle({ intent: props.intent })} />
}
