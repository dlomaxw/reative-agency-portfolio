"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Habimana Aime",
    role: "CEO/Founder",
    image: "/images/team-member1.png",
    bio: "Visionary leader with expertise in virtual reality technologies and digital innovation.",
  },
  {
    name: "Muvunyi Blaise",
    role: "Creative Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Talented creative professional guiding the artistic vision and design direction of all projects.",
  },
  {
    name: "Mwebaaze",
    role: "Content Management",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Skilled content strategist ensuring high-quality multimedia production across all projects.",
  },
]

export default function TeamMembers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

