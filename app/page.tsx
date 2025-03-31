import ParallaxHero from "./components/ParallaxHero"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import TeamMembers from "./components/TeamMembers"
import TargetClients from "./components/TargetClients"
import ContactForm from "./components/ContactForm"
import FloatingActionButton from "./components/FloatingActionButton"
import ProjectCarousel from "./components/ProjectCarousel"
import VideoCarousel from "./components/VideoCarousel"
import ModelViewer from "./components/ModelViewer"
import VoiceNavigation from "./components/VoiceNavigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <Services />
      <ProjectCarousel />
      <AboutUs />
      <ModelViewer />
      <TeamMembers />
      <VideoCarousel />
      <TargetClients />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Explore Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-700 rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4">Animation for Advertising</h3>
              <p className="text-gray-300 mb-6">
                Discover how our 3D character designs and animations can elevate your brand messaging and engage your
                audience.
              </p>
              <Link href="/animation" className="inline-flex items-center text-primary hover:text-primary/80">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-700 rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4">Architectural Visualization</h3>
              <p className="text-gray-300 mb-6">
                See how we transform architectural concepts into stunning visual experiences with our 3D rendering
                services.
              </p>
              <Link href="/architecture" className="inline-flex items-center text-primary hover:text-primary/80">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <FloatingActionButton />
      <VoiceNavigation />
    </>
  )
}

