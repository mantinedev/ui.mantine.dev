/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
