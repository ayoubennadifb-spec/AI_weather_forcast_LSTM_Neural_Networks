/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint is configured via .eslintrc.json — skip the interactive setup prompt in CI
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
