import { Inter, Lato, Roboto_Mono } from "next/font/google"
import React, { Suspense } from "react"
import { AuthProvider } from "../auth/context"
import "./globals.css"
import { LayoutHeader } from "./header"
import { SkeletonLayout } from "./skeleton"
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
})

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.className} ${lato.className}
                 bg-[#f5f6fb] bg-cover bg-repeat-y antialiased max-h-screen h-screen overflow-y-auto text-gray-950`}
      >
        <Suspense fallback={<SkeletonLayout />}>
          <AuthProvider>
            <LayoutHeader />
            <main className="flex flex-col h-full gap-1 font-[family-name:var(--font-geist-sans)]">
              <div
                id={"body-main"}
                className="grow flex flex-col w-full relative"
              >
                <div className="max-w-screen-xl p-3 lg:p-8 w-full overflow-y-auto grow mx-auto">
                  {children}
                </div>
              </div>
              <footer className="max-h-8 flex gap-6 flex-wrap items-center justify-center px-2 py-1 bg-orange-400 w-full text-white">
                @Design by Kamiya
              </footer>
            </main>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  )
}
