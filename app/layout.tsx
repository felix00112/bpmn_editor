import "antd/dist/reset.css"
import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "BPMN Editor",
  description: "Mit Ant Design & bpmn-js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
      </body>
      </html>
  )
}
