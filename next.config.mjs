// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // async rewrites() {
//     //     return [
//     //       {
//     //         source: '/manifest.json',
//     //         destination: '/api/manifest'
//     //       }
//     //     ];
//     //   }
//     images: {
//         domains: ['store.amkmofficial.com','placehold.co'],
//         // remotePatterns: ['store.amkmofficial.com'],//not worked ..nedds some modification
//       },
// };

// export default nextConfig;

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
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'store.amkmofficial.com',
              // You can specify path patterns if needed, or leave it out to match any path
              // pathname: '**',
          },
          {
              protocol: 'https',
              hostname: 'placehold.co',
              // pathname: '**',
          }
      ],
  },
};

export default nextConfig;
