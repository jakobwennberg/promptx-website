/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This will temporarily disable ESLint during build
    ignoreDuringBuilds: true,
  },
}

export default nextConfig