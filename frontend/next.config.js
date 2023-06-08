/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_ROUTE: process.env.API_ROUTE,
  }
};

module.exports = nextConfig;
