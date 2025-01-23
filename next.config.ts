/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  images: {
    unoptimized: true, // 👈 Disables Image Optimization API
  },
};

export default nextConfig;
