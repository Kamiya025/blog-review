import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"

type InputProps<T extends FieldValues> = {
  id?: string
  label: string
  name: Path<T>
  type?: "text" | "email" | "password" | "file" | "textarea"
  placeholder?: string
  register: UseFormRegister<T>
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
  error,
  className = "",
}: InputProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id ?? String(name)}>{label}</label>
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
        <input
          id={String(name)}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`px-3 py-2 shadow-md rounded-lg !border-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
}
