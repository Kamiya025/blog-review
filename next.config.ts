import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true, // Đặt thành false nếu muốn redirect tạm thời
      },
    ]
  },
}

export default nextConfig
