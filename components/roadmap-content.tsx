'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { projects } from '@/lib/projects'

export function RoadmapContent() {
  return (
    <div className="min-h-screen">
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">Project History:</h1>
            <p className="text-xl text-purple-200 mb-12">
              🌍 Here is an overview of the projects I have worked on since beginning my journey in 2018.
            </p>

            <div className="space-y-8">
              {[...projects].reverse().map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-purple-900/50 border-purple-700 hover:bg-purple-900/60 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl hidden sm:block">{project.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-purple-300 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-2">
                            {project.title}
                          </h2>
                          <p className="text-purple-100 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-sm bg-purple-800/50 text-purple-200 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <footer className="mt-16 text-center text-purple-300 text-sm">
            <p>I&apos;m currently developing ideas</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a 
                href="https://t.me/Voltpwr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
              >
                Telegram
              </a>
            </div>
            <p className="mt-4">
              © 2018-{new Date().getFullYear()} | diegovolt ⚡ All Rights Reserved
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

