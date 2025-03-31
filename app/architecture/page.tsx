import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Architectural Visualization | VirtuScope Studios",
  description:
    "Explore our architectural visualization and 3D rendering services for real estate and construction projects",
}

export default function ArchitecturePage() {
  const projects = [
    {
      title: "Modern Residential Complex",
      description: "Contemporary living spaces with distinctive curved balconies and orange accents",
      image: "/images/architecture1.png",
    },
    {
      title: "Commercial Building Design",
      description: "Elegant commercial space with retail on ground floor and offices above",
      image: "/images/architecture2.png",
    },
    {
      title: "Tropical Villa",
      description: "Modern white residential villa with wood accents and glass balconies",
      image: "/images/architecture3.png",
    },
    {
      title: "Fluid Wave Building",
      description: "Futuristic design with flowing, wave-like white balconies and expansive glass windows",
      image: "/images/architecture4.png",
    },
    {
      title: "Urban Apartment Complex",
      description: "Contemporary concrete apartment building with symmetrical balconies and pool area",
      image: "/images/architecture5.png",
    },
    {
      title: "Organic Earth Home",
      description: "Biophilic terracotta house with curved architecture and natural integration",
      image: "/images/architecture6.png",
    },
    {
      title: "Curved Interior Design",
      description: "Elegant interior featuring organic arches, curved staircases and natural light",
      image: "/images/architecture7.png",
    },
    {
      title: "Modern Shopping Center",
      description: "Distinctive commercial building with V-shaped supports and clean white aesthetic",
      image: "/images/architecture8.png",
    },
    {
      title: "Orange Pavilion",
      description: "Bold orange and white modern building with innovative tubular design",
      image: "/images/architecture9.png",
    },
  ]

  const services = [
    {
      title: "3D Exterior Rendering",
      description: "Photorealistic visualizations of building exteriors from any angle",
      icon: "🏢",
    },
    {
      title: "Interior Visualization",
      description: "Detailed renderings of interior spaces with furniture and lighting",
      icon: "🛋️",
    },
    {
      title: "Virtual Reality Tours",
      description: "Immersive VR experiences allowing clients to walk through unbuilt spaces",
      icon: "🥽",
    },
    {
      title: "Architectural Animation",
      description: "Dynamic fly-through videos showcasing the entire property",
      icon: "🎬",
    },
    {
      title: "Site Planning Visualization",
      description: "Bird's eye views of development sites with landscape integration",
      icon: "🗺️",
    },
    {
      title: "Marketing Materials",
      description: "High-quality visuals for brochures, websites, and presentations",
      icon: "📊",
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

        <h1 className="text-5xl font-black mb-6 text-white">Architectural Visualization</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          We transform architectural concepts into stunning visual experiences, helping clients visualize projects
          before construction begins and market properties effectively.
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

        <h2 className="text-3xl font-bold text-white mb-8">Our Architectural Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-800 p-6 rounded-lg hover-lift">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose VirtuScope for Architectural Visualization?</h2>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-start">
              <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Photorealistic quality that helps clients and stakeholders visualize the final result</p>
            </li>
            <li className="flex items-start">
              <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>VR integration allowing immersive exploration of spaces before they're built</p>
            </li>
            <li className="flex items-start">
              <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Fast turnaround times to meet project deadlines and marketing schedules</p>
            </li>
            <li className="flex items-start">
              <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Attention to detail that ensures accuracy in materials, lighting, and proportions</p>
            </li>
          </ul>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to visualize your architectural project?</h2>
          <Link href="/contact" className="apple-button inline-block">
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

