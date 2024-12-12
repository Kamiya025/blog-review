// app/layout.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import MainLayout from "@/components/layout"
import Providers from "./providers"

// Tạo instance của QueryClient
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <MainLayout>{children}</MainLayout>
    </Providers>
  )
}
