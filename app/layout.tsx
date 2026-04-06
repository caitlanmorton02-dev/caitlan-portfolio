import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caitlan Morton — Product Designer",
  description:
    "Senior Product Designer specialising in end-to-end, evidence-led product design. Focused on experimentation, systems, and measurable outcomes across web and mobile.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Caitlan Morton — Product Designer",
    description: "End-to-end, evidence-led product design.",
    url: "https://www.caitlanmorton.com",
    siteName: "Caitlan Morton",
    images: [
      {
        url: "https://www.caitlanmorton.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Caitlan Morton — Product Designer",
    description: "End-to-end, evidence-led product design.",
    images: ["https://www.caitlanmorton.com/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LN0JFSM94B"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-LN0JFSM94B');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
