import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Main from "../components/html/main";
import SessionWrapper from "@/components/azure/session-wrapper";
import ClientWrapper from "@/components/azure/client-wrapper";

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
          <SessionWrapper>
            <Header />
            <Main>
              <ClientWrapper>
                {children}
              </ClientWrapper>
            </Main>
            <Footer />
          </SessionWrapper>
        </body>
      </html>
  );
}
