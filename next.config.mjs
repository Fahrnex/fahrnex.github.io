/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/fahrnex.github.io',
  assetPrefix: '/fahrnex.github.io/',
}

export default nextConfig
