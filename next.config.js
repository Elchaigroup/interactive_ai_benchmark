// next.config.js - More secure version
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Remove X-Frame-Options to use CSP instead
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https: http: data:;"
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig