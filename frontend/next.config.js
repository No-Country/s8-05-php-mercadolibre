/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.blogs.es",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_ROUTE: process.env.API_ROUTE,
  }
};

module.exports = nextConfig;
