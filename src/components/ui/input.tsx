import { useState } from "react"
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"

type InputProps<T extends FieldValues> = {
  id?: string
  label: string
  name: Path<T>
  type?: "text" | "email" | "password" | "file" | "textarea"
  placeholder?: string
  register: UseFormRegister<T>
  required?: boolean
  error?: FieldError
  className?: string
}
export const Input = <T extends FieldValues>({
  id,
  label,
  name,
  type = "text",
  placeholder = "",
  register,
  required = false,
  error,
  className = "",
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id ?? String(name)} className="font-semibold">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id ?? String(name)}
          {...register(name)}
          placeholder={placeholder}
          className={`border p-2 rounded-md ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      ) : (
        <div className="relative w-full h-fit">
          <input
            id={String(name)}
            type={
              type != "password" ? type : showPassword ? "text" : "password"
            }
            {...register(name, registerRules(name, required, label))}
            placeholder={placeholder}
            className={`w-full px-3 py-2 shadow-md rounded-lg border-2 focus:border-orange-500 outline-none  ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {type === "password" && (
            <div
              className="absolute right-0 top-0 bottom-0 my-auto mx-2 flex items-center cursor-pointer text-opacity-60 hover:text-orange-500"
              onClick={() => setShowPassword((pre) => !pre)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              )}
            </div>
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-xs px-2">{error.message}</p>}
    </div>
  )
}
const registerRules = (
  name: string,
  required?: boolean,
  label?: React.ReactNode,
  maxL?: number
) => {
  let baseRules
  const fieldPatterns = ["email"]

  if (label) {
    baseRules = {
      required: required ? `${label} này là bắt buộc` : undefined,
    }
  } else {
    baseRules = {
      required: required ? "Trường này là bắt buộc" : undefined,
    }
  }
  if (maxL)
    baseRules = {
      ...baseRules,
      maxLength: {
        value: maxL,
        message: "Độ dài đã vượt quá giới hạn",
      },
    }
  const patternRules: Record<string, any> = {
    email: { value: emailRegex, message: "Email chưa đúng định dạng" },
  }

  return fieldPatterns.includes(name)
    ? { ...baseRules, pattern: patternRules[name] ?? patternRules.default }
    : baseRules
}
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
