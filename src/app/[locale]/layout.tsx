/* eslint-disable import/no-named-as-default */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import ThemeProvider from "@/components/ui/theme-provider";
import siteInfo from "@/constants/siteInfo";
import React from "react";
/* import Nav from "@/components/layout/Nav"; */
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
};
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "tr" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
  }

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
