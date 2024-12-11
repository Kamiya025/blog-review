// app/(error-layout)/layout.tsx
export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="flex items-center justify-center h-screen bg-red-100">
        <div className="bg-white shadow-lg p-6 rounded-md max-w-md w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
