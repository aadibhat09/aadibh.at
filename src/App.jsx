import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function AppContent() {
  useEffect(() => {
    const glassElements = Array.from(document.querySelectorAll('.liquid-glass, .glass-pill'))

    if (!glassElements.length) {
      return undefined
    }

    let frameId = 0
    let lastPointerEvent = null

    const setDefaultGlassState = () => {
      glassElements.forEach((element) => {
        element.style.setProperty('--glass-x', '50%')
        element.style.setProperty('--glass-y', '50%')
        element.style.setProperty('--glass-intensity', '0.55')
      })
    }

    const updateGlassState = () => {
      frameId = 0

      if (!lastPointerEvent) {
        return
      }

      const { clientX, clientY } = lastPointerEvent

      glassElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        const y = Math.max(0, Math.min(clientY - rect.top, rect.height))

        element.style.setProperty('--glass-x', `${x}px`)
        element.style.setProperty('--glass-y', `${y}px`)
        element.style.setProperty('--glass-intensity', '1')
      })
    }

    const handlePointerMove = (event) => {
      lastPointerEvent = event

      if (!frameId) {
        frameId = window.requestAnimationFrame(updateGlassState)
      }
    }

    const handlePointerLeave = () => {
      lastPointerEvent = null

      if (frameId) {
        window.cancelAnimationFrame(frameId)
        frameId = 0
      }

      setDefaultGlassState()
    }

    setDefaultGlassState()
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <main className="relative bg-black min-h-screen w-full flex flex-col overflow-x-clip selection:bg-white selection:text-black scroll-smooth pt-20 md:pt-24">
      <BackgroundVideo />
      <Navbar />
      <div className="flex flex-col w-full z-10">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="relative z-10 pb-4 pt-8 text-center text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white/35">
        © 2026 Aadi Bhat
      </footer>
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
