import { AnimatePresence, motion } from 'motion/react'
import { Globe } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import headshotImg from '../assets/headshot.png'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-30 px-6 pt-6 w-full"
    >
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        {/* Left Side */}
        <div className="flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white font-semibold text-base md:text-lg hover:opacity-90 transition-opacity bg-none border-none cursor-pointer p-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isActive('/') ? (
                <motion.span
                  key="globe"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6"
                >
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.span>
              ) : (
                <motion.img
                  key="headshot"
                  src={headshotImg}
                  alt="Profile"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover"
                />
              )}
            </AnimatePresence>
            <span style={{ fontFamily: 'var(--font-brand)' }}>aadibh.at</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-8 text-white/80 text-xs md:text-sm font-medium">
          <button
            onClick={() => navigate('/about')}
            className={`hover:text-white transition-colors duration-300 bg-none border-none cursor-pointer p-0 ${
              isActive('/about') ? 'text-white' : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => navigate('/experience')}
            className={`hover:text-white transition-colors duration-300 bg-none border-none cursor-pointer p-0 ${
              isActive('/experience') ? 'text-white' : ''
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => navigate('/contact')}
            className={`hover:text-white transition-colors duration-300 bg-none border-none cursor-pointer p-0 ${
              isActive('/contact') ? 'text-white' : ''
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
