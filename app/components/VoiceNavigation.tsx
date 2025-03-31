"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, MicOff, Volume2, Info } from "lucide-react"

export default function VoiceNavigation() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [feedback, setFeedback] = useState("")
  const [showTooltip, setShowTooltip] = useState(false)

  // Commands that the voice navigation can recognize
  const commands = [
    { command: "go to home", action: () => (window.location.href = "/") },
    {
      command: "go to services",
      action: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
    },
    { command: "go to about", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    {
      command: "go to contact",
      action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
    { command: "go to animation", action: () => (window.location.href = "/animation") },
    { command: "go to architecture", action: () => (window.location.href = "/architecture") },
    { command: "scroll down", action: () => window.scrollBy({ top: 300, behavior: "smooth" }) },
    { command: "scroll up", action: () => window.scrollBy({ top: -300, behavior: "smooth" }) },
  ]

  // List of example commands to show in the tooltip
  const exampleCommands = [
    "go to home",
    "go to services",
    "go to about",
    "go to contact",
    "go to animation",
    "go to architecture",
    "scroll down",
    "scroll up",
  ]

  const toggleListening = () => {
    setIsListening(!isListening)
  }

  useEffect(() => {
    let recognition: any = null

    if (isListening) {
      try {
        // @ts-ignore - SpeechRecognition is not in the TypeScript types
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        if (SpeechRecognition) {
          recognition = new SpeechRecognition()
          recognition.continuous = false
          recognition.interimResults = false
          recognition.lang = "en-US"

          recognition.onstart = () => {
            setFeedback("Listening...")
          }

          recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript.toLowerCase()
            setTranscript(transcript)

            // Check if the transcript matches any commands
            const matchedCommand = commands.find((cmd) => transcript.includes(cmd.command))

            if (matchedCommand) {
              setFeedback(`Executing: ${matchedCommand.command}`)
              setTimeout(() => {
                matchedCommand.action()
                setIsListening(false)
              }, 1000)
            } else {
              setFeedback("Command not recognized. Try again.")
              setTimeout(() => {
                setFeedback("")
              }, 3000)
            }
          }

          recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error)
            setFeedback(`Error: ${event.error}`)
            setIsListening(false)
          }

          recognition.onend = () => {
            if (isListening) {
              recognition.start()
            }
          }

          recognition.start()
        } else {
          setFeedback("Speech recognition not supported in this browser")
          setIsListening(false)
        }
      } catch (error) {
        console.error("Speech recognition error:", error)
        setFeedback("Speech recognition failed to initialize")
        setIsListening(false)
      }
    }

    return () => {
      if (recognition) {
        recognition.onend = null
        recognition.abort()
      }
    }
  }, [isListening])

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <div className="relative">
        <motion.button
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
            isListening ? "bg-primary text-white" : "bg-white text-gray-900"
          }`}
          onClick={toggleListening}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isListening ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
        </motion.button>

        <button
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center"
          onClick={() => setShowTooltip(!showTooltip)}
        >
          <Info className="h-4 w-4" />
        </button>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-16 right-0 w-64 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            >
              <h4 className="font-bold mb-2 flex items-center">
                <Volume2 className="h-4 w-4 mr-2" /> Voice Commands
              </h4>
              <ul className="text-sm space-y-1">
                {exampleCommands.map((cmd, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>"{cmd}"
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-16 right-0 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap"
            >
              {feedback}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

