'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const categories = [
  {
    label: 'Frontend',
    color: 'text-sky-400',
    pill: 'bg-sky-400/10 text-sky-300 border-sky-400/20',
    techs: ['JavaScript', 'TypeScript', 'Vue.js', 'Angular', 'React Native'],
  },
  {
    label: 'Backend',
    color: 'text-emerald-400',
    pill: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
    techs: ['Node.js', 'Python', 'Flask', 'REST APIs', 'WebSocket'],
  },
  {
    label: 'Databases',
    color: 'text-orange-400',
    pill: 'bg-orange-400/10 text-orange-300 border-orange-400/20',
    techs: ['MongoDB', 'SQL', 'Firebase'],
  },
  {
    label: 'Hardware',
    color: 'text-red-400',
    pill: 'bg-red-400/10 text-red-300 border-red-400/20',
    techs: ['Raspberry Pi', 'Arduino', 'ESP32', 'LoRaWAN', 'C++'],
  },
  {
    label: 'AI & Data',
    color: 'text-yellow-400',
    pill: 'bg-yellow-400/10 text-yellow-300 border-yellow-400/20',
    techs: ['Python', 'NumPy', 'Pandas', 'OpenCV', 'RAG'],
  },
  {
    label: 'Blockchain',
    color: 'text-violet-400',
    pill: 'bg-violet-400/10 text-violet-300 border-violet-400/20',
    techs: ['Solana', 'Rust', 'Web3', 'Smart Contracts'],
  },
  {
    label: '3D & Design',
    color: 'text-pink-400',
    pill: 'bg-pink-400/10 text-pink-300 border-pink-400/20',
    techs: ['CAD', '3D Printing', 'Rapid Prototyping'],
  },
  {
    label: 'DevOps',
    color: 'text-cyan-400',
    pill: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    techs: ['Git', 'GitHub', 'Linux', 'Docker', 'Electron'],
  },
]

export function TechStack() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-violet-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Technology Stack
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="space-y-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-3 border-b border-white/[0.05] last:border-0"
            >
              <span
                className={`text-xs font-bold uppercase tracking-widest shrink-0 w-20 ${cat.color}`}
              >
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${cat.pill}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
