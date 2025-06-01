import "@/app/globals.css";
import Providers from "@/app/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentBox - 캠퍼스 단기 물품 대여 플랫폼",
  description: "대학 캠퍼스에서 필요한 물품을 쉽게 대여하고 공유하는 P2P 교류 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
