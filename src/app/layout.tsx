import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterPage from "./Footer/footer";
import HeaderPage from "./Header/page";
import NavPage from "./Nav/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderPage />
        <NavPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
