import { Inter, Lato, Roboto_Mono } from "next/font/google"
import React, { Suspense } from "react"
import { AuthProvider } from "../auth/context"
import "./globals.css"
import { LayoutHeader } from "./header"
import { SkeletonLayout } from "./skeleton"
import { Footer } from "./footer"
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
                    flex flex-col overflow-x-clip overflow-y-auto text-gray-950 antialiased
                   bg-[#f5f6fb] bg-cover bg-repeat-y min-h-screen h-screen`}
      >
        <main id={"body-main"} className="grow flex-1 w-full relative">
          <Suspense fallback={<SkeletonLayout />}>
            <AuthProvider>
              <LayoutHeader />
              <div className="max-w-screen-xl w-full lg:px-10 lg:pt-10 xl:px-14 xl:pt-14 overflow-y-auto grow mx-auto">
                {children}
              </div>
            </AuthProvider>
          </Suspense>
        </main>
        <footer className="max-h-8 flex gap-6 flex-wrap items-center justify-center px-2 py-1 bg-orange-400 w-full text-white">
          @Design by Kamiya
        </footer>
      </body>
    </html>
  )
}
