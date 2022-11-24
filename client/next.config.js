/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER: 'http://localhost:4000',
    SITE_TITLE: 'Blogext'
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/blogs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
