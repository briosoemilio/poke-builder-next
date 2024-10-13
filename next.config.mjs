/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'archives.bulbagarden.net'], // Add the domain here
  },
  env: {
    NEXT_PUBLIC_WP_BASE_URL: process.env.NEXT_PUBLIC_WP_BASE_URL
  }
};

export default nextConfig;
