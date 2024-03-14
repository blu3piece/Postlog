/** @type {import('next').NextConfig} */

const repository = `Postlog`;

const nextConfig = {
  output: process.env.NODE_ENV == "production" ? "export" : undefined,
  distDir: process.env.NODE_ENV == "production" ? "dist" : undefined,
  images: { unoptimized: true },
  assetPrefix : process.env.NODE_ENV === "production" ? `/${repository}/` : "",
  basePath : process.env.NODE_ENV === "production" ? `/${repository}` : "",
}

module.exports = nextConfig
