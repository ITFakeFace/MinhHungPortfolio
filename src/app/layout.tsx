import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "@/components/layout/navbar/NavBar";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/layout/footer/Footer";
import ContactSidebar from "@/components/layout/side-button-bar/ContactSidebar";
import EventPopup from "@/components/general/EventPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minh Hưng Portfolio",
  description: "Website giới thiệu các dự án và kỹ năng của Minh Hưng",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <PrimeReactProvider>
          <LanguageProvider>
            <div className="flex bg-[#4c5409] flex-col w-full min-h-screen">
              <Navbar />
              {/* PHẦN NỘI DUNG CHÍNH (Chiếm hết khoảng trống còn lại) */}
              <main className="flex-grow">{children}</main>
              <Footer />
              {/* THANH NAVBAR/HEADER NẰM Ở DƯỚI CÙNG */}
              <ContactSidebar />
            </div>
            <EventPopup />
          </LanguageProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
