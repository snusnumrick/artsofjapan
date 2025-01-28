/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.cdninstagram.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'scontent-sjc3-1.cdninstagram.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'scontent.cdninstagram.com',
                pathname: '/**',
            }
        ],
    },
}

export default nextConfig