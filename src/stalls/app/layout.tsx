import type React from "react"
import type { Metadata } from "next"
import { Geist, Bricolage_Grotesque, Albert_Sans, Poppins } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
})

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Event Management Dashboard",
  description: "Manage your stalls and artists",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${albertSans.variable} ${poppins.variable}`}>
      <body className="font-albert antialiased text-slate-900 bg-[#f8f9fb]">{children}</body>
    </html>
  )
}
