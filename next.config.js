/** @type {import('next').NextConfig} */

const TARGET_REPOSITORY = `blog-posts`;

const nextConfig = {
  output: process.env.NODE_ENV == "production" ? "export" : undefined,
  distDir: process.env.NODE_ENV == "production" ? "dist" : undefined,
  images: { unoptimized: true },
  assetPrefix : process.env.NODE_ENV === "production" ? `/${TARGET_REPOSITORY}/` : "",
  basePath : process.env.NODE_ENV === "production" ? `/${TARGET_REPOSITORY}` : "",
}

module.exports = nextConfig
