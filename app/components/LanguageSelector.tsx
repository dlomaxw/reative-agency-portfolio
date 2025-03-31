"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage } from "@/app/context/language-context"

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "lg", name: "Luganda", flag: "🇺🇬" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "sw", name: "Kiswahili", flag: "🇹🇿" },
    { code: "rw", name: "Kinyarwanda", flag: "🇷🇼" },
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (code: string) => {
    setLanguage(code as any)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-full bg-gray-800/50 backdrop-blur-sm px-3 py-2 text-white hover:bg-gray-700/50 transition-colors"
        aria-label={t("language.select")}
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{languages.find((lang) => lang.code === language)?.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 dark:bg-gray-800"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`flex items-center w-full px-4 py-2 text-sm ${
                    language === lang.code
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  role="menuitem"
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {language === lang.code && <span className="ml-auto">✓</span>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

