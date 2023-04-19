import './globals.css'
import {Chivo_Mono} from "next/font/google";
import Navbar from "@/app/navbar";
import MainCanvas from "@/app/MainCanvas";

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
      <body className={`${font.className} relative`}>
      <Navbar />
      {children}
      <MainCanvas />
      </body>
    </html>
  )
}
