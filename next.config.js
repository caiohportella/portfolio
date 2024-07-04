/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  i18n: {
    locales: ['pt-BR','en', 'fr'],
    defaultLocale: 'pt-BR',
  }
}

module.exports = nextConfig
