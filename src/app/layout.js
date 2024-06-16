import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  //If not configured, metadataBase has a default value
// When VERCEL_URL is detected: https://${process.env.VERCEL_URL} otherwise it falls back to http://localhost:${process.env.PORT || 3000}.
  

  /**======================================== */

title: {
    default: "AMKM || AAO MILKAR KAREN MADAD",
    template: "%s ||AMKM Official website",
  },

  /**======================================== */

  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.`,
  
  /**======================================== */

  openGraph: {
    // title: 'Next.js',
    // description: 'The React Framework for the Web',
    // url: 'https://nextjs.org',
    // siteName: 'Next.js',
    // type: 'article',
    // publishedTime: '2023-01-01T00:00:00.000Z',
    // authors: ['Seb', 'Josh'],
    images: [
      {
        url: '/opengraph-image.png', // This is relative to the metadataBase
        width: 800,
        height: 600,
        alt: 'An example image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  /**======================================== */

  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/opengraph-image.png', // This is relative to the metadataBase
      },
    ],
  },

  /**====================OR==================== */

  // twitter: {
  //   card: 'app',
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   siteId: '1467726470533754880',
  //   creator: '@nextjs',
  //   creatorId: '1467726470533754880',
  //   images: {
  //     url: 'https://nextjs.org/og.png',
  //     alt: 'Next.js Logo',
  //   },
  //   app: {
  //     name: 'twitter_app',
  //     id: {
  //       iphone: 'twitter_app://iphone',
  //       ipad: 'twitter_app://ipad',
  //       googleplay: 'twitter_app://googleplay',
  //     },
  //     url: {
  //       iphone: 'https://iphone_url',
  //       ipad: 'https://ipad_url',
  //     },
  //   },
  // },

  /**======================================== */

  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },

  /**======================================== */

  // icons: {
  //   icon: [
  //     { url: '/icon.png' },
  //     new URL('/icon.png', 'https://example.com'),
  //     { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
  //   ],
  //   shortcut: ['/shortcut-icon.png'],
  //   apple: [
  //     { url: '/apple-icon.png' },
  //     { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
  //   ],
  //   other: [
  //     {
  //       rel: 'apple-touch-icon-precomposed',
  //       url: '/apple-touch-icon-precomposed.png',
  //     },
  //   ],
  // },

   /**======================================== */

  // manifest: 'https://nextjs.org/manifest.json',

  /**======================================== */

  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     me: ['my-email', 'my-link'],
  //   },
  // },

  /**======================================== */

  // alternates: {
  //   canonical: 'https://nextjs.org',
  //   languages: {
  //     'en-US': 'https://nextjs.org/en-US',
  //     'de-DE': 'https://nextjs.org/de-DE',
  //   },
  //   media: {
  //     'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
  //   },
  //   types: {
  //     'application/rss+xml': 'https://nextjs.org/rss',
  //   },
  // },

  /**======================================== */

  // appLinks: {
  //   ios: {
  //     url: 'https://nextjs.org/ios',
  //     app_store_id: 'app_store_id',
  //   },
  //   android: {
  //     package: 'com.example.android/package',
  //     app_name: 'app_name_android',
  //   },
  //   web: {
  //     url: 'https://nextjs.org/web',
  //     should_fallback: true,
  //   },
  // },

  /**======================================== */

  // archives: ['https://nextjs.org/13'],

  /**======================================== */
  
  // assets: ['https://nextjs.org/assets'],

  /**======================================== */
  
  // bookmarks: ['https://nextjs.org/13'],

  /**======================================== */
  
  // category: 'technology',

  /**======================================== */
  
  // other: {
  //   custom: 'meta',
  // },
};
