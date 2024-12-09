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
        className={`${inter.className} ${lato.className} relative
                    flex flex-col overflow-x-clip overflow-y-auto text-gray-950 antialiased
                   bg-[#f5f6fb] bg-cover bg-repeat-y min-h-screen h-screen`}
      >
        <Suspense fallback={<SkeletonLayout />}>
          <AuthProvider>
            <LayoutHeader />
            <main id={"body-main"} className="grow flex-1 w-full relative">
              <div
                id="main-conainer"
                className="container w-full h-full max-w-screen-xl z-50
                         lg:px-12 lg:pt-10 xl:px-16 xl:pt-14
                          overflow-y-auto grow mx-auto right-0 left-0"
              >
                {children}
              </div>
            </main>
          </AuthProvider>
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
