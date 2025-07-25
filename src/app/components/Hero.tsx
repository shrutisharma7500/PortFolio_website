"use client"
import { Button } from "@/components/ui/button"
import { FloatingPaper } from "./FloatingPaper"

import { Github, Linkedin, Mail } from "@deemlol/next-icons"
import { motion } from "framer-motion"
import { RoboAnimation } from "@/app/components/RoboAnimation"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Shruti Sharma
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Computer Science Student | Full Stack Developer | Passionate About AI, Autonomous Agents & Scalable Web Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://github.com/shrutisharma7500" target="_blank" rel="noopener noreferrer">
               <Button
                  variant="outline"
                  className="text-black border-pink-500 hover:bg-pink-500/40 px-3 py-2"
                >
                  <Github size={18} />
                </Button>

            </a>
            <a href="https://www.linkedin.com/in/shruti-sharma-618598278" target="_blank" rel="noopener noreferrer">
              <Button
                  variant="outline"
                  className="text-black border-pink-500 hover:bg-pink-500/40 px-3 py-2"
                >
                  <Linkedin size={18} />
                </Button>
            </a>
            <a href="mailto:shrutisharma94827@gmail.com">
             <Button
                  variant="outline"
                  className="text-black border-pink-500 hover:bg-pink-500/40 px-3 py-2"
                >
                  <Mail size={18} />
                </Button>

            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}
