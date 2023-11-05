import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import siteInfo from "@/constants/siteInfo";
import { languages } from '../i18n/settings'
const koulen = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
};

import { dir } from 'i18next'



export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: {
    lang
  }
}: {
  children: React.ReactNode;
  params : {
    lang: string
  }
}) {
    
  return (
    <html   lang={lang} dir={dir(lang)}>
      <body className={koulen.className }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {
            children
          }
        </ThemeProvider>
      </body>
    </html>
  );
}
