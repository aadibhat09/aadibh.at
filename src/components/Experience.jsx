import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Award, Shield, Cpu, BookOpen, Smile, Swords, Dna, UserCog, RefreshCw, Zap } from 'lucide-react'

export default function Experience() {
  const experienceViewportRef = useRef(null)
  const experienceTrackRef = useRef(null)
  const awardsViewportRef = useRef(null)
  const awardsTrackRef = useRef(null)
  const [experienceBounds, setExperienceBounds] = useState({ left: 0, right: 0 })
  const [awardsBounds, setAwardsBounds] = useState({ left: 0, right: 0 })
  const [teamOptixFlipped, setTeamOptixFlipped] = useState(false)

  const experiences = [
    {
      role: 'Software Lead',
      company: 'FRC Team Optix 3749',
      period: 'Sept 2023 — June 2026',
      location: 'San Diego, CA',
      icon: Cpu,
      points: [
        'Directed technical strategy and architecture for the software department, owning planning, task delegation, and delivery.',
        'Built and executed a structured onboarding program for 20+ new software members, designating projects and subsystem tasks.',
        'Developed modular robot code in Java (WPILib), integrating motor controllers, vision systems, and autonomous pathing.',
        'Contributed 150+ outreach hours for the club and conducted STEM bootcamps with community organizations.'
      ]
    },
    {
      role: 'ECE Intern',
      company: 'NECTAR Lab @ UC Santa Cruz',
      period: 'June 2026 — Present',
      location: 'Santa Cruz, CA',
      icon: Zap,
      points: [
        'Updates soon...'
      ]
    },
    {
      role: 'Team Captain',
      company: 'CyberAegis',
      period: 'Sept 2024 — Present',
      location: 'San Diego, CA',
      icon: Shield,
      points: [
        'Managed team logistics, meeting schedules, and competition prep across two seasons.',
        'Coordinated a team of six across different skillsets and assigned tasks based on individual strengths.',
        'Placed 10th in the nation (out of 2000+ teams) in the Open division semifinals.'
      ]
    },
    {
      role: 'Software Lead',
      company: 'DelNorte-SD iGEM',
      period: 'June 2025 — Present',
      location: 'San Diego, CA',
      icon: Dna,
      points: [
        'Coordinated deliverables across the software department with wet lab members to develop computational models.',
        'Scoped and built a cell image analysis pipeline and Hill\'s equation model from scratch and delivered for team use.',
        'Constructed and maintained the team wiki website, serving as the central documentation hub.'
      ]
    },
    {
      role: 'Bootcamp Coordinator & Teacher',
      company: 'San Diego Supercomputer Center',
      period: 'June 2024 — Present',
      location: 'San Diego, CA',
      icon: BookOpen,
      points: [
        'Educated 70+ middle school students in robotics with single board computers, Python, and Object-Oriented Programming (Java).',
        'Organized and led a group of Team Optix members in creating unique learning content.',
        'Designed unique interactive learning tools to accommodate diverse learning styles across students.'
      ]
    },
    {
      role: 'Team Lead & Student Researcher',
      company: 'Tech4Good @ UC Santa Cruz',
      period: 'June 2025 — Dec 2025',
      location: 'Santa Cruz, CA',
      icon: Smile,
      points: [
        'Led a subteam in social computing under Professor David Lee, owning task delegation and progress tracking.',
        'Participated in the prestigious Science Internship Program (SIP) at UC Santa Cruz under the Tech4Good organization.',
        'Improved platform adaptability and learning experience of Causeway through data-driven optimizations.'
      ]
    },
    {
      role: 'Karate Instructor',
      company: 'West Coast Martial Arts Academy',
      period: 'Feb 2024 — Aug 2025',
      location: 'San Diego, CA',
      icon: Swords,
      points: [
        'Instructed and mentored 100+ children in self-defense, discipline, and martial arts fundamentals.',
        'Developed differential learning plans for students across unique age groups, skill levels, and learning abilities.',
        'Achieved First Degree Black Belt in February 2024.'
      ]
    }
  ]

  const awards = [
    {
      title: 'FIRST Impact Award',
      org: 'FRC Team Optix 3749',
      desc: 'Celebrates a team\'s embodiment of the FIRST mission through community inspiration.',
      year: '2026'
    },
    {
      title: 'Sustainability Award',
      org: 'FRC Team Optix 3749',
      desc: 'Celebrates a team\'s ability to foster the growth of the next generation of students.',
      year: '2026'
    },
    {
      title: 'Innovation in Control Award',
      org: 'FRC Team Optix 3749',
      desc: 'Celebrates innovative control systems (button and vision systems) in a robot.',
      year: '2025'
    },
    {
      title: 'Excellence in Engineering Award',
      org: 'FRC Team Optix 3749',
      desc: 'Celebrates professional approach to design process (four-bar linkage robot design).',
      year: '2024'
    },
    {
      title: 'President’s Volunteer Service Award',
      org: 'WCMAA (Gold & Bronze)',
      desc: 'Awarded Gold for volunteering 100+ hours teaching martial arts in 2024 and 2025.',
      year: '2025'
    },
    {
      title: 'Top 10 Internationally @ Semis',
      org: 'CyberPatriot (CyberAegis)',
      desc: 'Placed in the top 0.5% nationwide among 2000+ teams across two seasons.',
      year: '2025, 2026'
    },
    {
      title: 'First Degree Black Belt',
      org: 'WCMAA',
      desc: 'Awarded for high-level proficiency in Hawaiian Kempo after practicing for nine years.',
      year: '2024'
    },
    {
      title: 'Piano Level 8 Honors',
      org: 'Royal Conservatory of Music',
      desc: 'Awarded for high-level proficiency in piano repertoire and technique after seven years.',
      year: '2026'
    }
  ]

  useEffect(() => {
    const updateBounds = () => {
      if (experienceViewportRef.current && experienceTrackRef.current) {
        const left = Math.min(0, experienceViewportRef.current.clientWidth - experienceTrackRef.current.scrollWidth)
        setExperienceBounds({ left, right: 0 })
      }

      if (awardsViewportRef.current && awardsTrackRef.current) {
        const left = Math.min(0, awardsViewportRef.current.clientWidth - awardsTrackRef.current.scrollWidth)
        setAwardsBounds({ left, right: 0 })
      }
    }

    updateBounds()
    window.addEventListener('resize', updateBounds)

    return () => {
      window.removeEventListener('resize', updateBounds)
    }
  }, [experiences.length, awards.length])

  return (
    <section id="experience" className="relative z-10 py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        
        {/* Experience Section */}
        <div className="flex flex-col gap-8 overflow-x-hidden">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
              Things I Do
            </span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-4xl md:text-5xl font-medium text-white">
              Activities & Experience
            </h2>
          </div>

          <div ref={experienceViewportRef} className="overflow-hidden w-full">
            <motion.div
              ref={experienceTrackRef}
              drag="x"
              dragConstraints={experienceBounds}
              dragElastic={0.12}
              dragMomentum={true}
              className="flex w-max gap-6 cursor-grab active:cursor-grabbing select-none pt-6 -mt-4"
            >
              {experiences.map((exp, idx) => {
                const IconComp = exp.icon
                const isTeamOptixLead = exp.company === 'FRC Team Optix 3749' && exp.role === 'Software Lead'

                if (isTeamOptixLead) {
                  return (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[430px]"
                      style={{ perspective: 1400 }}
                    >
                      <div className="grid" style={{ gridTemplateAreas: '"stack"' }}>
                        <motion.div
                          animate={{ rotateY: teamOptixFlipped ? -180 : 0 }}
                          whileHover={{ y: -4 }}
                          transition={{
                            rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                            y: { duration: 0.3 }
                          }}
                          style={{
                            gridArea: 'stack',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            pointerEvents: teamOptixFlipped ? 'none' : 'auto'
                          }}
                          className="liquid-glass rounded-3xl p-6 flex flex-col gap-4 border border-white/5 select-none relative"
                        >
                          <motion.button
                            type="button"
                            onClick={() => setTeamOptixFlipped(true)}
                            aria-label="Flip card to see Software Lead role"
                            whileHover="spin"
                            className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <motion.span
                              className="flex items-center justify-center"
                              variants={{ spin: { rotate: 180 } }}
                              transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                              <RefreshCw className="w-3.5 h-3.5 text-white/70" />
                            </motion.span>
                          </motion.button>

                          <div className="flex items-start justify-between gap-4 pointer-events-none pr-8">
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/10 flex-shrink-0">
                                <UserCog className="w-5 h-5 text-white/80" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-white text-base leading-snug break-words">Chief of Staff</h3>
                                <p className="text-white/60 text-xs mt-0.5 break-words">{exp.company}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end text-right shrink-0">
                              <span className="text-xs font-medium text-white/80">June 2026 — Present</span>
                              <span className="text-[10px] text-white/40">{exp.location}</span>
                            </div>
                          </div>

                          <ul className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4 pointer-events-none">
                            <li className="text-xs text-white/70 leading-relaxed list-disc list-inside pl-1 marker:text-white/30">
                              Updates soon...
                            </li>
                          </ul>
                        </motion.div>
                        <motion.div
                          animate={{ rotateY: teamOptixFlipped ? 0 : 180 }}
                          whileHover={{ y: -4 }}
                          transition={{
                            rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                            y: { duration: 0.3 }
                          }}
                          style={{
                            gridArea: 'stack',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            pointerEvents: teamOptixFlipped ? 'auto' : 'none'
                          }}
                          className="liquid-glass rounded-3xl p-6 flex flex-col gap-4 border border-white/5 select-none relative"
                        >
                          <motion.button
                            type="button"
                            onClick={() => setTeamOptixFlipped(false)}
                            aria-label="Flip card back to Chief of Staff role"
                            whileHover="spin"
                            className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <motion.span
                              className="flex items-center justify-center"
                              variants={{ spin: { rotate: 180 } }}
                              transition={{ duration: 0.8, ease: 'easeInOut' }}
                            >
                              <RefreshCw className="w-3.5 h-3.5 text-white/70" />
                            </motion.span>
                          </motion.button>

                          <div className="flex items-start justify-between gap-4 pointer-events-none pr-8">
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/10 flex-shrink-0">
                                <IconComp className="w-5 h-5 text-white/80" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-white text-base leading-snug break-words">{exp.role}</h3>
                                <p className="text-white/60 text-xs mt-0.5 break-words">{exp.company}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end text-right shrink-0">
                              <span className="text-xs font-medium text-white/80">{exp.period}</span>
                              <span className="text-[10px] text-white/40">{exp.location}</span>
                            </div>
                          </div>

                          <ul className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4 pointer-events-none">
                            {exp.points.map((pt, pIdx) => (
                              <li key={pIdx} className="text-xs text-white/70 leading-relaxed list-disc list-inside pl-1 marker:text-white/30">
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  )
                }

                return (
                  <motion.div
                    key={idx}
                    className="liquid-glass rounded-3xl p-6 flex flex-col gap-4 border border-white/5 flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[430px] select-none user-select-none"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between gap-4 pointer-events-none">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/10 flex-shrink-0">
                          <IconComp className="w-5 h-5 text-white/80" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-white text-base leading-snug break-words">{exp.role}</h3>
                          <p className="text-white/60 text-xs mt-0.5 break-words">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end text-right shrink-0">
                        <span className="text-xs font-medium text-white/80">{exp.period}</span>
                        <span className="text-[10px] text-white/40">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4 pointer-events-none">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-white/70 leading-relaxed list-disc list-inside pl-1 marker:text-white/30">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="flex flex-col gap-8 overflow-x-hidden">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
              Things my Teams and I've Won
            </span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-4xl md:text-5xl font-medium text-white">
              Honors & Awards
            </h2>
          </div>

          <div ref={awardsViewportRef} className="overflow-hidden w-full">
            <motion.div
              ref={awardsTrackRef}
              drag="x"
              dragConstraints={awardsBounds}
              dragElastic={0.12}
              dragMomentum={true}
              className="flex w-max gap-4 cursor-grab active:cursor-grabbing select-none pt-6 -mt-4"
            >
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="liquid-glass rounded-2xl p-5 flex flex-col justify-between gap-4 border border-white/5 flex-shrink-0 w-[65vw] sm:w-[260px] md:w-[220px] select-none user-select-none"
                >
                  <div className="flex flex-col gap-2 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <Award className="w-5 h-5 text-white/75" />
                      <span className="text-[10px] font-semibold text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/5">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white text-sm leading-snug">{award.title}</h3>
                    <p className="text-[10px] text-white/40 font-medium">{award.org}</p>
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed border-t border-white/5 pt-2 pointer-events-none">
                    {award.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}