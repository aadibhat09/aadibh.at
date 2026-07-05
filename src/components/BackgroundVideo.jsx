import { useEffect, useRef } from 'react'

export default function BackgroundVideo() {
  const backgroundRef = useRef(null)

  useEffect(() => {
    const background = backgroundRef.current
    if (!background) return

    let frameId = 0
    let lastPointerEvent = null

    const setCursorVariables = (clientX, clientY) => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1

      background.style.setProperty('--cursor-x', `${clientX}px`)
      background.style.setProperty('--cursor-y', `${clientY}px`)
      background.style.setProperty('--cursor-x-alt', `${Math.max(width - clientX, 0)}px`)
      background.style.setProperty('--cursor-y-alt', `${Math.max(height - clientY, 0)}px`)
    }

    const resetCursorVariables = () => {
      background.style.setProperty('--cursor-x', '50%')
      background.style.setProperty('--cursor-y', '35%')
      background.style.setProperty('--cursor-x-alt', '70%')
      background.style.setProperty('--cursor-y-alt', '65%')
    }

    const updateCursor = () => {
      frameId = 0

      if (!lastPointerEvent) {
        return
      }

      setCursorVariables(lastPointerEvent.clientX, lastPointerEvent.clientY)
    }

    const handlePointerMove = (event) => {
      lastPointerEvent = event

      if (!frameId) {
        frameId = window.requestAnimationFrame(updateCursor)
      }
    }

    const handlePointerLeave = () => {
      lastPointerEvent = null

      if (frameId) {
        window.cancelAnimationFrame(frameId)
        frameId = 0
      }

      resetCursorVariables()
    }

    resetCursorVariables()
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
    <div
      ref={backgroundRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
      style={{
        '--cursor-x': '50%',
        '--cursor-y': '35%',
        '--cursor-x-alt': '70%',
        '--cursor-y-alt': '65%',
      }}
    >
      <div className="absolute inset-0 bg-[#03040a]" />
      <div
        className="absolute inset-[-15%] opacity-90 blur-3xl"
        style={{
          backgroundImage: [
            'radial-gradient(circle at var(--cursor-x) var(--cursor-y), rgba(255, 59, 64, 0.24) 0%, rgba(255, 59, 64, 0.1) 18%, rgba(255, 59, 64, 0) 40%)',
            'radial-gradient(circle at var(--cursor-x-alt) var(--cursor-y-alt), rgba(255, 152, 0, 0.12) 0%, rgba(255, 152, 0, 0.05) 22%, rgba(255, 152, 0, 0) 48%)',
            'radial-gradient(circle at 18% 82%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 16%, rgba(255, 255, 255, 0) 36%)',
          ].join(', '),
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 140px), repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 140px)',
          backgroundSize: '140px 140px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 28%), linear-gradient(315deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 24%)',
        }}
      />
    </div>
  )
}
