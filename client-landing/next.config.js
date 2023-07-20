/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:slug([a-zA-Z0-9]+)', 
        destination: '/', 
        permanent: true,
      },
      {
        source: '/:slug1/:slug2*', 
        destination: '/', 
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig
