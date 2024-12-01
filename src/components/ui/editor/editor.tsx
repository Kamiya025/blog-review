"use client"

import dynamic from "next/dynamic"
import { useRef, useState, useMemo } from "react"

interface SimpleEditorProps {
  label: string
  placeholder?: string
}
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false })
export const SimpleEditor = ({ label, placeholder }: SimpleEditorProps) => {
  const editor = useRef(null)
  const [content, setContent] = useState("")

  const config = useMemo(
    () => ({
      readonly: false,
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  )

  return (
    <div className="flex flex-col gap-2">
      <div>{label}</div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // Cập nhật nội dung khi mất focus
        // tabIndex={1} // Sử dụng tabIndex nếu cần
      />
    </div>
  )
}
