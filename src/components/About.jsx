import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import profileImg from '../assets/about/profile.png'
import skylineImg from '../assets/about/skyline.png'
import robotImg from '../assets/about/robot.png'
import musicImg from '../assets/about/music.png'
import fedoraImg from '../assets/about/fedora.png'
import nsmbwImg from '../assets/about/nsmbw.png'

export default function About() {
  const facts = [
    { 
      text: "Hello! My name is Aadi.", 
      img: profileImg, 
      isLeft: false,
      imgClass: "absolute bottom-[-40px] md:bottom-[-60px] left-4 md:left-150 max-w-[180px] md:max-w-[350px] max-h-[110%] object-contain transition-transform duration-500 ease-out group-hover:rotate-2" 
    },
    { 
      text: "I'm a student in San Diego, CA.", 
      img: skylineImg, 
      isLeft: false,
      isTopCenter: true,
      textClass: "mx-auto text-center mt-4 md:mt-0 max-w-[90%] md:max-w-[80%]",
      imgClass: "absolute bottom-[-8px] right-0 max-w-[280px] md:max-w-[1000px] max-h-[75%] md:max-h-[70%] object-cover object-bottom w-full transition-all duration-500 ease-out group-hover:bottom-0" 
    },
    { 
      text: "I program robots for the First Robotics Competition.", 
      img: robotImg, 
      isLeft: true,
      imgClass: "absolute bottom-[-40px] md:bottom-[20px] left-4 md:left-12 max-w-[200px] md:max-w-[370px] max-h-[85%] object-contain transition-transform duration-500 ease-out group-hover:-rotate-2" 
    },
    { 
      text: "I also like playing piano!", 
      img: musicImg, 
      isLeft: false,
      imgClass: "absolute bottom-[-10px] md:bottom-[-20px] right-6 md:right-16 max-w-[180px] md:max-w-[240px] max-h-[80%] object-contain rotate-3 transition-transform duration-500 ease-out group-hover:rotate-1" 
    },
    { 
      text: "I like to tinker with different operating systems like Fedora.", 
      img: fedoraImg, 
      isLeft: true,
      imgClass: "absolute top-1/2 -translate-y-1/2 left-6 md:left-16 max-w-[220px] md:max-w-[300px] max-h-[90%] object-contain -rotate-1 rounded-md transition-transform duration-500 ease-out group-hover:rotate-1" 
    },
    { 
      text: "Super Mario is pretty cool :)", 
      img: nsmbwImg, 
      isLeft: false,
      imgClass: "absolute bottom-[-10px] md:bottom-[-20px] right-6 md:right-16 max-w-[180px] md:max-w-[240px] max-h-[80%] object-contain -rotate-3 transition-transform duration-500 ease-out group-hover:-rotate-1" 
    },
  ]

  const [index, setIndex] = useState(0)

  const nextFact = () => {
    setIndex((prev) => (prev + 1) % facts.length)
  }

  const currentFact = facts[index]

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
            Fun Facts
          </span>
          <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-4xl md:text-5xl font-medium text-white">
            About Me
          </h2>
        </div>

        {/* Sliding Fact Deck */}
        <div className="flex flex-col items-center gap-6">
          <motion.button
            onClick={nextFact}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group liquid-glass rounded-3xl w-full cursor-pointer select-none h-[340px] md:h-[280px] relative overflow-hidden text-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`relative w-full h-full p-8 md:p-12 md:px-16 flex ${
                  currentFact.isTopCenter ? 'items-start' : 'items-center'
                }`}
              >
                {/* Text Block */}
                <span className={`text-xl md:text-3xl font-medium text-white leading-relaxed z-10 ${
                  currentFact.textClass 
                    ? currentFact.textClass 
                    : `max-w-[85%] md:max-w-[55%] ${currentFact.isLeft ? 'ml-auto text-right md:text-left' : 'mr-auto'}`
                }`}>
                  {currentFact.text}
                </span>

                {/* Fixed Positioned Image */}
                <img
                  src={currentFact.img}
                  alt="About visual"
                  className={currentFact.imgClass}
                />
              </motion.div>
            </AnimatePresence>
          </motion.button>

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