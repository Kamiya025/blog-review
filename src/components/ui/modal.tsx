import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
const modalContainStyle = cva(
  "transition-transform mx-auto px-5 py-4 w-svw grow overflow-auto",
  {
    variants: {
      size: {
        sm: "max-w-sm lg:max-w-lg",
        md: "max-w-md lg:max-w-xl",
        lg: "max-w-xl lg:max-w-2xl",
        xl: "max-w-2xl lg:max-w-3xl",
      },
    },
    compoundVariants: [
      {
        size: "md",
      },
    ],
    defaultVariants: {
      size: "md",
    },
  }
)
interface ModalProps extends VariantProps<typeof modalContainStyle> {
  label: React.ReactNode
  titleHeader: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  isOpen: boolean
  onClose: () => void
}
export const Modal = (props: ModalProps) => {
  const { isOpen, onClose } = props
  return (
    <>
      <>{props.label}</>
      <Dialog open={isOpen} onClose={onClose} className="relative z-[999999]">
        <div className="fixed inset-0 w-screen h-screen overflow-y-auto bg-black/80 flex justify-center items-center">
          <div className="flex flex-col my-auto items-center justify-center !max-h-[80vh]">
            <DialogPanel className="grow border bg-white rounded-lg shadow-2xl">
              <DialogTitle className="relative text-lg font-bold px-5 py-3 border-b-0 border-orange-400/80 bg-orange-100/90 rounded-t-md">
                {props.titleHeader}
                <div className="absolute right-2 top-0 bottom-0 my-auto flex justify-center items-center">
                  <button
                    onClick={onClose}
                    className="cursor-pointer hover:text-gray-100 rounded-full p-1 hover:bg-orange-300 active:bg-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                  </button>
                </div>
              </DialogTitle>
              <div className={modalContainStyle(props)}>{props.children}</div>

              <div className="flex gap-4">{props.footer}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
