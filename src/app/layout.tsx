'use client'

import "./globals.css";
import { isResourceAllowedForRole } from "@/common/utils/accessbility/rolePermission";
import { usePathname } from "next/navigation";
import { Header } from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  isResourceAllowedForRole(pathName);

  return (
    <html lang="en">
      <body>
        <div className='container'>
          {pathName !== '/login' && <Header />}
          {children}
          {pathName !== '/login' && <Footer />}
        </div>
      </body>
    </html>
  );
}
