/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     return [
    //       {
    //         source: '/manifest.json',
    //         destination: '/api/manifest'
    //       }
    //     ];
    //   }
    images: {
        domains: ['store.amkmofficial.com'],
        // remotePatterns: ['store.amkmofficial.com'],//not worked ..nedds some modification
      },
};

export default nextConfig;
