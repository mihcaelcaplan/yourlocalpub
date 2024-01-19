/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // basePath: '/yourlocalpub',
    images: { unoptimized: true },
    transpilePackages:["intl-tel-input"],
}

module.exports = nextConfig
