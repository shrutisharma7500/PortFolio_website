"use client"

import { JSX, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Book, Cloud, Copy, Cpu, Github, Link, Link2, ReactJS } from "@deemlol/next-icons"

export function FloatingPaper({ count = 3 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [floatingItems, setFloatingItems] = useState<
    { icon: JSX.Element; key: string }[]
  >([])

  const availableIcons = [
    <Copy size={24} color="#A855F7" key="copy" />,
    <Cloud size={24} color="#A855F7" key="cloud" />,
    <Book size={24} color="#A855F7" key="book" />,
    <Cpu size={24} color="#A855F7" key="cpu" />,
    <Github size={24} color="#A855F7" key="github" />,
    <Link size={24} color="#A855F7" key="link" />,
    <Link2 size={24} color="#A855F7" key="link2" />,
    <ReactJS size={24} color="#A855F7" key="react" />,
  ]

  useEffect(() => {
    // Set dimensions initially & on resize
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Pre-select stable icons once
    const items = Array.from({ length: count }).map((_, i) => {
      const randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)]
return { icon: randomIcon, key: `float-icon-${i}` };     })
    setFloatingItems(items)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {floatingItems.map((item, i) => (
        <motion.div
          key={item.key}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            {item.icon}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
