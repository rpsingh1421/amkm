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
  metadataBase: new URL('https://amkmofficial.com'),
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
    title: 'AMKM Official website',
    description: 'Aao Milkar Karen Madad (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.',
    url: 'https://amkmofficial.com',
    siteName: 'AMKM',
    authors: ['Ram Pratap Singh'],
    images: [
      {
        url: '/opengraph-image.png', // This is relative to the metadataBase
        width: 800,
        height: 600,
        alt: 'opengraph-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  /**======================================== */

  twitter: {
    card: 'summary_large_image',
    title: 'AMKM Official website',
    description: 'Aao Milkar Karen Madad (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.',
    creator: 'Ram Pratap Singh',
    images: [
      {
        url: '/opengraph-image.png', // This is relative to the metadataBase
        alt: 'opengraph-image',
      },
    ],
  },
  /**====================OR==================== */

  // twitter: {
  
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

  robots: {
    index: true,
    follow: true,
    //   nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

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
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', 'https://amkmofficial.com'),
      { url: '/icon.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
   /**======================================== */

   manifest: 'https://amkmofficial.com/manifest.json',

  /**======================================== */

  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['my-email', 'my-link'],
    },
  },

  /**======================================== */

  alternates: {
    canonical: 'https://amkmofficial.com',
    languages: {
      'en-US': 'https://amkmofficial.com/en-US',
      'de-DE': 'https://amkmofficial.com/de-DE',
    },
  //   media: {
  //     'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
  //   },
  //   types: {
  //     'application/rss+xml': 'https://nextjs.org/rss',
  //   },
  },

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
  
  category: 'non-profit',

  /**======================================== */
  
  other: {
    custom: 'meta',
  },
};
