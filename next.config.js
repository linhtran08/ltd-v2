/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID
  }
}

module.exports = nextConfig
