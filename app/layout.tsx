import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import Script from "next/script"
import { LanguageProvider } from "./context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VirtuScope Studios | Virtual Reality Solutions",
  description: "Pioneering virtual reality and digital solutions for immersive experiences",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/controls/OrbitControls.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

