const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'misakdojo.com',
                port: '',
            }
        ]
    },

    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.misakdojo.com',
                    },
                ],
                destination: 'https://misakdojo.com/:path*',
                permanent: true,
            },
        ];
    },
};

module.exports = withBundleAnalyzer(nextConfig);