import type { Metadata } from "next";
import "./globals.css";
import { fonts } from './fonts'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Uzi",
  description: "Last mile delivery SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
