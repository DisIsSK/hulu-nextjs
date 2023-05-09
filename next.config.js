/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'press.hulu.com',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
}