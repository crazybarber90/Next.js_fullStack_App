/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      // ADD DOMAINS FROM WHERE YOU WANNA IMPORT IMAGE
    ],
  },
}

export default nextConfig
