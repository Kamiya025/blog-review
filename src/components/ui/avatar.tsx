import { cva, VariantProps } from "class-variance-authority"

const avatarStyle = cva("text-nowrap rounded-full aspect-square bg-slate-500", {
  variants: {
    size: {
      sm: "w-6",
      small: "w-8",
      medium: "w-10",
      large: "w-20",
      xl: "w-40",
    },
  },
  compoundVariants: [
    {
      size: "medium",
    },
  ],
  defaultVariants: {
    size: "medium",
  },
})
interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof avatarStyle> {
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div
      className={avatarStyle({ size: props.size })}
      style={{
        backgroundImage: `url('${props.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )
}
