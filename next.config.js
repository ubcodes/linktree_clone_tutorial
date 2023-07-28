/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
         domains: [
            'pbs.twimg.com', 'ubcodesblog.com', 'images.unsplash.com'
         ]
    }
}

module.exports = nextConfig
