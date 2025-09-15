/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
// import withPWA from "@ducanh2912/next-pwa";

// const withPWAConfig = withPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   cacheOnFrontEndNav: true,
//   reloadOnOnline: true,
//   aggressiveFrontEndNavCaching: true,
//   swcMinify: true,
//   workboxOptions: {
//     disableDevLogs: true,
//   }
// });

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
  trailingSlash: true,
  experimental: {
    turbo: {}
  }
}

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);
