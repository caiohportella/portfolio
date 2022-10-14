/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
    loader: 'akamai',
    path: ' ',
  }
}

module.exports = nextConfig
