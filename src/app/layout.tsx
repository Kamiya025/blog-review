import MainLayout from "@/components/layout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout children={children} />
}
