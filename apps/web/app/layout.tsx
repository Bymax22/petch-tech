import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import AnimatedBackground from "./components/ui/AnimatedBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Petch-Tech Engineering | Engineering Elites | Industrial Solutions Zambia",
  description: "Engineering excellence in civil works, mechanical, electrical, instrumentation, fabrication, and industrial solutions for Zambia's mining, petroleum, and manufacturing sectors.",
  keywords: [
    "engineering Zambia",
    "mining contractors",
    "industrial engineering",
    "civil works",
    "mechanical engineering",
    "electrical installation",
    "instrumentation",
    "fabrication",
    "Ndola",
    "Copperbelt",
    "Zambia engineering",
    "industrial maintenance",
  ],
  authors: [{ name: "Petch-Tech Engineering" }],
  creator: "Petch-Tech Engineering",
  publisher: "Petch-Tech Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://petch-tech.com',
    title: 'Petch-Tech Engineering | Engineering Elites',
    description: 'Premium industrial engineering solutions across Zambia',
    siteName: 'Petch-Tech Engineering',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Petch-Tech Engineering - Engineering Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petch-Tech Engineering | Engineering Elites',
    description: 'Premium industrial engineering solutions across Zambia',
    images: ['/og-image.jpg'],
    creator: '@petchtech',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#111B73',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-background text-foreground min-h-screen flex flex-col font-sans antialiased`}>
        <AnimatedBackground />
        <Header />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}