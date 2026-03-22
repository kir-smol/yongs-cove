"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const words = ["Waterfront", "Lake Ontario", "Prince Edward County", "Your Next Home"]

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
}
const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
}

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => {
          onComplete?.()
        }, 1000)
      }, 1000)
      return
    }

    setTimeout(
      () => {
        setIndex(index + 1)
      },
      index === 0 ? 1500 : 600,
    )
  }, [index, onComplete])


  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[99999999999]"
      style={{ backgroundColor: "#2B2C6E" }}
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-10 flex flex-col items-center gap-8"
          >
            <Image
              src="/images/youngscove-logo.jpg"
              alt="Young's Cove"
              width={200}
              height={120}
              className="w-32 sm:w-40 lg:w-48 h-auto rounded-lg"
              priority
            />
            <p className="flex items-center text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal tracking-tight">
              <span className="block w-2.5 h-2.5 bg-white rounded-full mr-3"></span>
              {words[index]}
            </p>
          </motion.div>
          {/* Decorative waves (visible during idle) */}
          <svg
            className="absolute bottom-0 left-0 w-full z-[1] pointer-events-none"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: "clamp(100px, 20vh, 200px)", opacity: 0.12 }}
          >
            <motion.path
              d="M0,224 C120,280 240,300 360,260 C480,220 600,140 720,160 C840,180 960,280 1080,290 C1200,300 1320,240 1440,224 L1440,320 L0,320 Z"
              fill="white"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1.5, delay: 0.5, ease: "easeOut" } }}
            />
            <motion.path
              d="M0,256 C160,200 320,280 480,270 C640,260 720,200 900,220 C1080,240 1200,300 1440,256 L1440,320 L0,320 Z"
              fill="white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6, transition: { duration: 1.8, delay: 0.8, ease: "easeOut" } }}
            />
          </svg>
        </>
      )}
    </motion.div>
  )
}
