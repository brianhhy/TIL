import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "./utils/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "고양이 정보 앱",
  description: "고양이에 대한 재미있는 정보를 제공하는 PWA 앱",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "고양이 앱",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/next.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/next.svg", sizes: "any", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="application-name" content="고양이 정보 앱" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="고양이 앱" />
        <meta name="description" content="고양이에 대한 재미있는 정보를 제공하는 PWA 앱" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" href="/next.svg" />
        <link rel="icon" type="image/svg+xml" href="/next.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/next.svg" color="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
