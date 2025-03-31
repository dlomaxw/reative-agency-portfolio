"use client"

import { motion } from "framer-motion"
import { Music, Building2, HardHat, Users, Lightbulb } from "lucide-react"

const clients = [
  {
    icon: <Music className="w-12 h-12 mb-4 text-primary" />,
    title: "Music Artists",
    description:
      "Visually captivating music videos and immersive promotional content that elevate performances and engage fans.",
  },
  {
    icon: <Building2 className="w-12 h-12 mb-4 text-secondary" />,
    title: "Corporates",
    description:
      "High-quality corporate videos, training simulations, and VR tours that showcase products or services effectively.",
  },
  {
    icon: <HardHat className="w-12 h-12 mb-4 text-primary" />,
    title: "Mining and Industrial Enterprises",
    description:
      "Safety training programs and virtual simulations that educate workers on operational protocols in a risk-free environment.",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-secondary" />,
    title: "Individuals for Personal Events",
    description:
      "High-quality videography and creative storytelling for weddings and milestone celebrations with immersive VR experiences.",
  },
  {
    icon: <Lightbulb className="w-12 h-12 mb-4 text-primary" />,
    title: "Creative Agencies",
    description:
      "Cutting-edge multimedia production capabilities and support in developing interactive content across various platforms.",
  },
]

export default function TargetClients() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who We Serve
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At VirtuScope Studios, we cater to a diverse clientele, each with distinct needs and expectations that guide
          our tailored solutions.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {client.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{client.title}</h3>
              <p className="text-gray-300">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

