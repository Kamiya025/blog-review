import localFont from "next/font/local"
import "./globals.css"
import { LayoutHeader } from "./header"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// })

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body
        className="bg-[#f5f6fb] bg-cover bg-repeat-y antialiased max-h-screen h-screen overflow-y-auto"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid h-full gap-1 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col h-full max-h-full w-full relative">
            <div id="header-main" className="sticky top-0 z-[99999] p-5">
              <LayoutHeader />
            </div>
            <div
              id={"body-main"}
              className="max-w-screen-xl p-3 lg:p-8 w-full overflow-auto grow mx-auto"
            >
              {children}
            </div>
          </main>
          {/* <footer className="flex gap-6 flex-wrap items-center justify-center bg-sky-600 w-full"></footer> */}
        </div>
      </body>
    </html>
  )
}
