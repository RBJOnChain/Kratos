import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#080B12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(profileData.meta.url),
  title: profileData.meta.title,
  description: profileData.meta.description,
  keywords: [
    "KRATOS",
    "KratosOnWeb3",
    "Crypto Twitter",
    "Web3 Personality",
    "CT Guy",
    "Shitposter",
    "Campaign Hunter",
    "Web3 Contributor",
    "Decentralized Identity",
  ],
  authors: [{ name: "KRATOS", url: "https://x.com/KratosOnWeb3" }],
  creator: "KRATOS (@KratosOnWeb3)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profileData.meta.url,
    title: profileData.meta.title,
    description: profileData.meta.description,
    siteName: "KRATOS // DIGITAL IDENTITY",
    images: [
      {
        url: "/images/kratos-avatar.png",
        width: 800,
        height: 800,
        alt: "KRATOS Digital Identity Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profileData.meta.title,
    description: profileData.meta.description,
    site: "@KratosOnWeb3",
    creator: "@KratosOnWeb3",
    images: ["/images/kratos-avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/kratos-avatar.png",
    shortcut: "/images/kratos-avatar.png",
    apple: "/images/kratos-avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "KRATOS",
    alternateName: "@KratosOnWeb3",
    description: profileData.heroDescription,
    image: `${profileData.meta.url}/images/kratos-avatar.png`,
    sameAs: [
      "https://x.com/KratosOnWeb3",
      "https://t.me/KratosOnWeb3",
    ],
    jobTitle: "Web3 Contributor & Digital Identity",
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#080B12] text-[#F5F7FA] font-sans antialiased selection:bg-[#1677FF] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
