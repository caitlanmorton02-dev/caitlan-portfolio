import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";
import { generateSEO } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...generateSEO(),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caitlan Morton",
  jobTitle: "Senior Product Designer",
  url: "https://www.caitlanmorton.com",
  sameAs: ["https://www.linkedin.com/in/caitlan-morton-242597176"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
