import './globals.css'
import {Chivo_Mono} from "next/font/google";
import Navbar from "@/components/navbar";
import MainCanvas from "@/components/MainCanvas";
import {Analytics} from "@vercel/analytics/react";
import Footer from "@/components/Footer";

const font = Chivo_Mono({subsets: ['latin']})

export const metadata = {
  title: 'Aman Varshney',
  description: 'Portfolio of Aman Varshney',
  icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <div className={"flex flex-col lg:flex-row"}>
          <MainCanvas />
          <div className={"w-full lg:min-h-screen flex flex-col"}>
              <Navbar />
              {children}
              <Footer />
          </div>
      </div>

      <Analytics />
      </body>
    </html>
  )
}
