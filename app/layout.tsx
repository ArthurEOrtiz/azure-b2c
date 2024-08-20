import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Main from "../components/html/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azure B2C",
  description: "Testing Azure B2C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
