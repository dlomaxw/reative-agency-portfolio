"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4 text-white">Company Overview</h3>
            <p className="text-gray-300 mb-6">
              VirtuScope Studios is a pioneering entity in the realm of virtual reality and digital solutions, dedicated
              to transforming the way individuals and organizations interact with technology. Established with a mission
              to innovate and inspire, our company leverages cutting-edge technology to create immersive experiences
              that captivate users and drive engagement.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
            <p className="text-gray-300 mb-6">
              Our mission at VirtuScope Studios is to empower creativity and enhance user interaction through
              state-of-the-art virtual reality solutions. We strive to bridge the gap between imagination and reality by
              providing tools that allow users to explore new dimensions, whether for entertainment, education, or
              professional training.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white">Values</h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Innovation - Continuously seeking new ideas and methods</li>
              <li>Creativity - Thinking outside the box and challenging norms</li>
              <li>Customer Satisfaction - Prioritizing client needs and feedback</li>
            </ul>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Unique Value Proposition</h3>
                <p className="text-gray-300">
                  What sets VirtuScope Studios apart is our commitment to customization and user-centric design. We
                  understand that each client has unique needs, which is why our team works closely with clients to
                  develop tailor-made solutions that align with their vision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

