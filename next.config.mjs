/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WP_BASE_URL: process.env.NEXT_PUBLIC_WP_BASE_URL
  }
};

export default nextConfig;
