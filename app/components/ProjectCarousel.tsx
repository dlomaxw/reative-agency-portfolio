"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "3D Character Design",
    description: "Engaging character designs for marketing campaigns",
    image: "/images/character1.png",
    category: "Animation",
  },
  {
    id: 2,
    title: "Mascot Creation",
    description: "Memorable mascots that represent brand values",
    image: "/images/character2.png",
    category: "Animation",
  },
  {
    id: 3,
    title: "Creative Concept Art",
    description: "Innovative visual concepts for digital campaigns",
    image: "/images/creative1.png",
    category: "Animation",
  },
  {
    id: 4,
    title: "Educational Content",
    description: "Engaging educational characters and environments",
    image: "/images/education1.png",
    category: "Animation",
  },
  {
    id: 5,
    title: "Product Visualization",
    description: "Bringing products to life through character design",
    image: "/images/character3.png",
    category: "Animation",
  },
  {
    id: 6,
    title: "Brand Mascots",
    description: "Creating memorable brand representatives",
    image: "/images/character4.png",
    category: "Animation",
  },
  {
    id: 7,
    title: "Modern Residential Complex",
    description: "Contemporary living spaces with distinctive features",
    image: "/images/architecture1.png",
    category: "Architecture",
  },
  {
    id: 8,
    title: "Commercial Building Design",
    description: "Functional and aesthetic commercial spaces",
    image: "/images/architecture2.png",
    category: "Architecture",
  },
  {
    id: 9,
    title: "Tropical Villa",
    description: "Modern residential design with natural surroundings",
    image: "/images/architecture3.png",
    category: "Architecture",
  },
  {
    id: 10,
    title: "Fluid Wave Building",
    description: "Innovative design with flowing organic forms",
    image: "/images/architecture4.png",
    category: "Architecture",
  },
  {
    id: 11,
    title: "Organic Earth Home",
    description: "Biophilic design that blends with the environment",
    image: "/images/architecture6.png",
    category: "Architecture",
  },
  {
    id: 12,
    title: "Orange Pavilion",
    description: "Bold architectural statement with vibrant colors",
    image: "/images/architecture9.png",
    category: "Architecture",
  },
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9] w-full"
            >
              <div className="absolute inset-0 flex flex-col justify-end">
                <Image
                  src={projects[currentIndex].image || "/placeholder.svg"}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg" />
                <div className="relative p-8 text-white">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-primary rounded-full">
                    {projects[currentIndex].category}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-lg text-gray-200">{projects[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-500"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

