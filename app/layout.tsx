import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Kumbh_Sans } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "SPlus89 - Music Performer & Hip-Hop Artist",
  description:
    "Maestro of hip-hop and pop fusion. Discover new albums, upcoming events, and experience where music comes to life.",
  authors: [{ name: "StynerDev", url: "https://www.styner.dev/" }],
  creator: "StynerDev",
  publisher: "SPlus89",
  icons: {
    icon: "/favicon/Icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mwe5hxs.css" />
      </head>
      <body className={`font-subace antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
