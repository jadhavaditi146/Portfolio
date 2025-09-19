/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  env: {
    BACKEND_URL:
      process.env.BACKEND_URL ||
      'https://aditij-showcase.preview.emergentagent.com',
  },
};

module.exports = nextConfig;
