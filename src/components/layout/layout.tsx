import { Suspense } from "react"
import "./globals.css"
import { LayoutHeader } from "./header"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#f5f6fb] bg-cover bg-repeat-y antialiased max-h-screen h-screen overflow-y-auto text-gray-950">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col h-full gap-1 font-[family-name:var(--font-geist-sans)]">
            <main className="grow flex flex-col w-full relative">
              <div id="header-main" className="sticky top-0 z-[99999] p-5">
                <LayoutHeader />
              </div>
              <div
                id={"body-main"}
                className="max-w-screen-xl p-3 lg:p-8 w-full overflow-y-auto grow mx-auto"
              >
                {children}
              </div>
            </main>
            <footer className="max-h-8 flex gap-6 flex-wrap items-center justify-center px-2 py-1 bg-orange-400 w-full text-white">
              @Design by Kamiya
            </footer>
          </div>
        </Suspense>
      </body>
    </html>
  )
}
