import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Animation Services | VirtuScope Studios",
  description: "Explore our 3D animation and character design services for advertising and marketing campaigns",
}

export default function AnimationPage() {
  const projects = [
    {
      title: "Character Design",
      description: "Creating memorable characters that resonate with target audiences",
      image: "/images/character1.png",
    },
    {
      title: "Mascot Development",
      description: "Brand mascots that embody company values and create recognition",
      image: "/images/character2.png",
    },
    {
      title: "Creative Concepts",
      description: "Innovative visual ideas that communicate complex messages simply",
      image: "/images/creative1.png",
    },
    {
      title: "Educational Content",
      description: "Engaging characters for educational materials and e-learning",
      image: "/images/education1.png",
    },
    {
      title: "Product Visualization",
      description: "Bringing products to life through character-based storytelling",
      image: "/images/character3.png",
    },
    {
      title: "Brand Mascots",
      description: "Creating memorable brand representatives for marketing campaigns",
      image: "/images/character4.png",
    },
  ]

  return (
    <div className="bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-5xl font-black mb-6 text-white">Animation & Character Design</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          We create engaging 3D characters and animations that bring your brand to life, tell your story, and connect
          with your audience on an emotional level.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift">
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Animation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Concept</h3>
              <p className="text-gray-300">
                We develop character concepts based on your brand identity and campaign goals
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300">Our artists create detailed designs and get your feedback for refinements</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modeling</h3>
              <p className="text-gray-300">We build 3D models with attention to detail and brand consistency</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Animation</h3>
              <p className="text-gray-300">Characters come to life with movement that enhances your message</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to bring your ideas to life?</h2>
          <Link href="/contact" className="apple-button inline-block">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}

