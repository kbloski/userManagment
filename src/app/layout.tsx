'use client'

import localFont from "next/font/local";
import "./globals.css";
import { isResourceAllowedForRole } from "@/common/utils/accessbility/rolePermission";
import { usePathname  } from "next/navigation";
import { USER_KEY_LOCALSTORAGE } from "@/common/config";
import { Header } from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  isResourceAllowedForRole(pathName);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='container'>
          { pathName !== '/login' && <Header /> }
          {children}
          { pathName !== '/login' && <Footer /> }
        </div>
      </body>
    </html>
  );
}
