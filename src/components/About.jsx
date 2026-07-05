import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function About() {
  const facts = [
    "👋🏽 Hello! My name is Aadi.",
    "🌎 I'm a student in San Diego, CA.",
    "👨🏽‍💻 I'm into software development, robotics, and cybersecurity.",
    "🤖 I build robots using WPILib, PhotonVision, and OpenCV.",
    "🥋 I was a teacher at my karate dojo, mentoring younger students.",
    "🎹 I also like playing piano!",
    "🧑‍🏫 I enjoy designing curriculum and helping others learn to code.",
    "🍄 Super Mario is pretty cool :)",
  ]

  const [index, setIndex] = useState(0)

  const nextFact = () => {
    setIndex((prev) => (prev + 1) % facts.length)
  }

  return (
    <section id="about" className="relative z-10 py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
            Background & Credentials
          </span>
          <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-4xl md:text-5xl font-medium text-white">
            About Me
          </h2>
        </div>

        {/* Sliding Fact Deck */}
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={nextFact}
            className="liquid-glass rounded-3xl p-10 md:p-16 w-full flex items-center justify-center text-center cursor-pointer select-none min-h-[220px] md:min-h-[260px]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-xl md:text-3xl font-medium text-white leading-relaxed"
              >
                {facts[index]}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {facts.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === index ? 'w-6 bg-white/80' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  )
}