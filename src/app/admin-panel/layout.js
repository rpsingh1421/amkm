// src/app/admin-panel/layout.js
import AuthProvider from "@/context/AuthContext";
import '@/app/globals.css'


export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}


// src/app/layout.js
export const metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "AMKM || AAO MILKAR KAREN MADAD",
    template: "%s ||AMKM Official website",
  },
  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.`,
  openGraph: {
    images: [
      {
        url: '/opengraph-image.png', // This is relative to the metadataBase
        width: 800,
        height: 600,
        alt: 'An example image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/opengraph-image.png', // This is relative to the metadataBase
      },
    ],
  },
};
