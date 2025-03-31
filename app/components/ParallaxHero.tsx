"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/app/context/language-context"

export default function ParallaxHero() {
  const { t } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  // Parallax effect values
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Prevent SSR issues with scrollY
  }

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background elements with parallax effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
      </motion.div>

      {/* Floating 3D objects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ y: y2 }}
      >
        <div className="w-full h-full relative">
          <Image src="/images/creative1.png" alt="VR Concept" fill className="object-contain" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-32 h-32"
        animate={{
          y: [0, 20, 0],
          rotateZ: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ y: y1 }}
      >
        <div className="w-full h-full relative">
          <Image src="/images/character3.png" alt="3D Character" fill className="object-contain" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        style={{ scale, opacity }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">{t("hero.title")}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#services" className="apple-button">
            {t("hero.cta.explore")}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            {t("hero.cta.contact")}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ opacity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}

