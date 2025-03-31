"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import LanguageSelector from "./LanguageSelector"
import { useLanguage } from "@/app/context/language-context"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">VirtuScope Studios</span>
            <span className="text-xl font-bold text-primary">VirtuScope</span>
          </Link>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("services")}
          </Link>
          <Link
            href="/animation"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("animation")}
          </Link>
          <Link
            href="/architecture"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("architecture")}
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("contact")}
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center space-x-4">
          <LanguageSelector />

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}

