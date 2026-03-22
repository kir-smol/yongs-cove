"use client";

import { motion } from "framer-motion";
import { usePreloaderDone } from "@/components/PreloaderContext";

const titleWords = ["Waterfront", "Homes", "on", "Lake", "Ontario"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  },
});

export default function HeroVideo() {
  const preloaderDone = usePreloaderDone();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Staggered word reveal title */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate={preloaderDone ? "visible" : "hidden"}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.1] tracking-tight flex flex-wrap justify-center gap-x-[0.3em] px-2"
        >
          {titleWords.map((word) => (
            <motion.span key={word} variants={wordAnim} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Location */}
        <motion.div
          variants={fadeUp(1.0)}
          initial="hidden"
          animate={preloaderDone ? "visible" : "hidden"}
          className="mt-4 inline-flex items-center gap-2"
        >
          <svg className="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 384 512">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
          <span className="text-white/70 text-sm font-medium tracking-wide">Prince Edward County</span>
        </motion.div>

        {/* Dual CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <motion.a
            variants={fadeUp(1.3)}
            initial="hidden"
            animate={preloaderDone ? "visible" : "hidden"}
            href="#collections"
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-btn hover:bg-btn-hover text-white font-semibold rounded-full transition-colors text-sm"
          >
            Explore Collections
          </motion.a>
          <motion.a
            variants={fadeUp(1.5)}
            initial="hidden"
            animate={preloaderDone ? "visible" : "hidden"}
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-full border border-white/30 transition-colors text-sm"
          >
            Book Your Visit
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp(1.8)}
        initial="hidden"
        animate={preloaderDone ? "visible" : "hidden"}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
