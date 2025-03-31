"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoItem {
  id: number
  title: string
  description: string
  posterImage: string
  videoUrl: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "VR Office Tour Experience",
    description: "Immersive virtual reality tour of a corporate headquarters",
    posterImage: "/images/architecture1.png",
    videoUrl: "/videos/sample1.mp4", // Placeholder - would need actual video files
  },
  {
    id: 2,
    title: "3D Character Animation Reel",
    description: "Showcase of our latest character animations and visual effects",
    posterImage: "/images/character2.png",
    videoUrl: "/videos/sample2.mp4", // Placeholder - would need actual video files
  },
  {
    id: 3,
    title: "Architectural Visualization Walkthrough",
    description: "Detailed 3D walkthrough of a modern residential complex",
    posterImage: "/images/architecture4.png",
    videoUrl: "/videos/sample3.mp4", // Placeholder - would need actual video files
  },
  {
    id: 4,
    title: "Product Animation Demo",
    description: "Animated showcase of product features and benefits",
    posterImage: "/images/character3.png",
    videoUrl: "/videos/sample4.mp4", // Placeholder - would need actual video files
  },
  {
    id: 5,
    title: "Organic Architecture Showcase",
    description: "Exploring the beauty of biophilic design principles",
    posterImage: "/images/architecture6.png",
    videoUrl: "/videos/sample5.mp4", // Placeholder - would need actual video files
  },
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swiped left
      nextVideo()
    }

    if (touchStart - touchEnd < -100) {
      // Swiped right
      prevVideo()
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const nextVideo = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevVideo = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      setIsPlaying(false)
    }
  }, [currentIndex])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Work in Motion
        </motion.h2>

        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video w-full rounded-xl overflow-hidden"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={videos[currentIndex].posterImage}
                muted={isMuted}
                loop
                playsInline
                onEnded={() => setIsPlaying(false)}
              >
                <source src={videos[currentIndex].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{videos[currentIndex].title}</h3>
                  <p className="text-lg text-gray-200">{videos[currentIndex].description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full">
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="bg-gray-800/70 hover:bg-gray-800 text-white p-2 rounded-full"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="text-white text-sm">
                    {currentIndex + 1} / {videos.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {videos.map((_, index) => (
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

