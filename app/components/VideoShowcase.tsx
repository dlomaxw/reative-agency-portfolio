"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoProps {
  title: string
  description: string
  videoUrl: string
  posterUrl: string
}

const VideoPlayer = ({ title, description, videoUrl, posterUrl }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    const video = document.getElementById(title) as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = document.getElementById(title) as HTMLVideoElement
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <video
        id={title}
        className="w-full aspect-video object-cover"
        poster={posterUrl}
        muted={isMuted}
        loop
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <button onClick={togglePlay} className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full">
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>

          <button onClick={toggleMute} className="bg-gray-800/70 hover:bg-gray-800 text-white p-2 rounded-full">
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function VideoShowcase() {
  const videos = [
    {
      title: "VR Experience Demo",
      description: "Immersive virtual reality experience for corporate training",
      videoUrl: "/videos/demo1.mp4", // Placeholder - would need actual video files
      posterUrl: "/images/character2.png",
    },
    {
      title: "3D Animation Reel",
      description: "Showcase of our latest character animations and visual effects",
      videoUrl: "/videos/demo2.mp4", // Placeholder - would need actual video files
      posterUrl: "/images/character3.png",
    },
  ]

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

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <VideoPlayer {...video} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-300 mb-6">
            These are just a few examples of our work. Contact us to see our full portfolio or discuss your project
            needs.
          </p>
          <a href="#contact" className="apple-button">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

