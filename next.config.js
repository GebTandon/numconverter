const { default: build } = require('next/dist/build')

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcMinifyDebugOptions: {
      compress: {
        defaults: true,
        side_effects: false,
      },
    },
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return new Date().toString("ddMMyy");
  },
}

module.exports = nextConfig
