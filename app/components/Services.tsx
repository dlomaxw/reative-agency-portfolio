"use client"

import { motion } from "framer-motion"
import { Film, Headset, Building, Calendar, Clapperboard, Camera, Globe, Cpu, Palette } from "lucide-react"

const serviceCategories = [
  {
    title: "Virtual Reality Solutions",
    description: "Immersive experiences that captivate users and drive engagement.",
    services: [
      {
        icon: <Building className="w-12 h-12 mb-4 text-primary" />,
        title: "Corporate VR Tours",
        description:
          "Interactive virtual tours of facilities, products, or services for real estate, hospitality, and tourism sectors.",
      },
      {
        icon: <Calendar className="w-12 h-12 mb-4 text-secondary" />,
        title: "Event VR Experiences",
        description: "Immersive environments for conferences, trade shows, and gatherings to engage audiences.",
      },
      {
        icon: <Headset className="w-12 h-12 mb-4 text-primary" />,
        title: "Custom VR Applications",
        description: "Tailored VR solutions for healthcare, education, and training to simulate real-world scenarios.",
      },
    ],
  },
  {
    title: "Multimedia Production",
    description: "Stunning visual content that tells your story.",
    services: [
      {
        icon: <Clapperboard className="w-12 h-12 mb-4 text-secondary" />,
        title: "Music Video Creation",
        description: "Visually stunning narratives that translate musical vision using advanced camera techniques.",
      },
      {
        icon: <Film className="w-12 h-12 mb-4 text-primary" />,
        title: "Documentary Filmmaking",
        description: "In-depth research and striking cinematography to create informative and inspiring narratives.",
      },
      {
        icon: <Camera className="w-12 h-12 mb-4 text-secondary" />,
        title: "Wedding Videography",
        description: "Artistic cinematography and heartfelt storytelling to capture the essence of special days.",
      },
    ],
  },
  {
    title: "Digital Development",
    description: "Cutting-edge digital solutions for modern businesses.",
    services: [
      {
        icon: <Globe className="w-12 h-12 mb-4 text-primary" />,
        title: "Web Development",
        description:
          "User-friendly and visually appealing websites with responsive designs that perform seamlessly across devices.",
      },
      {
        icon: <Cpu className="w-12 h-12 mb-4 text-secondary" />,
        title: "AI Module Creation",
        description: "Bespoke AI solutions that enhance decision-making and improve efficiency for businesses.",
      },
      {
        icon: <Palette className="w-12 h-12 mb-4 text-primary" />,
        title: "Graphic Design",
        description:
          "Captivating visuals for branding, marketing materials, and user interfaces that communicate effectively.",
      },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16">
            <motion.h3
              className="text-3xl font-bold mb-4 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              {category.title}
            </motion.h3>
            <motion.p
              className="text-xl text-center text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.1 }}
            >
              {category.description}
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-700 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.3 + index * 0.1 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

