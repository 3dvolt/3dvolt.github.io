'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/projects'

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

type Project = (typeof projects)[number]

const grouped = projects.reduce<Record<number, Project[]>>((acc, p) => {
  if (!acc[p.year]) acc[p.year] = []
  acc[p.year].push(p)
  return acc
}, {})

const years = Object.keys(grouped)
  .map(Number)
  .sort((a, b) => b - a)

export function RoadmapContent() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/35 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <p className="text-violet-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Timeline
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-xl">
            {projects.length}+ projects spanning IoT, web, blockchain, and hardware — from 2018 to today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-14">
          {years.map((year, yearIdx) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: yearIdx * 0.07, duration: 0.45 }}
            >
              {/* Year separator */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-2xl sm:text-3xl font-black text-violet-500 tabular-nums">
                  {year}
                </span>
                <div className="flex-1 h-px bg-white/[0.07]" />
                <span className="text-xs text-white/25 font-medium tabular-nums">
                  {grouped[year].length} project{grouped[year].length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Project cards */}
              <div className="sm:pl-5 sm:border-l sm:border-white/[0.07] space-y-3">
                {grouped[year].map((project, pIdx) => (
                  <motion.div
                    key={`${year}-${pIdx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: yearIdx * 0.07 + pIdx * 0.04,
                      duration: 0.35,
                    }}
                    className="group relative p-5 sm:p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/20 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-0.5 shrink-0 hidden sm:block">
                        {project.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-violet-200 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/45 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-violet-500/8 text-violet-300/60 border border-violet-500/12"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/25">
          <span>© 2018–{new Date().getFullYear()} diegovolt. All rights reserved.</span>
          <a
            href="mailto:3dvolt.info@gmail.com"
            className="hover:text-white/50 transition-colors"
          >
            3dvolt.info@gmail.com
          </a>
        </footer>
      </div>
    </main>
  )
}
