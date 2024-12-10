import { FieldValues, Path, UseFormRegister } from "react-hook-form"

interface GroupChooseProps<T extends FieldValues> {
  name: Path<T>
  intent?: "default" | "error" | "success"
  register: UseFormRegister<T>
  label?: React.ReactNode
  listValue: { label: string; value: any }[]
  onChange?: (value: any) => void
  type: "checkbox" | "radio"
  className?: string
  defautValue?: any
  classNameLabel?: string
  classNameList?: string
  message?: string
  disabled?: boolean
  required?: boolean
}

export function GroupChooseBtn<T extends FieldValues>(
  props: GroupChooseProps<T>
) {
  props.register(props.name, {
    required:
      props.required === true
        ? props.label
          ? props.label + " là trường bắt buộc"
          : "Đây là trường bắt buộc"
        : props.required,
  })
  return (
    <div>
      <div className="flex flex-col gap-3 w-full">
        {props.label && (
          <label className={`flex gap-1 text-label-3 text-typography-label`}>
            {props.label}
            {props.required === true && (
              <div className="text-error-base text-subtitle-4">*</div>
            )}
          </label>
        )}
        <div className={`flex flex-wrap gap-3 w-full ${props.classNameList}`}>
          {props.listValue.map((item, index) => (
            <label
              key={item.value + "-" + index}
              className="flex gap-1 items-center rounded-full shadow-sm bg-slate-300 has-[:checked]:bg-orange-500 cursor-pointer px-2 py-1"
            >
              <input
                id={`${props.name}_${index}`}
                {...props.register(props.name)}
                type={props.type}
                onChange={(event) => {
                  props.register(props.name).onChange(event)
                  props.onChange && props.onChange(event.target.value)
                }}
                disabled={props.disabled}
                value={item.value}
                className="w-4 h-4 peer bg-transparent rounded-full border-0 border-gray-100 p-4 text-center outline-none accent-orange-600"
              />
              <span
                className={`text-pretty peer-checked:text-white ${props.classNameLabel}`}
              >
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {props.message && (
        <span className="text-sm text-red-500">{props.message}</span>
      )}
    </div>
  )
}
