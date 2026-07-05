import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import headshotImg from '../assets/headshot.png'

export default function Hero() {
  const titles = [
    'an Intern @ the NECTAR Lab at UCSC',
    'the Chief of Staff @ FRC Team Optix 3749',
    'a CyberPatriot competitor',
    'the Software Lead of my iGEM team',
    'a passionate engineer',
  ]

  const [titleIndex, setTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    let timer
    const currentFullText = titles[titleIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1))
      }, 30) // Deleting speed (ms per char)
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1))
      }, 60) // Typing speed (ms per char)
    }

    if (!isDeleting && currentText === currentFullText) {
      // Pause at full text display before deleting
      timer = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      // Cycle to the next title
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, titleIndex])

  return (
    <section className="relative min-h-[calc(100svh-7rem)] flex flex-col items-center justify-center px-6 py-3 md:py-4 overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-3 md:gap-4 -translate-y-4 md:-translate-y-6">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <img
            src={headshotImg}
            alt="Aadi Bhat headshot"
            className="w-28 h-28 md:w-[8.75rem] md:h-[8.75rem] rounded-full object-cover border border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white/50 text-[10px] md:text-[11px] font-medium tracking-[0.25em] uppercase mb-0"
        >
          Student • Engineer
        </motion.p>

        {/* Heading */}
        <div className="flex flex-col items-center gap-1 md:gap-1.5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-5xl md:text-[76px] font-normal tracking-tight leading-[1.05] bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
          >
            Aadi Bhat
          </motion.h1>

          {/* Typing Effect Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center min-h-[36px] mt-[-4px] md:mt-[-2px]"
          >
            <p className="text-base md:text-xl font-medium text-white/80 tracking-tight font-sans">
              <span className="text-white/40 font-normal">I am </span>
              <span className="text-white font-semibold inline-block border-r-2 border-white/80 pr-1 animate-pulse select-all">
                {currentText}
              </span>
            </p>
          </motion.div>
        </div>

        {/* Description / Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed font-normal"
        >
          High school senior @ DNHS interested in electrical and computer engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-0"
        >
          <a
            href="/experience"
            className="w-full sm:w-auto px-8 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>View Experience</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full text-xs font-semibold border border-white/15 bg-white/[0.02] text-white hover:border-white/45 hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-white/80" />
            <span>Get in Touch</span>
          </a>
        </motion.div>



      </div>
    </section>
  )
}
