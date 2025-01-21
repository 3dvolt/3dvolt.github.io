'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cpu, Brain, GitBranch, Bitcoin, PiIcon as Python } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

const categories = [
  {
    icon: <Code2 className="w-6 h-6" />,
    name: "Frontend & Backend",
    techs: ["JavaScript", "TypeScript", "Vue.js", "Node.js"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "Databases",
    techs: ["MongoDB", "SQL"]
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    name: "Hardware",
    techs: ["Raspberry", "Arduino"]
  },
  {
    icon: <Python className="w-6 h-6" />,
    name: "Data & ML",
    techs: ["Python", "NumPy", "OpenCV"]
  },
  {
    icon: <Bitcoin className="w-6 h-6" />,
    name: "Blockchain",
    techs: ["Solana", "Rust"]
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    name: "Version Control",
    techs: ["Git", "GitHub", "GitLab"]
  }
]

export function TechStack() {
  return (
    <section className="py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={item} 
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Technology Stack
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-purple-200 text-lg"
        >
          Here Is A List Of Technology Where I&apos;m Skilled:
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6 border border-purple-700/50 hover:bg-purple-800/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-700/30 rounded-lg text-purple-300 group-hover:text-purple-200 transition-colors">
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg text-purple-200 group-hover:text-white transition-colors">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-purple-800/40 rounded-full text-sm text-purple-200 hover:text-white transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

