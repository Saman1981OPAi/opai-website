/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true
  }
};

export default nextConfig;
