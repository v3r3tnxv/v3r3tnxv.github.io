import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import '@/styles/globals.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "СГУ Сочи",
  description: "Прототип системы 'Электронный журнал' (на примере ФГБОУ ВО 'Сочинский государственный университет')",
  openGraph: {
    title: "СГУ Сочи",
    description: "Прототип системы 'Электронный журнал' (на примере ФГБОУ ВО 'Сочинский государственный университет')",
    url: "https://v3r3tnxv.github.io/",
    siteName: "СГУ Сочи",
    images: [
      {
        url: "https://v3r3tnxv.github.io/preview.png",
        width: 262,
        height: 305,
        alt: "Логотип СГУ",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Также можно подключать другие форматы фавикона */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
