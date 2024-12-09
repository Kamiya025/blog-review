"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
// Import Jodit Editor dynamically to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false })
interface EditorProps<T extends FieldValues> {
  id?: string
  label: string
  placeholder?: string
  name: Path<T>
  control: Control<T>
  rules?: object
  required?: boolean
  defaultValue?: string
}

export const Editor = <T extends FieldValues>({
  id,
  label,
  name,
  placeholder,
  control,
  defaultValue,
  rules,
  ...props
}: EditorProps<T>) => {
  const config = useMemo(
    () => ({
      readonly: false,
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
      placeholder: placeholder || "Bắt đầu viết...",
    }),
    [placeholder]
  )

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id ?? String(name)} className="font-semibold">
        {label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: props.required && "Trường này là bắt buộc",
          ...rules,
          validate: (value: any) =>
            typeof value === "string" || "Giá trị phải là chuỗi",
        }}
        render={({ field: { ref, value, onChange, onBlur }, fieldState }) => {
          return (
            <>
              <JoditEditor
                value={value || ""}
                // config={{
                //   readonly: false,

                //   // className: `border-2 ${
                //   //   fieldState.error && "!border-red-500"
                //   // }`,
                // }}
                onChange={(newContent) => onChange(newContent)}
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </>
          )
        }}
      />
    </div>
  )
}
