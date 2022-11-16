/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER: 'localhost:4000',
    SITE_TITLE: 'Blogext'
  },
}

module.exports = nextConfig
