import './globals.css'
import {Chivo_Mono} from "next/font/google";
import Navbar from "@/app/navbar";
import TextCanvas from "@/app/textCanvas";

const font = Chivo_Mono({subsets: ['latin']})

export const metadata = {
  title: 'Aman Varshney',
  description: 'Portfolio of Aman Varshney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
      <Navbar />
      <div className={"w-full h-1/2 fixed bottom-0 -left-80"}>
          <TextCanvas />
      </div>
      {children}
      </body>
    </html>
  )
}
