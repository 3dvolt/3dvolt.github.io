'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Send, Printer, Cpu, Bitcoin, Globe, Linkedin, ArrowDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { TechStack } from './tech-stack'

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const services = [
  {
    number: '01',
    icon: <Cpu className="w-5 h-5" />,
    title: 'Hardware & IoT',
    description:
      'End-to-end IoT solutions with Arduino, Raspberry Pi, and ESP boards. From firmware to physical device prototyping.',
    tags: ['Arduino', 'Raspberry Pi', 'C++', 'Python'],
  },
  {
    number: '02',
    icon: <Printer className="w-5 h-5" />,
    title: '3D Printing & Modeling',
    description:
      'Professional 3D modeling, rendering, and printing services. Rapid prototyping from concept to physical product.',
    tags: ['CAD', 'Rapid Prototyping', '3D Printing'],
  },
  {
    number: '03',
    icon: <Bitcoin className="w-5 h-5" />,
    title: 'Blockchain & dApps',
    description:
      'Decentralized application development with smart contract integration on Solana and EVM-compatible chains.',
    tags: ['Solana', 'Rust', 'Web3', 'TypeScript'],
  },
  {
    number: '04',
    icon: <Globe className="w-5 h-5" />,
    title: 'Web Development',
    description:
      'Full-stack web apps — dashboards, e-commerce, admin panels, and custom business solutions.',
    tags: ['Vue.js', 'Node.js', 'TypeScript', 'MongoDB'],
  },
]

export function Content() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0])

  return (
    <div className="text-white">
      {/* ── Hero ── */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[140px]" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3rem,12vw,7rem)] font-black tracking-tighter leading-[0.92] mb-5"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
              Diego
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-violet-400 via-violet-500 to-violet-700">
              Volt
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl font-medium text-white/55 mb-3"
          >
            Full Stack Developer
          </motion.p>

          {/* Specialties pill row */}
          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm text-white/35 tracking-[0.2em] uppercase mb-10"
          >
            IoT &nbsp;·&nbsp; Blockchain &nbsp;·&nbsp; Web &nbsp;·&nbsp; 3D Printing
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10"
          >
            <a
              href="mailto:3dvolt.info@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 text-sm sm:text-base"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/roadmap"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/15 text-white/75 font-semibold hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-200 text-sm sm:text-base"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3"
          >
            {[
              { href: 'mailto:3dvolt.info@gmail.com', Icon: Mail, label: 'Email' },
              {
                href: 'https://t.me/Voltpwr',
                Icon: Send,
                label: 'Telegram',
                external: true,
              },
              {
                href: 'https://www.linkedin.com/in/diego-de-santis/',
                Icon: Linkedin,
                label: 'LinkedIn',
                external: true,
              },
            ].map(({ href, Icon, label, external }) => (
              <a
                key={label}
                href={href}
                title={label}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="p-2.5 rounded-full border border-white/10 text-white/45 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Services ── */}
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
              What I Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={fadeUp}
                className="group relative p-6 sm:p-7 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/25 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-white/8 font-black text-5xl select-none group-hover:text-violet-500/15 transition-colors duration-300">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-violet-200 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-white/35 border border-white/[0.07]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Contact ── */}
      <section className="relative px-4 py-24 sm:py-32">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <div className="w-[700px] h-[400px] rounded-full bg-violet-700/12 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-violet-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5"
            >
              Let's work together
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/45 text-base sm:text-lg leading-relaxed mb-10"
            >
              Have a project in mind? I'd love to hear about it. Reach out and
              let's build something great.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8"
            >
              <a
                href="mailto:3dvolt.info@gmail.com"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
              <a
                href="https://t.me/Voltpwr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/15 text-white/75 font-semibold hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-200 text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                Message on Telegram
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-white/35"
            >
              <span>📧 3dvolt.info@gmail.com</span>
              <span className="hidden sm:block text-white/20">·</span>
              <span>✈️ @Voltpwr on Telegram</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/25">
          <span>© {new Date().getFullYear()} diegovolt. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:3dvolt.info@gmail.com"
              className="hover:text-white/60 transition-colors"
            >
              Email
            </a>
            <a
              href="https://t.me/Voltpwr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Telegram
            </a>
            <Link href="/roadmap" className="hover:text-white/60 transition-colors">
              Projects
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
